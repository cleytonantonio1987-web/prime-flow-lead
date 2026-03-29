import { useState, useRef, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const WA_TAMANDARE = "https://wa.me/5541995476963?text=Olá%20vim%20pelo%20site%20da%20Prime%20Pisos%20e%20gostaria%20de%20realizar%20um%20orçamento";
const WA_BARREIRINHA = "https://wa.me/5541995119523?text=Olá%20vim%20pelo%20site%20da%20Prime%20Pisos%20e%20gostaria%20de%20realizar%20um%20orçamento";

// 🔥 FUNÇÃO DE TRACKING (CORRIGIDA)
const abrirWhatsApp = (tipo: "tamandare" | "barreirinha") => {
  const config = {
    tamandare: {
      url: WA_TAMANDARE,
      event: "whatsapp_tamandare"
    },
    barreirinha: {
      url: WA_BARREIRINHA,
      event: "whatsapp_barreirinha"
    }
  };

  const data = config[tipo];

  // 🔥 ENVIA EVENTO PRO GTM
  window.dataLayer?.push({
    event: data.event
  });

  console.log("EVENTO ENVIADO:", data.event);

  // 🔥 ESPERA PRA GARANTIR QUE O EVENTO DISPAROU
  setTimeout(() => {
    window.open(data.url, "_blank");
  }, 300);
};

export const WhatsAppButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
    
    <button 
      onClick={() => abrirWhatsApp("tamandare")}
      className="btn-whatsapp"
    >
      <WhatsAppIcon />
      Falar com unidade Almirante Tamandaré
    </button>

    <button 
      onClick={() => abrirWhatsApp("barreirinha")}
      className="btn-whatsapp"
    >
      <WhatsAppIcon />
      Falar com unidade Barreirinha
    </button>

  </div>
);

export const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-200 mb-2">
          
          <button
            onClick={() => abrirWhatsApp("tamandare")}
            className="flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: "hsl(142 70% 40%)", color: "#fff" }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Almirante Tamandaré
          </button>

          <button
            onClick={() => abrirWhatsApp("barreirinha")}
            className="flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-bold shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: "hsl(142 70% 40%)", color: "#fff" }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Barreirinha
          </button>

        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl animate-pulse-whatsapp transition-transform hover:scale-110"
        style={{ backgroundColor: "hsl(142 70% 40%)" }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export { WA_TAMANDARE, WA_BARREIRINHA };
