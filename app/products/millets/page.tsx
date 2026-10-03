import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function MilletsPage() {
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


  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Nutritious Millets</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Embrace the superfoods of the future. Our export-quality millets are gluten-free, highly nutritious, and sustainably grown to meet the rising global demand for healthy alternatives.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
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
          imageSrc="/images/millets/sorghum_jowar.png"
        />

        {/* Foxtail Millet */}
        <ProductDetailCard
          title="Foxtail Millet (Kangni/Kakum)"
          specs={foxtailMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Barnyard Millet */}
        <ProductDetailCard
          title="Barnyard Millet (Sanwa/Jhangora)"
          specs={barnyardMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Kodo Millet */}
        <ProductDetailCard
          title="Kodo Millet (Kodon)"
          specs={kodoMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Little Millet */}
        <ProductDetailCard
          title="Little Millet (Kutki/Sama)"
          specs={littleMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Proso Millet */}
        <ProductDetailCard
          title="Proso Millet (Chena/Barri)"
          specs={prosoMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Browntop Millet */}
        <ProductDetailCard
          title="Browntop Millet (Makra)"
          specs={browntopMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
