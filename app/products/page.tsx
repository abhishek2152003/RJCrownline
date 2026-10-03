import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function ProductsPage() {
  const blackRaisinSpecs = [
    { label: "Type", value: "Dry grapes" },
    { label: "Color", value: "Black" },
    { label: "Size", value: "Long" },
    { label: "Taste", value: "Sweet" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Quality", value: "A Grade Export Quality Black Raisin" },
    { label: "Packing", value: "5kg, 7kg, 10kg, 15kg carton box (As per customer requirement)" },
    { label: "Availability", value: "Whole year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-4">Our Products</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
          Explore our premium range of export-quality agricultural commodities, sourced directly from reliable agro vendors.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <ProductDetailCard 
          title="Black Raisin"
          specs={blackRaisinSpecs}
          imageSrc="https://images.unsplash.com/photo-1599908867568-d05c68f2f211?q=80&w=1973&auto=format&fit=crop"
        />
      </div>
      
      <CtaSection />
    </div>
  );
}
