import { WhatsAppButtons } from "./WhatsAppButtons";

const FinalCTA = () => (
  <section className="section-padding bg-foreground">
    <div className="container-narrow text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Solicite Agora Seu Orçamento
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Solicite agora seu orçamento de pisos pelo WhatsApp e fale com nossa equipe especializada. Atendimento rápido e sem compromisso.
      </p>
      <WhatsAppButtons className="justify-center" />
    </div>
  </section>
);

export default FinalCTA;
