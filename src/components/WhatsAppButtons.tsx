import { MessageCircle } from "lucide-react";

const WA_TAMANDARE = "https://wa.me/5541995476963?text=Olá!%20Vim%20pelo%20site%20da%20Prime%20Pisos%20e%20Revestimentos%20e%20gostaria%20de%20um%20orçamento%20de%20pisos";
const WA_BARREIRINHA = "https://wa.me/5541995119523?text=Olá!%20Vim%20pelo%20site%20da%20Prime%20Pisos%20e%20Revestimentos%20e%20gostaria%20de%20um%20orçamento%20de%20pisos";

export const WhatsAppButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
    <a href={WA_TAMANDARE} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
      <MessageCircle className="w-5 h-5" />
      Unidade Almirante Tamandaré
    </a>
    <a href={WA_BARREIRINHA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
      <MessageCircle className="w-5 h-5" />
      Unidade Barreirinha
    </a>
  </div>
);

export const FloatingWhatsApp = () => (
  <a
    href={WA_TAMANDARE}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp shadow-2xl animate-pulse-whatsapp transition-transform hover:scale-110"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-8 h-8 text-whatsapp-foreground" />
  </a>
);

export { WA_TAMANDARE, WA_BARREIRINHA };
