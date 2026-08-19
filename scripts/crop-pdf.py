"""Trim trailing print whitespace from Chromium-generated showcase PDFs."""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter


def content_bottom(image_path: Path) -> int | None:
    image = Image.open(image_path).convert("RGB")
    background = image.getpixel((0, 0))
    last_row: int | None = None

    for y in range(max(0, image.height - 2)):
        changed = 0
        for x in range(5, max(5, image.width - 5), 3):
            pixel = image.getpixel((x, y))
            if max(abs(pixel[index] - background[index]) for index in range(3)) > 5:
                changed += 1
        if changed > 3:
            last_row = y

    return last_row


def trim_pdf(source: Path, destination: Path, renderer: str) -> tuple[int, int]:
    reader = PdfReader(str(source))
    writer = PdfWriter()
    removed = 0
    trimmed = 0

    with tempfile.TemporaryDirectory(prefix="flowx-pdf-") as temp_dir:
        prefix = Path(temp_dir) / "page"
        subprocess.run(
            [renderer, "-r", "30", "-png", str(source), str(prefix)],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

        for index, page in enumerate(reader.pages, start=1):
            image_path = Path(f"{prefix}-{index:02d}.png")
            last_row = content_bottom(image_path)
            if last_row is None or last_row < 12:
                removed += 1
                continue

            old_height = float(page.mediabox.height)
            image_height = Image.open(image_path).height
            margin_rows = 14
            crop_height = min(image_height, last_row + margin_rows)
            new_height = old_height * crop_height / image_height

            if new_height < old_height - 1:
                lower_y = float(page.mediabox.lower_left[1]) + old_height - new_height
                upper_y = float(page.mediabox.upper_right[1])
                page.mediabox.lower_left = (page.mediabox.left, lower_y)
                page.mediabox.upper_right = (page.mediabox.right, upper_y)
                page.cropbox.lower_left = (page.cropbox.left, lower_y)
                page.cropbox.upper_right = (page.cropbox.right, upper_y)
                trimmed += 1

            writer.add_page(page)

    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)

    return trimmed, removed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--renderer", default=os.environ.get("FLOWX_PDFTOPPM"))
    args = parser.parse_args()

    renderer = args.renderer or shutil.which("pdftoppm")
    if not renderer:
        raise SystemExit("未找到 pdftoppm，请设置 FLOWX_PDFTOPPM")

    trimmed, removed = trim_pdf(args.source, args.destination, renderer)
    print(f"已裁切 PDF 页面：{trimmed} 张，移除空白页：{removed} 张")


if __name__ == "__main__":
    main()
