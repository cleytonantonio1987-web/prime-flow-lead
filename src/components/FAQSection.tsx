import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês fazem instalação dos pisos?",
    a: "Sim! Contamos com equipe própria de instalação para pisos vinílicos e laminados, garantindo um acabamento perfeito e profissional.",
  },
  {
    q: "Vocês atendem Curitiba e região metropolitana?",
    a: "Sim, atendemos toda Curitiba e região metropolitana. Temos duas unidades para melhor atender nossos clientes.",
  },
  {
    q: "Posso solicitar orçamento pelo WhatsApp?",
    a: "Claro! Basta clicar em um dos botões de WhatsApp na página e enviar as medidas ou fotos do seu ambiente. Nosso time responde rapidamente.",
  },
  {
    q: "Vocês ajudam a escolher o melhor tipo de piso?",
    a: "Sim! Nossos especialistas orientam você na escolha do piso ideal para cada ambiente, considerando uso, estilo e orçamento.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Perguntas Frequentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
