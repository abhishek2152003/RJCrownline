import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function FruitsPage() {
  const mangoSpecs = [
    { label: "Variety", value: "Alphonso / Kesar / Banganapalli" },
    { label: "Color", value: "Golden Yellow" },
    { label: "Taste", value: "Sweet and Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "3kg, 5kg Corrugated Boxes" },
    { label: "Availability", value: "March to July" },
  ];

  const pomegranateSpecs = [
    { label: "Variety", value: "Bhagwa" },
    { label: "Color", value: "Deep Red" },
    { label: "Taste", value: "Sweet with Soft Seeds" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Packing", value: "3.5kg, 4kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const grapesSpecs = [
    { label: "Variety", value: "Thompson Seedless / Sonaka / Crimson" },
    { label: "Color", value: "Green / Red" },
    { label: "Taste", value: "Sweet and Juicy" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Packing", value: "4.5kg, 9kg Carton Boxes" },
    { label: "Availability", value: "January to May" },
  ];

  const bananaSpecs = [
    { label: "Variety", value: "Cavendish / Robusta" },
    { label: "Color", value: "Green to Yellow" },
    { label: "Taste", value: "Sweet and Creamy" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "13kg, 18kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const guavaSpecs = [
    { label: "Variety", value: "Thai / White / Pink Guava" },
    { label: "Color", value: "Green / Yellow" },
    { label: "Taste", value: "Sweet and Refreshing" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "3kg, 5kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const papayaSpecs = [
    { label: "Variety", value: "Red Lady / Solo" },
    { label: "Color", value: "Orange / Reddish Orange" },
    { label: "Taste", value: "Sweet and Juicy" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const orangeSpecs = [
    { label: "Variety", value: "Nagpur Orange / Kinnow" },
    { label: "Color", value: "Bright Orange" },
    { label: "Taste", value: "Sweet and Tangy" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 15kg Carton Boxes" },
    { label: "Availability", value: "October to March" },
  ];

  const watermelonSpecs = [
    { label: "Type", value: "Seeded / Seedless Watermelon" },
    { label: "Color", value: "Green Skin / Red Flesh" },
    { label: "Taste", value: "Sweet, Juicy and Refreshing" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "Individual / Carton Packing" },
    { label: "Availability", value: "March to June" },
  ];

  const muskmelonSpecs = [
    { label: "Type", value: "Fresh Muskmelon / Cantaloupe" },
    { label: "Color", value: "Yellow / Orange Flesh" },
    { label: "Taste", value: "Sweet and Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg Carton Boxes" },
    { label: "Availability", value: "March to June" },
  ];

  const coconutSpecs = [
    { label: "Type", value: "Fresh Mature Coconut" },
    { label: "Color", value: "Brown / Green" },
    { label: "Quality", value: "Fresh, Mature & Clean" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg Bags / Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Fresh Export Fruits
        </h1>

        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>

        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Experience the natural sweetness and premium quality of our
          hand-picked, farm-fresh fruits. Carefully sourced, graded, and packed
          to preserve freshness and quality during global transit.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Mango */}
        <ProductDetailCard
          title="Fresh Mangoes"
          specs={mangoSpecs}
          imageSrc="/images/fruits/mango.webp"
        />

        {/* Pomegranate */}
        <ProductDetailCard
          title="Fresh Pomegranate (Bhagwa)"
          specs={pomegranateSpecs}
          imageSrc="/images/fruits/Pomegranate.webp"
        />

        {/* Grapes */}
        <ProductDetailCard
          title="Fresh Grapes"
          specs={grapesSpecs}
          imageSrc="/images/fruits/Grapes.webp"
        />

        {/* Banana */}
        <ProductDetailCard
          title="Fresh Bananas"
          specs={bananaSpecs}
          imageSrc="/images/fruits/Banana.webp"
        />

        {/* Guava */}
        <ProductDetailCard
          title="Fresh Guava"
          specs={guavaSpecs}
          imageSrc="/images/fruits/Guava.webp"
        />

        {/* Papaya */}
        <ProductDetailCard
          title="Fresh Papaya"
          specs={papayaSpecs}
          imageSrc="/images/fruits/Papaya.webp"
        />

        {/* Orange */}
        <ProductDetailCard
          title="Fresh Oranges"
          specs={orangeSpecs}
          imageSrc="/images/fruits/Orange.webp"
        />

        {/* Watermelon */}
        <ProductDetailCard
          title="Fresh Watermelon"
          specs={watermelonSpecs}
          imageSrc="/images/fruits/Watermelon.webp"
        />

        {/* Muskmelon */}
        <ProductDetailCard
          title="Fresh Muskmelon"
          specs={muskmelonSpecs}
          imageSrc="/images/fruits/Muskmelon.webp"
        />

        {/* Coconut */}
        <ProductDetailCard
          title="Fresh Coconut"
          specs={coconutSpecs}
          imageSrc="/images/fruits/Coconut.webp"
        />
      </div>

      <CtaSection />
    </div>
  );
}
