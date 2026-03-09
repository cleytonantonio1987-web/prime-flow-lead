import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import UnitsSection from "@/components/UnitsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/WhatsAppButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <GallerySection />
      <ReviewsSection />
      <UnitsSection />
      <FAQSection />
      <FinalCTA />
      <footer className="py-8 text-center bg-background">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prime Pisos e Revestimentos. Todos os direitos reservados.
        </p>
      </footer>
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
