// update 2
// update
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
      <span className="inline-block mb-4 py-2 rounded-full text-primary-foreground font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary-foreground/10 bg-primary px-[16px] text-lg">
        Prime Pisos e Revestimentos
      </span>

      <h1 className="text-3xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:text-2xl">
        Pisos laminados e vinílicos em Curitiba e região
      </h1>

      {/* Price cards */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl px-8 py-5 text-left w-full sm:w-auto">
          <p className="text-primary-foreground text-lg font-bold uppercase tracking-wide mb-3 text-center">
            Piso Laminado
          </p>
          <ul className="space-y-1.5">
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Instalação Ultra Rápida</li>
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Conforto Térmico Premium</li>
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Ideal para Quartos e Salas</li>
          </ul>
        </div>

        <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl px-8 py-5 text-left w-full sm:w-auto">
          <p className="text-primary-foreground text-lg font-bold uppercase tracking-wide mb-3 text-center">
            Piso Vinílico
          </p>
          <ul className="space-y-1.5">
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Alta Resistência à Água</li>
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Silencioso e Acústico</li>
            <li className="text-primary-foreground/90 text-sm font-medium">✔ Resistente a Pets e Riscos</li>
          </ul>
        </div>
      </div>

      <p className="text-primary-foreground text-base md:text-lg font-bold mb-6 tracking-wide">
        ✔ Instalação Profissional Inclusa em todos os orçamentos
      </p>

      <p className="text-primary-foreground/70 text-sm font-semibold mb-4 uppercase tracking-wide">
        Fale agora com a unidade mais próxima:
      </p>

      <WhatsAppButtons className="justify-center" />
    </div>
</section>;

export default HeroSection;
