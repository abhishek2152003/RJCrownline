import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function SpicesPage() {
  const redChilliSpecs = [
    { label: "Type", value: "Whole / Stemless / Powder" },
    { label: "Color", value: "Bright Red / Deep Red" },
    { label: "Flavor", value: "Spicy, Rich & Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags, Bulk Packaging" },
  ];
  const blackPepperSpecs = [
    { label: "Type", value: "Whole Black Peppercorns" },
    { label: "Color", value: "Dark Brown to Black" },
    { label: "Flavor", value: "Strong, Pungent & Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags / Bulk Packaging" },
  ];

  const cloveSpecs = [
    { label: "Type", value: "Whole Cloves" },
    { label: "Color", value: "Dark Brown" },
    { label: "Flavor", value: "Warm, Sweet & Strongly Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 25kg, 50kg Bags / Bulk Packaging" },
  ];
  const turmericSpecs = [
    { label: "Type", value: "Finger / Bulb / Powder" },
    { label: "Curcumin Content", value: "2% to 5%+" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const cuminSpecs = [
    { label: "Grade", value: "Singapore 98% / 99%, Europe 99.5%" },
    { label: "Origin", value: "Gujarat & Rajasthan, India" },
    { label: "Moisture", value: "9% Max" },
    { label: "Packing", value: "25kg, 50kg Paper/PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const cardamomSpecs = [
    { label: "Size", value: "6mm, 7mm, 8mm+" },
    { label: "Color", value: "Deep Green" },
    { label: "Origin", value: "Kerala, India" },
    { label: "Packing", value: "1kg, 5kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const starAniseSpecs = [
    { label: "Type", value: "Whole Star Anise Pods" },
    { label: "Flavor", value: "Distinct Licorice / Anise Flavor" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const fenugreekSpecs = [
    { label: "Type", value: "Whole Seeds" },
    { label: "Color", value: "Yellowish / Golden" },
    { label: "Flavor", value: "Bitter-Sweet" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
  ];
  const mustardSeedsSpecs = [
    { label: "Type", value: "Whole Mustard Seeds" },
    { label: "Color", value: "Yellow / Black / Brown" },
    { label: "Flavor", value: "Sharp, Fiery & Pungent" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
  ];
  const asafoetidaSpecs = [
    { label: "Type", value: "Gum Resin / Powder" },
    { label: "Flavor", value: "Pungent & Savory" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const saffronSpecs = [
    { label: "Type", value: "Whole Threads / Stigmas" },
    { label: "Color", value: "Deep Red / Crimson" },
    { label: "Flavor", value: "Musky, Floral & Delicate" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "1g, 5g, 10g, Bulk Packaging" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Authentic Indian Spices
        </h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Known as the spice bowl of the world, India produces spices with rich
          aromas and intense flavors. Our spices are unadulterated, expertly
          processed, and packaged to retain their essential oils.
        </p>
      </div>
      <ProductDetailCard
        title="Red Chillies"
        specs={redChilliSpecs}
        imageSrc="/images/spices/Red_Chillies.webp"
      />
      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard
          title="Black Pepper"
          specs={blackPepperSpecs}
          imageSrc="/images/spices/Black_Pepper.webp"
        />

        <ProductDetailCard
          title="Cloves"
          specs={cloveSpecs}
          imageSrc="/images/spices/Cloves.webp"
        />
        <ProductDetailCard
          title="Turmeric (Haldi)"
          specs={turmericSpecs}
          imageSrc="/images/spices/Turmeric.webp"
        />
        <ProductDetailCard
          title="Cumin Seeds (Jeera)"
          specs={cuminSpecs}
          imageSrc="/images/spices/Cumin.webp"
        />
        <ProductDetailCard
          title="Green Cardamom (Elaichi)"
          specs={cardamomSpecs}
          imageSrc="/images/spices/Green_Cardamom.webp"
        />
        <ProductDetailCard
          title="Star Anise"
          specs={starAniseSpecs}
          imageSrc="/images/spices/Star_Anise.webp"
        />

        <ProductDetailCard
          title="Fenugreek (Methi)"
          specs={fenugreekSpecs}
          imageSrc="/images/spices/Fenugreek.webp"
        />

        <ProductDetailCard
          title="Mustard Seeds"
          specs={mustardSeedsSpecs}
          imageSrc="/images/spices/mustard_seeds.webp"
        />

        <ProductDetailCard
          title="Asafoetida (Hing)"
          specs={asafoetidaSpecs}
          imageSrc="/images/spices/asafoetida.webp"
        />

        <ProductDetailCard
          title="Saffron (Kesar)"
          specs={saffronSpecs}
          imageSrc="/images/spices/saffron.webp"
        />
      </div>
      <CtaSection />
    </div>
  );
}
