import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function DryFruitsPage() {
  const cashewsSpecs = [
    { label: "Grade", value: "W240, W320, W450 (Export Quality)" },
    { label: "Color", value: "White / Pale Ivory" },
    { label: "Taste", value: "Rich, Buttery, and Sweet" },
    { label: "Origin", value: "India" },
    { label: "Moisture", value: "5% Max" },
    { label: "Packing", value: "10kg, 25kg Vacuum or Tin Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const almondsSpecs = [
    { label: "Type", value: "California / Gurbandi / Mamra" },
    { label: "Color", value: "Brown" },
    { label: "Taste", value: "Naturally Sweet & Crunchy" },
    { label: "Origin", value: "India & USA" },
    { label: "Moisture", value: "6% Max" },
    { label: "Packing", value: "10kg, 20kg Carton boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const blackRaisinSpecs = [
    { label: "Type", value: "Seedless Black Raisins" },
    { label: "Color", value: "Dark Black" },
    { label: "Size", value: "Long / Round" },
    { label: "Taste", value: "Naturally Sweet" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Packing", value: "5kg, 10kg, 15kg carton box" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const pistachiosSpecs = [
    { label: "Type", value: "In-Shell / Shelled Pistachios" },
    { label: "Grade", value: "Premium Export Quality" },
    { label: "Color", value: "Natural Green & Beige" },
    { label: "Taste", value: "Rich, Nutty & Slightly Sweet" },
    { label: "Origin", value: "India, Iran & USA" },
    { label: "Moisture", value: "6% Max" },
    { label: "Packing", value: "10kg, 25kg Vacuum or Carton Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const walnutsSpecs = [
    { label: "Type", value: "Walnut Kernels / In-Shell" },
    { label: "Grade", value: "Premium Export Quality" },
    { label: "Color", value: "Light Amber / Golden" },
    { label: "Taste", value: "Rich, Mild & Nutty" },
    { label: "Origin", value: "India, USA & Chile" },
    { label: "Moisture", value: "8% Max" },
    { label: "Packing", value: "10kg, 25kg Carton Packs" },
    { label: "Availability", value: "Seasonal" },
  ];

  const driedFigsSpecs = [
    { label: "Type", value: "Dried Figs (Anjeer)" },
    { label: "Color", value: "Light Brown / Golden" },
    { label: "Size", value: "Small / Medium / Large" },
    { label: "Taste", value: "Naturally Sweet & Fruity" },
    { label: "Origin", value: "India & Turkey" },
    { label: "Moisture", value: "20% Max" },
    { label: "Packing", value: "5kg, 10kg Carton Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const datesSpecs = [
    { label: "Type", value: "Medjool / Deglet Noor / Dry Dates" },
    { label: "Color", value: "Golden Brown / Dark Brown" },
    { label: "Taste", value: "Naturally Sweet & Caramel-Like" },
    { label: "Origin", value: "India & Middle East" },
    { label: "Moisture", value: "Variable by Variety" },
    { label: "Packing", value: "5kg, 10kg, 25kg Carton Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const goldenRaisinSpecs = [
    { label: "Type", value: "Golden Seedless Raisins" },
    { label: "Color", value: "Golden Yellow" },
    { label: "Size", value: "Small / Medium / Large" },
    { label: "Taste", value: "Sweet & Fruity" },
    { label: "Origin", value: "India" },
    { label: "Moisture", value: "16% Max" },
    { label: "Packing", value: "5kg, 10kg, 15kg Carton Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Premium Dry Fruits
        </h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Discover our exclusive range of export-quality dry fruits, sourced
          directly from the finest farms. Hand-picked, perfectly processed, and
          hygienically packed to retain their natural crunch, flavor, and
          immense nutritional value.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Cashews */}
        <ProductDetailCard
          title="Premium Cashew Nuts (Kaju)"
          specs={cashewsSpecs}
          imageSrc="/images/dryfruits/Cashews.webp"
        />

        {/* Almonds */}
        <ProductDetailCard
          title="Raw Almonds (Badam)"
          specs={almondsSpecs}
          imageSrc="/images/dryfruits/Almonds.webp"
        />

        {/* Black Raisins */}
        <ProductDetailCard
          title="Seedless Black Raisins"
          specs={blackRaisinSpecs}
          imageSrc="/images/dryfruits/black_raisins.webp"
        />
        {/* Pistachios */}
        <ProductDetailCard
          title="Premium Pistachios (Pista)"
          specs={pistachiosSpecs}
          imageSrc="/images/dryfruits/Pistachios.webp"
        />

        {/* Walnuts */}
        <ProductDetailCard
          title="Premium Walnuts (Akhrot)"
          specs={walnutsSpecs}
          imageSrc="/images/dryfruits/walnuts.webp"
        />

        {/* Dried Figs */}
        <ProductDetailCard
          title="Dried Figs (Anjeer)"
          specs={driedFigsSpecs}
          imageSrc="/images/dryfruits/dried_figs.webp"
        />

        {/* Dates */}
        <ProductDetailCard
          title="Premium Dates (Khajoor)"
          specs={datesSpecs}
          imageSrc="/images/dryfruits/Dates.webp"
        />

        {/* Golden Raisins */}
        <ProductDetailCard
          title="Golden Raisins"
          specs={goldenRaisinSpecs}
          imageSrc="/images/dryfruits/golden_raisins.webp"
        />
      </div>

      <CtaSection />
    </div>
  );
}
