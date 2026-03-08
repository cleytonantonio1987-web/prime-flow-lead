import heroBg from "@/assets/hero-bg.jpg";
import logoIcon from "@/assets/logo-icon.png";
import { WhatsAppButtons } from "./WhatsAppButtons";

const HeroSection = () =>
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Ambiente com piso premium" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>

    {/* Header / Logo */}
    <a
    href="#"
    onClick={(e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: "smooth" });}}
    className="absolute top-4 left-4 md:top-6 md:left-8 z-20 flex items-center gap-2 group"
    aria-label="Voltar ao topo">
    
      
    </a>

    <div className="relative z-10 section-padding container-narrow text-center">
      <span className="inline-block mb-4 py-2 rounded-full text-primary-foreground font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary-foreground/10 bg-primary px-[16px] text-2xl">
        Prime Pisos e Revestimentos
      </span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">Pisos Laminados, Vinílicos e Revestimentos

para sua obra ou reforma em Curitiba e Região Metropolitana<br className="hidden md:block" />
        <span className="block mt-2">para sua obra ou reforma em Curitiba e Região Metropolitana</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-6 leading-relaxed">
        Grande variedade de pisos premium com atendimento especializado e instalação profissional. Fale agora com a unidade mais próxima pelo WhatsApp e solicite seu orçamento.
      </p>

      {/* Bullet points */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8">
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Atendimento em Curitiba e região metropolitana</span>
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Orçamento rápido pelo WhatsApp</span>
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Instalação profissional</span>
      </div>

      <p className="text-primary-foreground/70 text-sm font-semibold mb-4 uppercase tracking-wide">
        Fale agora com a unidade mais próxima:
      </p>
      <WhatsAppButtons className="justify-center" />
      <p className="mt-6 text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
        📍 Lojas físicas em Barreirinha e Almirante Tamandaré
      </p>
    </div>
  </section>;


export default HeroSection;