import heroBg from "@/assets/hero-bg.jpg";
import { WhatsAppButtons } from "./WhatsAppButtons";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Ambiente com piso premium" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="relative z-10 section-padding container-narrow text-center">
      <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary-foreground/10">
        Prime Pisos e Revestimentos
      </span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
        Pisos Laminados, Vinílicos, Porcelanatos e Revestimentos para Sua Obra ou Reforma em Curitiba
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed">
        Grande variedade de pisos premium com atendimento especializado e instalação profissional. Fale agora com a unidade mais próxima pelo WhatsApp e solicite seu orçamento.
      </p>
      <WhatsAppButtons className="justify-center" />
      <p className="mt-6 text-sm text-primary-foreground/60">
        Escolha a unidade mais próxima e fale diretamente com um especialista.
      </p>
    </div>
  </section>
);

export default HeroSection;
