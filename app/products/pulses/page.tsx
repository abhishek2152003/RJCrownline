import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function PulsesPage() {
  const chickpeasSpecs = [
    { label: "Type", value: "Kabuli Chickpeas" },
    { label: "Size", value: "42-44, 44-46, 58-60 Count / Oz" },
    { label: "Moisture", value: "10-12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const redLentilsSpecs = [
    { label: "Type", value: "Red Lentils (Masoor Dal)" },
    { label: "Quality", value: "Sortex Cleaned, Split & Skinned" },
    { label: "Moisture", value: "14% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const toorDalSpecs = [
    { label: "Type", value: "Toor Dal / Pigeon Peas" },
    { label: "Quality", value: "Sortex Cleaned, Polished / Unpolished" },
    { label: "Color", value: "Yellow / Golden Yellow" },
    { label: "Moisture", value: "12-14% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const moongDalSpecs = [
    { label: "Type", value: "Green Moong Dal / Split Moong" },
    { label: "Quality", value: "Sortex Cleaned, Polished / Unpolished" },
    { label: "Color", value: "Green / Yellow" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const uradDalSpecs = [
    { label: "Type", value: "Urad Dal / Black Gram" },
    { label: "Quality", value: "Sortex Cleaned, Split & Whole" },
    { label: "Color", value: "Black / Cream White" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const chanaDalSpecs = [
    { label: "Type", value: "Split Bengal Gram (Chana Dal)" },
    { label: "Quality", value: "Sortex Cleaned & Polished / Unpolished" },
    { label: "Color", value: "Yellow / Golden Yellow" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const greenPeasSpecs = [
    { label: "Type", value: "Dried Green Peas" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Color", value: "Natural Green" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const blackEyedPeasSpecs = [
    { label: "Type", value: "Black-Eyed Peas / Cowpeas" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Color", value: "Cream with Black Eye" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Premium Pulses & Dals
        </h1>

        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>

        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          As a staple protein source, our pulses are carefully sourced,
          processed, and sortex-cleaned to meet international quality
          requirements. We supply premium lentils, chickpeas, dals, and peas for
          global markets.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Chickpeas */}
        <ProductDetailCard
          title="Kabuli Chickpeas (Chana)"
          specs={chickpeasSpecs}
          imageSrc="/images/pulses/chickpeas.webp"
        />

        {/* Red Lentils */}
        <ProductDetailCard
          title="Red Lentils (Masoor Dal)"
          specs={redLentilsSpecs}
          imageSrc="/images/pulses/Red_Lentils.webp"
        />

        {/* Toor Dal */}
        <ProductDetailCard
          title="Toor Dal (Arhar / Pigeon Peas)"
          specs={toorDalSpecs}
          imageSrc="/images/pulses/toor_dal.webp"
        />

        {/* Moong Dal */}
        <ProductDetailCard
          title="Moong Dal (Green Gram)"
          specs={moongDalSpecs}
          imageSrc="/images/pulses/moong_dal.webp"
        />

        {/* Urad Dal */}
        <ProductDetailCard
          title="Urad Dal (Black Gram)"
          specs={uradDalSpecs}
          imageSrc="/images/pulses/urad_dal.webp"
        />

        {/* Chana Dal */}
        <ProductDetailCard
          title="Chana Dal (Bengal Gram)"
          specs={chanaDalSpecs}
          imageSrc="/images/pulses/chana_dal.webp"
        />

        {/* Green Peas */}
        <ProductDetailCard
          title="Dried Green Peas"
          specs={greenPeasSpecs}
          imageSrc="/images/pulses/Green_Peas.webp"
        />

        {/* Black-Eyed Peas */}
        <ProductDetailCard
          title="Black-Eyed Peas (Lobia)"
          specs={blackEyedPeasSpecs}
          imageSrc="/images/pulses/Black_eyed_Peas.webp"
        />
      </div>

      <CtaSection />
    </div>
  );
}
