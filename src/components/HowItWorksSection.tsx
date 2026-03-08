import { MessageCircle, Users, ClipboardList, Eye, ShoppingBag } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "1", title: "Clique no botão de WhatsApp" },
  { icon: Users, num: "2", title: "Fale com um especialista" },
  { icon: ClipboardList, num: "3", title: "Receba orientação para escolher o melhor piso" },
  { icon: Eye, num: "4", title: "Agende uma visita técnica se necessário" },
  { icon: ShoppingBag, num: "5", title: "Compra e instalação" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Como Funciona o Atendimento
        </h2>
        <p className="text-muted-foreground text-lg">Simples, rápido e sem complicação</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        {steps.map((step, i) => (
          <div key={step.num} className="flex flex-col items-center text-center flex-1 relative">
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mb-4 shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">{step.num}</span>
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug max-w-[160px]">{step.title}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
