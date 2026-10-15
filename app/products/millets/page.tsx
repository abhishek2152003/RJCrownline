"use client";

import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";
import { useLanguage } from "@/context/LanguageContext";

export default function MilletsPage() {
  const { t } = useLanguage();
  const basmatiRiceSpecs = [
    { label: "Type", value: "Premium Basmati Rice" },
    { label: "Color", value: "Pearl White" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Grain", value: "Extra Long Grain" },
    { label: "Aroma", value: "Natural Aromatic Fragrance" },
    { label: "Moisture", value: "14% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 25kg, 50kg Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const riceSpecs = [
    { label: "Type", value: "Non-Basmati Rice" },
    { label: "Color", value: "White / Creamy White" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Grain", value: "Long / Medium Grain" },
    { label: "Moisture", value: "14% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const pearlMilletSpecs = [
    { label: "Type", value: "Pearl Millet (Bajra)" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const sorghumMilletSpecs = [
    { label: "Type", value: "Sorghum (Jowar)" },
    { label: "Color", value: "White / Cream / Red" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const fingerMilletSpecs = [
    { label: "Type", value: "Finger Millet (Ragi / Nachni)" },
    { label: "Color", value: "Reddish Brown" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const foxtailMilletSpecs = [
    { label: "Type", value: "Foxtail Millet (Kangni / Kakum)" },
    { label: "Color", value: "Golden Yellow" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const barnyardMilletSpecs = [
    { label: "Type", value: "Barnyard Millet (Sanwa / Jhangora)" },
    { label: "Color", value: "Cream / Off-White" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const kodoMilletSpecs = [
    { label: "Type", value: "Kodo Millet (Kodon)" },
    { label: "Color", value: "Brown / Grey" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const littleMilletSpecs = [
    { label: "Type", value: "Little Millet (Kutki / Sama)" },
    { label: "Color", value: "Cream / Light Brown" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const prosoMilletSpecs = [
    { label: "Type", value: "Proso Millet (Chena / Barri)" },
    { label: "Color", value: "Cream / Pale Yellow" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const browntopMilletSpecs = [
    { label: "Type", value: "Browntop Millet (Makra)" },
    { label: "Color", value: "Light Brown / Tan" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];
  const makhanaSpecs = [
    { label: "Type", value: "Makhana (Fox Nuts / Lotus Seeds)" },
    { label: "Color", value: "White / Cream" },
    { label: "Quality", value: "Premium / Machine Cleaned" },
    { label: "Size", value: "5 Suta, 6 Suta, 7 Suta+" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          {t("productsPage.millets.title", "Nutritious Millets & Grains")}
        </h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          {t(
            "productsPage.millets.subtitle",
            "Embrace the superfoods of the future. Our export-quality millets and grains are nutrient-dense, sustainably grown, and processed to meet global healthy living standards."
          )}
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard
          title="Basmati Rice"
          specs={basmatiRiceSpecs}
          imageSrc="/images/millets/basmati_rice.webp"
        />
        <ProductDetailCard
          title="Rice"
          specs={riceSpecs}
          imageSrc="/images/millets/rice.webp"
        />
        <ProductDetailCard
          title="Pearl Millet (Bajra)"
          specs={pearlMilletSpecs}
          imageSrc="/images/millets/pearl_millet.jpg"
        />
        <ProductDetailCard
          title="Finger Millet (Ragi)"
          specs={fingerMilletSpecs}
          imageSrc="/images/millets/finger_millet.png"
        />
        {/* Sorghum */}
        <ProductDetailCard
          title="Sorghum (Jowar)"
          specs={sorghumMilletSpecs}
          imageSrc="/images/millets/sorghum.png"
        />

        {/* Foxtail Millet */}
        <ProductDetailCard
          title="Foxtail Millet (Kangni/Kakum)"
          specs={foxtailMilletSpecs}
          imageSrc="/images/millets/foxtail.png"
        />

        {/* Barnyard Millet */}
        <ProductDetailCard
          title="Barnyard Millet (Sanwa/Jhangora)"
          specs={barnyardMilletSpecs}
          imageSrc="/images/millets/BarnyardMillet.png"
        />

        {/* Kodo Millet */}
        <ProductDetailCard
          title="Kodo Millet (Kodon)"
          specs={kodoMilletSpecs}
          imageSrc="/images/millets/KodoMillet.jpg"
        />

        {/* Little Millet */}
        <ProductDetailCard
          title="Little Millet (Kutki/Sama)"
          specs={littleMilletSpecs}
          imageSrc="/images/millets/LittleMillet.jpg"
        />

        {/* Proso Millet */}
        <ProductDetailCard
          title="Proso Millet (Chena/Barri)"
          specs={prosoMilletSpecs}
          imageSrc="/images/millets/ProsoMillet.jpg"
        />
        <ProductDetailCard
          title="Makhana (Fox Nuts)"
          specs={makhanaSpecs}
          imageSrc="/images/millets/makhana.webp"
        />
      </div>
      <CtaSection />
    </div>
  );
}
