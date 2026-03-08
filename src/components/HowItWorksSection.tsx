import { Search, Users, ClipboardList, Wrench } from "lucide-react";

const steps = [
  { icon: Search, num: "1", title: "Escolha o piso ideal" },
  { icon: Users, num: "2", title: "Fale com um especialista" },
  { icon: ClipboardList, num: "3", title: "Receba seu orçamento" },
  { icon: Wrench, num: "4", title: "Agende a instalação" },
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mb-4 shadow-lg">
              <span className="text-xl font-bold text-primary-foreground">{step.num}</span>
            </div>
            <p className="text-sm md:text-base font-semibold text-foreground leading-snug">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
