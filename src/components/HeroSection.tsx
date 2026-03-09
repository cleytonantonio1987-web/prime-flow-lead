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
      <span className="inline-block mb-4 py-2 rounded-full text-primary-foreground font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary-foreground/10 bg-primary px-[16px] text-sm">
        Prime Pisos e Revestimentos
      </span>
      <h1 className="text-3xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:text-2xl">
        Pisos laminados e vinílicos em Curitiba e Região Metropolitana
      </h1>
      

    

      {/* Price cards */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl px-8 py-5 text-center w-full sm:w-auto">
          <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wide mb-1">Piso Laminado</p>
          <p className="text-3xl font-bold text-primary-foreground">R$ 59,97<span className="text-lg">/m²</span></p>
          <p className="text-primary-foreground/70 text-xs mt-1">instalado</p>
        </div>
        <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl px-8 py-5 text-center w-full sm:w-auto">
          <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wide mb-1">Piso Vinílico</p>
          <p className="text-3xl font-bold text-primary-foreground">R$ 62,97<span className="text-lg">/m²</span></p>
          <p className="text-primary-foreground/70 text-xs mt-1">instalado</p>
        </div>
      </div>
      <div className="text-primary-foreground/50 text-xs mb-6 space-y-0.5">
        <p>*Pedido mínimo de 20m²</p>
        <p>*Não incluso manta, acabamentos e rodapés</p>
      </div>

      {/* Bullet points */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8">
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Orçamento rápido pelo WhatsApp</span>
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Instalação profissional</span>
        <span className="text-primary-foreground/90 text-sm md:text-base font-medium">✔ Garantia de instalação</span>
      </div>

      <p className="text-primary-foreground/70 text-sm font-semibold mb-4 uppercase tracking-wide">
        Fale agora com a unidade mais próxima:
      </p>
      <WhatsAppButtons className="justify-center" />
      

    
    </div>
  </section>;
export default HeroSection;