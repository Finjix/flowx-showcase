import AgentSection from "./components/agent/AgentSection";
import Lightbox from "./components/Lightbox";
import Nav from "./components/Nav";
import { useReveal } from "./hooks/useReveal";
import Guardrails from "./sections/Guardrails";
import HeroSection from "./sections/HeroSection";
import MainCase from "./sections/MainCase";
import { ContentTemplates, PortfolioClose, SelectedProjects } from "./sections/MoreWork";

/**
 * 项目展示根组件 — 组装各区块
 */
export default function App() {
  const root = useReveal();
  return (
    <div ref={root} id="top">
      <Nav />
      <main>
        <HeroSection />
        <SelectedProjects />
        <MainCase />
        <ContentTemplates />
        <Guardrails />
        <AgentSection />
        <PortfolioClose />
      </main>
      <Lightbox />
    </div>
  );
}
