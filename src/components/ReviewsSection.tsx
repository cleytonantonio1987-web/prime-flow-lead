import { Star } from "lucide-react";

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

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clientes que já instalaram com a gente
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#A67C52] text-[#A67C52]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                {review.text}
              </p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Rodapé Ultra-Ajustável */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center px-2">
          <div className="flex flex-col md:flex-row justify-center items-center text-[9px] sm:text-[10px] md:text-sm text-gray-500 tracking-tighter sm:tracking-normal">
            <p className="whitespace-nowrap">© 2026 Prime Pisos e Revestimentos.</p>
            <span className="hidden md:inline mx-1">|</span> 
            <p className="flex items-center gap-1 whitespace-nowrap">
              <span>Desenvolvido por</span>
              <strong className="text-[#25D366] font-extrabold uppercase">
                ASSESSORIA I9 MKT
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
