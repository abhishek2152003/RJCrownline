import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function CertificationsPage() {
  const certifications = [
    {
      name: "FSSAI",
      description:
        "Food Safety and Standards Authority of India. Ensures our food products and operations comply with India's food safety and quality requirements.",
      icon: "/images/certificate/fssai.png",
      color: "bg-orange-100",
    },
    {
      name: "Spices Board of India",
      description:
        "Registered with the Spices Board of India for the export and promotion of quality Indian spices in international markets.",
      icon: "/images/certificate/spicesboardofindia.png",
      color: "bg-yellow-100",
    },
    {
      name: "APEDA",
      description:
        "Agricultural and Processed Food Products Export Development Authority. Supports compliance and export standards for agricultural and processed food products.",
      icon: "/images/certificate/apeda.png",
      color: "bg-green-100",
    },
    {
      name: "MPEDA",
      description:
        "Marine Products Export Development Authority. Provides regulatory support and promotes quality standards for eligible marine product exports.",
      icon: "/images/certificate/mpeda.png",
      color: "bg-cyan-100",
    },
    {
      name: "IEC",
      description:
        "Import Export Code issued by the Directorate General of Foreign Trade. Enables businesses to legally conduct import and export activities in India.",
      icon: "/images/certificate/iec.png",
      color: "bg-blue-100",
    },
    {
      name: "MSME",
      description:
        "Registered under India's Micro, Small and Medium Enterprises framework, supporting our business operations and participation in the formal business ecosystem.",
      icon: "/images/certificate/msme.webp",
      color: "bg-purple-100",
    },
    {
      name: "GST",
      description:
        "Registered under India's Goods and Services Tax system, ensuring compliance with applicable indirect tax requirements.",
      icon: "/images/certificate/gst.png",
      color: "bg-indigo-100",
    },
    {
      name: "ISO",
      description:
        "ISO certification demonstrates our commitment to structured quality management, consistent processes, and continuous improvement.",
      icon: "/images/certificate/ISO.png",
      color: "bg-blue-100",
    },
    {
      name: "HACCP",
      description:
        "Hazard Analysis and Critical Control Points system focused on identifying, preventing, and controlling food safety hazards throughout production and handling.",
      icon: "/images/certificate/haccp.webp",
      color: "bg-teal-100",
    },
    {
      name: "FDA",
      description:
        "Our export operations are prepared to meet applicable U.S. FDA food safety and regulatory requirements for international markets.",
      icon: "/images/certificate/fda.png",
      color: "bg-red-100",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-blue flex flex-col">
      {/* Header */}
      <section className="relative w-full py-24 md:py-32 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta.webp"
            alt="Quality Control and Certifications"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Our Certifications
          </h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-3xl mx-auto drop-shadow-md">
            Uncompromising quality is at the heart of what we do. Our globally
            recognized certifications ensure you receive only the safest,
            highest-quality products.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 md:py-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-10 shadow-[0_10px_30px_rgba(11,41,66,0.06)] hover:shadow-[0_20px_40px_rgba(11,41,66,0.12)] transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-industrial-blue group overflow-hidden relative`}
              >
                {/* Decorative Background Blob */}
                <div
                  className={`absolute -right-16 -top-16 w-40 h-40 rounded-full ${cert.color} opacity-40 group-hover:scale-150 transition-transform duration-700 ease-out z-0`}
                ></div>

                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center mb-8 overflow-hidden relative p-2">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={cert.icon}
                        alt={cert.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-4 font-heading">
                    {cert.name}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed text-lg">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
