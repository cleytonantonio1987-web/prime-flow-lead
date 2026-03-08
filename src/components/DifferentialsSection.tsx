import { Wrench, Zap, Eye, Gem, LayoutGrid } from "lucide-react";

const items = [
  { icon: Wrench, title: "Equipe própria de instalação", desc: "Instalação profissional para pisos vinílicos e laminados" },
  { icon: Zap, title: "Atendimento rápido", desc: "Respostas ágeis pelo WhatsApp com especialistas" },
  { icon: Eye, title: "Visita técnica disponível", desc: "Avaliamos seu espaço para a melhor escolha" },
  { icon: Gem, title: "Produtos de alta qualidade", desc: "Pisos modernos das melhores marcas do mercado" },
  { icon: LayoutGrid, title: "Grande variedade", desc: "Centenas de modelos para todos os estilos" },
];

const DifferentialsSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Diferenciais da Prime Pisos
        </h2>
        <p className="text-muted-foreground text-lg">Por que escolher a Prime para sua obra ou reforma</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
