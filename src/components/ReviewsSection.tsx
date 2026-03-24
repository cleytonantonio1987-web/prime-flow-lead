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
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {review.text}
              </p>
              <p className="text-gray-500 text-sm italic">
                {review.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100 text-center">
          <p className="text-[7px] md:text-sm text-gray-500">
            © 2026 Prime Pisos e Revestimentos. Todos os direitos reservados.
            <br className="md:hidden" /> 
            <span className="md:ml-1">Desenvolvido por </span>
            <strong className="text-[#25D366]">ASSESSORIA I9 MKT</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
