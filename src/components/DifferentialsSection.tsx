import { Wrench, Gem, Users, Zap } from "lucide-react";

const items = [
  { icon: Wrench, title: "Instalação especializada", desc: "Equipe própria para pisos laminados e vinílicos" },
  { icon: Gem, title: "Acabamento profissional", desc: "Resultado impecável em cada projeto" },
  { icon: Users, title: "Equipe experiente", desc: "Profissionais qualificados e treinados" },
  { icon: Zap, title: "Atendimento rápido", desc: "Resposta ágil pelo WhatsApp" },
];

const DifferentialsSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Diferenciais da Prime Pisos
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.title} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
