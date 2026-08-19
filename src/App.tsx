import AgentSection from "./components/agent/AgentSection";
import Nav from "./components/Nav";
import { useReveal } from "./hooks/useReveal";
import Guardrails from "./sections/Guardrails";
import HeroSection from "./sections/HeroSection";
import MainCase from "./sections/MainCase";
import MoreWork from "./sections/MoreWork";

/**
 * 作品集根组件 — 组装各区块
 */
export default function App() {
  const root = useReveal();
  return (
    <div ref={root} id="top">
      <Nav />
      <main>
        <HeroSection />
        <MainCase />
        <Guardrails />
        <AgentSection />
        <MoreWork />
      </main>
    </div>
  );
}
