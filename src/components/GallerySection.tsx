import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";

const images = [
  { src: gallery1, alt: "Sala com piso de madeira instalado" },
  { src: gallery2, alt: "Corredor com porcelanato premium" },
  { src: gallery3, alt: "Varanda com piso cerâmico" },
  { src: gallery4, alt: "Banheiro com revestimento de mármore" },
];

const GallerySection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Galeria de Projetos
        </h2>
        <p className="text-muted-foreground text-lg">Ambientes transformados com nossos pisos e revestimentos</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={img.src} alt={img.alt} className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
