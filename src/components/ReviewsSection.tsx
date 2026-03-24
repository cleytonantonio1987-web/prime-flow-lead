import { Star } from "lucide-react";

const reviews = [
 const reviews = [
  {
    text: "Encontrei o que procurava, gostei do preço e fui bem atendido.(até tomei um capuccino durante o atendimento) recomendo 👍👍👍",
    name: "Fernando Cesar Pires — Curitiba (via Google)"
  },
  {
    text: "Cinco estrelas com certeza! Fui muito bem atendido e a equipe me ajudou a escolher o piso ideal para o meu projeto, explicando as diferenças técnicas de cada um. Entrega rápida e pontual e o preço sem duvida o melhor que encontrei!",
    name: "Mauro Azevedo — Curitiba (via Google)"
  },
  {
    text: "Variedade muito grande e preço muito bom!",
    name: "Aline Zaninski — Curitiba (via Google)"
  },
  {
    text: "Excelente atendimento e qualidade!!Recomendo",
    name: "Marjorie Pavanelli — Almirante Tamandaré (via Google)"
  },
  {
    text: "Excelente atendimento! A equipe foi muito atenciosa desde o primeiro contato, tirou todas as dúvidas e ajudou na escolha do melhor piso para minha casa. Produto de ótima qualidade e instalação impecável. Recomendo muito!",
    name: "Pamela Donaide — Almirante Tamandaré (via Google)"
  }
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
