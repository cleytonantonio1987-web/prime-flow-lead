import { MessageCircle, Camera, FileText } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_TAMANDARE } from "./WhatsAppButtons";

const steps = [
  { icon: MessageCircle, num: "1", title: "Clique em um dos botões do WhatsApp" },
  { icon: Camera, num: "2", title: "Envie fotos ou medidas do ambiente" },
  { icon: FileText, num: "3", title: "Receba seu orçamento rapidamente" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Como solicitar seu orçamento
        </h2>
        <p className="text-muted-foreground text-lg">Simples, rápido e sem complicação</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mb-4 shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">{step.num}</span>
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-snug">{step.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href={WA_TAMANDARE} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
          <WhatsAppIcon />
          Falar com especialista no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
