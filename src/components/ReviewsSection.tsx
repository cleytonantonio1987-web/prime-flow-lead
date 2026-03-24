import { Star } from "lucide-react";

import { Star } from "lucide-react";

const reviews = [
  {
    text: "Encontrei o que procurava, gostei do preço e fui bem atendido.(até tomei um capuccino durante o atendimento) recomendo 👍",
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

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Clientes que já instalaram com a gente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#A67C52] text-[#A67C52]" />
                ))}
              </div>
              {/* Comentário sem aspas */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>
              {/* Nome sem o travessão no início */}
              <p className="text-gray-500 text-sm">
                {review.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Rodapé Ajustado com I9 MKT em Verde e fonte pequena no mobile */}
        <div className="mt-20 pt-8 border-t border-gray-100 text-center">
          <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed">
            © 2026 Prime Pisos e Revestimentos. Todos os direitos reservados.
            <br className="md:hidden" /> 
            <span className="md:ml-1">Desenvolvido por </span>
            <span className="text-[#25D366] font-bold">ASSESSORIA I9 MKT</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

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
