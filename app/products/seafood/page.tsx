import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function SeaFoodPage() {
  const vannameiShrimpSpecs = [
    { label: "Type", value: "Vannamei White Shrimp / Prawns" },
    { label: "Form", value: "Fresh / Frozen, Head-On / Headless" },
    { label: "Size", value: "21/25, 26/30, 31/35, 36/40" },
    { label: "Quality", value: "Export Quality, IQF / Block Frozen" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "1kg, 2kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const blackTigerShrimpSpecs = [
    { label: "Type", value: "Black Tiger Shrimp / Prawns" },
    { label: "Form", value: "Fresh / Frozen, Head-On / Headless" },
    { label: "Size", value: "13/15, 16/20, 21/25, 26/30" },
    { label: "Quality", value: "Premium Export Quality" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "1kg, 2kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal / Throughout the year" },
  ];

  const tunaSpecs = [
    { label: "Type", value: "Yellowfin Tuna" },
    { label: "Form", value: "Whole / Loins / Steaks / Frozen" },
    { label: "Color", value: "Deep Red to Pink" },
    { label: "Taste", value: "Rich, Meaty & Mild" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons / Bulk" },
    { label: "Availability", value: "Seasonal" },
  ];

  const salmonSpecs = [
    { label: "Type", value: "Atlantic / Pacific Salmon" },
    { label: "Form", value: "Whole / Fillets / Portions / Frozen" },
    { label: "Color", value: "Pink to Orange" },
    { label: "Taste", value: "Rich, Mild & Oily" },
    { label: "Origin", value: "Imported / Export Supply" },
    { label: "Packing", value: "5kg, 10kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const indianSalmonSpecs = [
    { label: "Type", value: "Indian Salmon / Rawas" },
    { label: "Form", value: "Whole / Steaks / Fillets / Frozen" },
    { label: "Color", value: "Silver Skin / Pinkish Flesh" },
    { label: "Taste", value: "Mild & Firm" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const barracudaSpecs = [
    { label: "Type", value: "Barracuda Fish" },
    { label: "Form", value: "Whole / Steaks / Frozen" },
    { label: "Color", value: "Silver / Grey" },
    { label: "Taste", value: "Firm & Mild" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const pomfretSpecs = [
    { label: "Type", value: "Silver / White / Black Pomfret" },
    { label: "Form", value: "Whole / Cleaned / Frozen" },
    { label: "Size", value: "100g to 1kg+" },
    { label: "Taste", value: "Delicate & Mild" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const mackerelSpecs = [
    { label: "Type", value: "Indian Mackerel / Bangda" },
    { label: "Form", value: "Whole / Cleaned / Frozen" },
    { label: "Color", value: "Blue-Green / Silver" },
    { label: "Taste", value: "Rich, Oily & Strong" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const sardineSpecs = [
    { label: "Type", value: "Indian Oil Sardine" },
    { label: "Form", value: "Whole / Frozen" },
    { label: "Size", value: "Small to Medium" },
    { label: "Color", value: "Silver / Blue-Grey" },
    { label: "Taste", value: "Rich & Oily" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const rohuSpecs = [
    { label: "Type", value: "Rohu / Rohit Fish" },
    { label: "Form", value: "Whole / Cut / Frozen" },
    { label: "Color", value: "Silver-Grey" },
    { label: "Taste", value: "Mild & Tender" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const catlaSpecs = [
    { label: "Type", value: "Catla / Catla Catla" },
    { label: "Form", value: "Whole / Cut / Frozen" },
    { label: "Size", value: "1kg to 5kg+" },
    { label: "Taste", value: "Mild & Meaty" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const tilapiaSpecs = [
    { label: "Type", value: "Tilapia Fish" },
    { label: "Form", value: "Whole / Fillets / Frozen" },
    { label: "Color", value: "Silver / Grey" },
    { label: "Taste", value: "Mild & Lean" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const pangasiusSpecs = [
    { label: "Type", value: "Pangasius / Basa" },
    { label: "Form", value: "Fillets / Steaks / Frozen" },
    { label: "Color", value: "White Flesh" },
    { label: "Taste", value: "Mild & Tender" },
    { label: "Origin", value: "India / Imported Supply" },
    { label: "Packing", value: "5kg, 10kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const squidSpecs = [
    { label: "Type", value: "Indian Squid / Calamari" },
    { label: "Form", value: "Whole / Cleaned / Rings / Tubes" },
    { label: "Size", value: "Various Export Sizes" },
    { label: "Quality", value: "Export Quality, Frozen" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "1kg, 2kg, 10kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const crabSpecs = [
    { label: "Type", value: "Mud Crab / Blue Crab / Live Crab" },
    { label: "Form", value: "Live / Fresh / Frozen" },
    { label: "Size", value: "Various Export Grades" },
    { label: "Color", value: "Greenish Brown / Blue" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "Live / 5kg, 10kg Frozen Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const lobsterSpecs = [
    { label: "Type", value: "Indian Spiny Lobster" },
    { label: "Form", value: "Live / Whole / Frozen" },
    { label: "Size", value: "Various Export Sizes" },
    { label: "Quality", value: "Premium Export Quality" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "Live / Frozen Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const hilsaSpecs = [
    { label: "Type", value: "Hilsa / Ilish Fish" },
    { label: "Form", value: "Whole / Cleaned / Frozen" },
    { label: "Size", value: "Various Export Sizes" },
    { label: "Color", value: "Silver" },
    { label: "Taste", value: "Rich, Oily & Distinctive" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "5kg, 10kg, 20kg Cartons" },
    { label: "Availability", value: "Seasonal" },
  ];

  const surimiSpecs = [
    { label: "Type", value: "Frozen Surimi / Fish Paste" },
    { label: "Form", value: "Frozen Blocks" },
    { label: "Color", value: "White / Off-White" },
    { label: "Quality", value: "Food-Grade Export Quality" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 20kg Cartons" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">
          Premium Fish & Seafood
        </h1>

        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>

        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          We supply quality Indian fish and seafood sourced from trusted
          fisheries and aquaculture partners. Our range includes frozen shrimp,
          finfish, cephalopods and other seafood products prepared for
          international markets.
        </p>
      </div>

      {/* Products */}
      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard
          title="Vannamei White Shrimp (Prawns)"
          specs={vannameiShrimpSpecs}
          imageSrc="/images/seafood/Vannamei_Shrimp.webp"
        />

        <ProductDetailCard
          title="Black Tiger Shrimp"
          specs={blackTigerShrimpSpecs}
          imageSrc="/images/seafood/Black_Tiger_Shrimp.webp"
        />

        <ProductDetailCard
          title="Yellowfin Tuna"
          specs={tunaSpecs}
          imageSrc="/images/seafood/Yellowfin_Tuna.webp"
        />

        <ProductDetailCard
          title="Salmon"
          specs={salmonSpecs}
          imageSrc="/images/seafood/Salmon.webp"
        />

        <ProductDetailCard
          title="Indian Salmon (Rawas)"
          specs={indianSalmonSpecs}
          imageSrc="/images/seafood/Indian_Salmon.webp"
        />

        <ProductDetailCard
          title="Barracuda"
          specs={barracudaSpecs}
          imageSrc="/images/seafood/Barracuda.webp"
        />

        <ProductDetailCard
          title="Pomfret"
          specs={pomfretSpecs}
          imageSrc="/images/seafood/Pomfret.webp"
        />

        <ProductDetailCard
          title="Indian Mackerel (Bangda)"
          specs={mackerelSpecs}
          imageSrc="/images/seafood/Indian_Mackerel.webp"
        />

        <ProductDetailCard
          title="Indian Sardine"
          specs={sardineSpecs}
          imageSrc="/images/seafood/Indian_Sardine.webp"
        />

        <ProductDetailCard
          title="Rohu"
          specs={rohuSpecs}
          imageSrc="/images/seafood/Rohu.webp"
        />

        <ProductDetailCard
          title="Catla"
          specs={catlaSpecs}
          imageSrc="/images/seafood/Catla.webp"
        />

        <ProductDetailCard
          title="Tilapia"
          specs={tilapiaSpecs}
          imageSrc="/images/seafood/Tilapia.webp"
        />

        <ProductDetailCard
          title="Pangasius (Basa)"
          specs={pangasiusSpecs}
          imageSrc="/images/seafood/Pangasius.webp"
        />

        <ProductDetailCard
          title="Indian Squid"
          specs={squidSpecs}
          imageSrc="/images/seafood/Indian_Squid.webp"
        />

        <ProductDetailCard
          title="Live & Frozen Crab"
          specs={crabSpecs}
          imageSrc="/images/seafood/Crab.webp"
        />

        <ProductDetailCard
          title="Indian Spiny Lobster"
          specs={lobsterSpecs}
          imageSrc="/images/seafood/Lobster.webp"
        />

        <ProductDetailCard
          title="Hilsa (Ilish)"
          specs={hilsaSpecs}
          imageSrc="/images/seafood/Hilsa.webp"
        />
      </div>

      <CtaSection />
    </div>
  );
}
