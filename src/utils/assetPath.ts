/** Resolve files from public/ correctly on both local dev and GitHub Pages. */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
