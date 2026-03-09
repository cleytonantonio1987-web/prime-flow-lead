import { WhatsAppButtons } from "./WhatsAppButtons";

const FinalCTA = () => (
  <section className="section-padding bg-foreground">
    <div className="container-narrow text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Solicite seu orçamento agora
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Fale diretamente com nossa equipe pelo WhatsApp e receba um orçamento rápido.
      </p>
      <WhatsAppButtons className="justify-center" />
    </div>
  </section>
);

export default FinalCTA;
