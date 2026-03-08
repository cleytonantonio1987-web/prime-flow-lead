import { MapPin, MessageCircle } from "lucide-react";
import { WA_TAMANDARE, WA_BARREIRINHA } from "./WhatsAppButtons";

const units = [
  {
    name: "Unidade Almirante Tamandaré",
    address: "Antonio Johnson, 3678",
    neighborhood: "Colônia São Venâncio",
    city: "Almirante Tamandaré - PR",
    wa: WA_TAMANDARE,
  },
  {
    name: "Unidade Barreirinha",
    address: "Av. Anita Garibaldi, 4875",
    neighborhood: "Barreirinha",
    city: "Curitiba - PR",
    wa: WA_BARREIRINHA,
  },
];

const UnitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Escolha a Unidade Mais Próxima
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {units.map((u) => (
          <div key={u.name} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-serif mb-1">{u.name}</h3>
                <p className="text-muted-foreground text-sm">{u.address}</p>
                <p className="text-muted-foreground text-sm">{u.neighborhood}</p>
                <p className="text-muted-foreground text-sm font-semibold">{u.city}</p>
              </div>
            </div>
            <a href={u.wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-center">
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UnitsSection;
