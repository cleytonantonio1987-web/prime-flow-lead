import { Star } from "lucide-react";

const reviews = [
  { text: "Atendimento rápido e instalação impecável. Recomendo.", name: "Cliente Google" },
  { text: "Orçamento fácil pelo WhatsApp e serviço muito bem feito.", name: "Cliente Google" },
  { text: "Equipe profissional e instalação rápida.", name: "Cliente Google" },
  { text: "Piso laminado ficou perfeito. Superou as expectativas.", name: "Cliente Google" },
  { text: "Preço justo e acabamento excelente. Voltarei a comprar.", name: "Cliente Google" },
];

const ReviewsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Clientes que já instalaram com a gente
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 5).map((r, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-muted-foreground text-xs font-semibold">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
