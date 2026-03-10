import laminado from "@/assets/laminado.jpg";
import vinilico from "@/assets/vinilico.jpg";
import porcelanato from "@/assets/porcelanato.jpg";
import revestimento from "@/assets/revestimento.jpg";

const products = [
  { name: "Piso Laminado", img: laminado, desc: "Ideal para salas e quartos, instalação rápida e acabamento sofisticado.", featured: true },
  { name: "Piso Vinílico", img: vinilico, desc: "Conforto térmico e acústico, excelente para ambientes residenciais.", featured: true },
  { name: "Porcelanato", img: porcelanato, desc: "Durabilidade e elegância para áreas internas e externas.", featured: false },
  { name: "Revestimentos", img: revestimento, desc: "Acabamento sofisticado para paredes de cozinhas e banheiros.", featured: false },
];

const ProductsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Tipos de Pisos Disponíveis
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Encontre o piso ideal para cada ambiente
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <div key={p.name} className={`group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 ${p.featured ? 'ring-2 ring-primary' : ''}`}>
            <div className="overflow-hidden aspect-[4/3]">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground font-serif mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
