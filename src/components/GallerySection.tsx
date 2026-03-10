import gallery2 from "@/assets/gallery2.jpg";

const images = [
  { src: "/lovable-uploads/dd0056e2-7586-485c-8c1f-50bd5d7a83c9.jpg", alt: "Ambiente com piso laminado instalado" },
  { src: gallery2, alt: "Sala com piso vinílico" },
  { src: "/lovable-uploads/0833d8e3-c45b-4fb9-a005-f2b0318f6396.jpg", alt: "Processo de instalação de piso" },
  { src: "/lovable-uploads/58cff1fc-70e0-4628-9eae-200ea88b4989.jpg", alt: "Acabamento final de piso laminado" },
];

const GallerySection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Veja alguns ambientes instalados
        </h2>
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
