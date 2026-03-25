import React from 'react';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary text-gray-900">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="italic">"Excelente atendimento e instalação impecável."</p>
            <p className="mt-4 font-bold">- João Silva</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="italic">"Piso vinílico de alta qualidade, recomendo muito!"</p>
            <p className="mt-4 font-bold">- Maria Oliveira</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <p className="italic">"Profissionais atenciosos e entrega no prazo."</p>
            <p className="mt-4 font-bold">- Ricardo Santos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
