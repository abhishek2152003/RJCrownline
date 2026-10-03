import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function VegetablePage() {
  const onionSpecs = [
    { label: "Type", value: "Red / Rose / White Onion" },
    { label: "Size", value: "25mm to 65mm+" },
    { label: "Origin", value: "Maharashtra & Gujarat, India" },
    { label: "Packing", value: "5kg, 10kg, 25kg Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const potatoSpecs = [
    { label: "Type", value: "Fresh Potatoes (Sugar Free)" },
    { label: "Size", value: "45mm+ / 50mm+" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 25kg, 50kg Jute / Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const garlicSpecs = [
    { label: "Type", value: "Fresh White Garlic" },
    { label: "Size", value: "40mm+ / 50mm+ Bulbs" },
    { label: "Color", value: "White / Off-White" },
    { label: "Origin", value: "Madhya Pradesh & Gujarat, India" },
    { label: "Packing", value: "5kg, 10kg, 25kg Mesh Bags" },
    { label: "Availability", value: "Seasonal" },
  ];

  const gingerSpecs = [
    { label: "Type", value: "Fresh Ginger" },
    { label: "Size", value: "Medium / Large Rhizomes" },
    { label: "Color", value: "Light Brown / Cream" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 25kg Cartons / Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const greenChilliSpecs = [
    { label: "Type", value: "Fresh Green Chillies" },
    { label: "Size", value: "Medium / Long" },
    { label: "Color", value: "Bright Green" },
    { label: "Taste", value: "Fresh & Spicy" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const tomatoSpecs = [
    { label: "Type", value: "Fresh Red Tomatoes" },
    { label: "Size", value: "Medium / Large" },
    { label: "Color", value: "Bright Red" },
    { label: "Quality", value: "Firm & Fresh" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Cartons / Crates" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const okraSpecs = [
    { label: "Type", value: "Fresh Okra / Lady Finger" },
    { label: "Size", value: "Tender / Medium" },
    { label: "Color", value: "Fresh Green" },
    { label: "Quality", value: "Tender & Fresh" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];
  const cabbageSpecs = [
    { label: "Type", value: "Fresh Green Cabbage" },
    { label: "Size", value: "Medium / Large Heads" },
    { label: "Color", value: "Fresh Green" },
    { label: "Quality", value: "Firm & Compact" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons / Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const greenPeasSpecs = [
    { label: "Type", value: "Fresh Green Peas" },
    { label: "Size", value: "Medium / Large Pods" },
    { label: "Color", value: "Bright Green" },
    { label: "Quality", value: "Fresh & Tender" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Farm Fresh Vegetables
        </h1>

        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>

        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Procured from trusted farms across India, our fresh vegetables are
          carefully sorted, graded, and packed to preserve freshness, quality,
          and shelf life for international markets.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Onion */}
        <ProductDetailCard
          title="Fresh Red Onions"
          specs={onionSpecs}
          imageSrc="/images/vegetables/Onion.webp"
        />

        {/* Potato */}
        <ProductDetailCard
          title="Fresh Potatoes"
          specs={potatoSpecs}
          imageSrc="/images/vegetables/potato.webp"
        />

        {/* Garlic */}
        <ProductDetailCard
          title="Fresh Garlic"
          specs={garlicSpecs}
          imageSrc="/images/vegetables/Garlic.webp"
        />

        {/* Ginger */}
        <ProductDetailCard
          title="Fresh Ginger"
          specs={gingerSpecs}
          imageSrc="/images/vegetables/Ginger.webp"
        />

        {/* Green Chilli */}
        <ProductDetailCard
          title="Fresh Green Chillies"
          specs={greenChilliSpecs}
          imageSrc="/images/vegetables/Green_Chilli.webp"
        />

        {/* Tomato */}
        <ProductDetailCard
          title="Fresh Tomatoes"
          specs={tomatoSpecs}
          imageSrc="/images/vegetables/Tomato.webp"
        />

        {/* Okra */}
        <ProductDetailCard
          title="Fresh Okra (Lady Finger)"
          specs={okraSpecs}
          imageSrc="/images/vegetables/Okra.webp"
        />

        {/* Cabbage */}
        <ProductDetailCard
          title="Fresh Green Cabbage"
          specs={cabbageSpecs}
          imageSrc="/images/vegetables/Cabbage.webp"
        />

        {/* Green Peas */}
        <ProductDetailCard
          title="Fresh Green Peas"
          specs={greenPeasSpecs}
          imageSrc="/images/vegetables/Green_Peas.webp"
        />
      </div>

      <CtaSection />
    </div>
  );
}
