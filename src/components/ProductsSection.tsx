import porcelanato from "@/assets/porcelanato.jpg";
import ceramico from "@/assets/ceramico.jpg";
import revestimento from "@/assets/revestimento.jpg";
import vinilico from "@/assets/vinilico.jpg";
import laminado from "@/assets/laminado.jpg";

const products = [
  { name: "Porcelanatos", img: porcelanato, desc: "Elegância e durabilidade para todos os ambientes" },
  { name: "Pisos Cerâmicos", img: ceramico, desc: "Versatilidade e resistência para cozinhas e áreas molhadas" },
  { name: "Revestimentos de Parede", img: revestimento, desc: "Transforme suas paredes com estilo e personalidade" },
  { name: "Piso Vinílico", img: vinilico, desc: "Conforto térmico e acústico com visual sofisticado" },
  { name: "Piso Laminado", img: laminado, desc: "Praticidade e beleza com instalação rápida" },
];

const ProductsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Tipos de Pisos Disponíveis
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Encontre o piso ideal para cada ambiente da sua casa ou empresa
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="group relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 font-serif">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
