import { Store, MapPin, Layers, MessageCircle, FileText } from "lucide-react";

const items = [
  { icon: Store, text: "Loja especializada em pisos e revestimentos" },
  { icon: MapPin, text: "Atendimento em Curitiba e região metropolitana" },
  { icon: Layers, text: "Grande variedade de pisos modernos" },
  { icon: MessageCircle, text: "Atendimento rápido pelo WhatsApp" },
  { icon: FileText, text: "Orçamento online" },
];

const TrustSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
