import { Wrench, Users, Gem, MapPin } from "lucide-react";

const items = [
  { icon: Wrench, text: "Instalação profissional" },
  { icon: Users, text: "Equipe especializada" },
  { icon: Gem, text: "Materiais de qualidade" },
  { icon: MapPin, text: "Atendimento em Curitiba e região" },
];

const TrustSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
        Por que escolher a Prime Pisos e Revestimentos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.text} className="flex flex-col items-center text-center gap-3 p-4">
            <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
