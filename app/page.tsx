import Carousel from "@/components/Carousel";
import WelcomeSection from "@/components/WelcomeSection";
import ProductSection from "@/components/ProductSection";
import ExportProcessSection from "@/components/ExportProcessSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel />
      <WelcomeSection />
      <ProductSection />
      <ExportProcessSection />
      <CtaSection />
    </div>
  );
}
