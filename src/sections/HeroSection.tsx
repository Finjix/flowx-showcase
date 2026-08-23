import HeroCanvas from "../components/HeroCanvas";
import { assetPath } from "../utils/assetPath";
import type { CSSProperties } from "react";

const HERO_SHOWCASE_IMAGES = [
  { src: "image/lunbo/动效制作.webp", alt: "动态素材生成案例" },
  { src: "image/lunbo/分镜助手2.webp", alt: "AI 分镜助手案例" },
  { src: "image/lunbo/首页2.webp", alt: "FlowX 平台首页案例" },
  { src: "image/lunbo/无限画布.webp", alt: "无限画布案例" },
  { src: "image/lunbo/字体设计.webp", alt: "字体设计案例" },
  { src: "image/lunbo/h5长图.webp", alt: "H5 长图案例" },
  { src: "image/lunbo/logo大师1.webp", alt: "Logo 大师案例" },
];

/**
 * 首屏与项目背景
 */
export default function HeroSection() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <HeroCanvas />
        <div className="hero-planet" />

        <span className="hero-spark plus" style={{ left: "12%", top: "13%", animationDelay: "0s" }}>+</span>
        <span className="hero-spark plus" style={{ left: "12.5%", top: "54%", animationDelay: "1.4s" }}>+</span>
        <span className="hero-spark plus" style={{ right: "13%", top: "56%", animationDelay: "2.1s" }}>+</span>
        <span className="hero-spark star" style={{ right: "31%", top: "26%", animationDelay: ".7s" }}>✦</span>
        <span className="hero-spark star" style={{ left: "31%", top: "34%", animationDelay: "1.9s" }}>✦</span>

        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="line serif-italic scribble">
              AI 赋能
              <svg className="ellipse" viewBox="0 0 320 130" aria-hidden="true" preserveAspectRatio="none">
                <ellipse cx="160" cy="65" rx="150" ry="47" />
              </svg>
              <span className="scribble-sparks">✦<span className="s2">✦</span></span>
            </span>
            <span className="line bold">提效内容生产</span>
          </h1>
          <p className="hero-positioning">图像 <i /> 视频 <i /> 模板 <i /> 内容生产管线</p>
          <div className="hero-lunbo" role="region" aria-label="FlowX 案例图片展示">
            <div className="hero-lunbo-track">
              {HERO_SHOWCASE_IMAGES.map((image, index) => (
                <div
                  className="hero-lunbo-card"
                  key={image.src}
                  style={{ "--card-angle": `${(360 / HERO_SHOWCASE_IMAGES.length) * index}deg` } as CSSProperties}
                >
                  <img src={assetPath(image.src)} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="hero-scroll-cue" href="#background" aria-label="向下浏览">
          <svg className="hero-scroll-cue-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 6v12m0 0 4-4m-4 4-4-4" />
          </svg>
        </a>
      </section>

      <section className="bg-sec" id="background">
        <div className="container bg-grid">
          <div className="bg-copy reveal">
            <span className="bg-eyebrow">AI CONTENT CREATION</span>
            <h2 className="bg-title">从单次生成，走向可复用的内容生产</h2>
            <div className="bg-body">
              <p>参与网易游戏 AI 内容工具平台建设，围绕图片、动效、视频与营销素材，把业务需求拆成 Prompt、素材规则和模板，并协同美术与运营完成可发布内容交付。</p>
            </div>
            <div className="platform-metrics">
              <div><strong>30,000+</strong><span>平台累计 AI 调用</span></div>
              <div><strong>80,000+</strong><span>平台累计素材产出</span></div>
            </div>
          </div>
          <div className="bg-shot reveal">
            <figure className="shot3d">
              <div className="shot3d-glow" />
              <div className="shot3d-frame"><img src={assetPath("image/platform-home.webp")} alt="FlowX 内容制作中心首页" /></div>
              <div className="shot3d-shadow" />
              <figcaption>内容制作中心 · AI 内容工具平台 <span>V1.5.0</span></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
