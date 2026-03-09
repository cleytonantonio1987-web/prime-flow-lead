import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual o valor do piso laminado?",
    a: "O valor varia conforme o modelo e a metragem. Entre em contato pelo WhatsApp para receber um orçamento personalizado.",
  },
  {
    q: "Qual o valor do piso vinílico?",
    a: "Trabalhamos com diversas linhas de piso vinílico. Envie as medidas do seu ambiente pelo WhatsApp e receba um orçamento rápido.",
  },
  {
    q: "Vocês fazem a instalação?",
    a: "Sim! Contamos com equipe própria de instalação para pisos laminados e vinílicos, garantindo acabamento profissional.",
  },
  {
    q: "Qual o pedido mínimo?",
    a: "O pedido mínimo é de 20m². Entre em contato para mais detalhes.",
  },
  {
    q: "Atendem Curitiba e região?",
    a: "Sim, atendemos toda Curitiba e região metropolitana. Temos duas unidades: Barreirinha e Almirante Tamandaré.",
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
