"use client";

import { useEffect } from "react";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function ServicesPage() {
  useEffect(() => {
    const section = document.querySelector(".quality-section");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section
            .querySelector(".quality-content")
            ?.classList.remove("opacity-0", "translate-y-10");

          section
            .querySelector(".quality-image")
            ?.classList.remove("opacity-0", "translate-x-10");

          section
            .querySelector(".quality-caption")
            ?.classList.remove("opacity-0", "translate-y-4");

          section.querySelectorAll(".quality-item").forEach((item) => {
            item.classList.remove("opacity-0", "translate-x-[-20px]");
          });

          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Sourcing & Procurement",
      description:
        "We source our products directly from reliable farmers and trusted agro vendors across India, ensuring the highest quality raw materials.",
      icon: (
        <svg
          className="w-8 h-8 text-spice-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Check & Processing",
      description:
        "Our experts properly clean, dry, and process the products. Every batch undergoes rigorous quality control to meet international export standards.",
      icon: (
        <svg
          className="w-8 h-8 text-spice-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Packaging",
      description:
        "We offer customized packaging solutions (5kg, 10kg, 15kg cartons, etc.) tailored to client requirements, ensuring freshness during transit.",
      icon: (
        <svg
          className="w-8 h-8 text-spice-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Global Shipping",
      description:
        "With a robust logistics network, we ensure timely and safe delivery of our agricultural commodities to clients worldwide.",
      icon: (
        <svg
          className="w-8 h-8 text-spice-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-soft-blue flex flex-col">
      {/* Header */}
      <section className="relative w-full py-24 md:py-32 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta.webp"
            alt="Logistics and Export"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Our Export Process
          </h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-3xl mx-auto drop-shadow-md">
            From the fertile farms of India to your destination. We ensure
            quality, transparency, and timely delivery at every step of our
            export journey.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-spice-gold font-bold uppercase tracking-widest text-5xl">
              Our Services
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-deep-navy mt-3 mb-6">
              Complete Import & Export Solutions
            </h2>

            <p className="text-charcoal/70 text-lg leading-relaxed">
              From sourcing and quality control to packaging and international
              logistics, we provide end-to-end solutions for agricultural
              commodities and food products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group p-8 rounded-3xl bg-soft-blue border border-transparent
                      hover:border-spice-gold hover:-translate-y-2
                      transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center
                        mb-6 shadow-sm group-hover:bg-spice-gold transition-colors"
              >
                <svg
                  className="w-8 h-8 text-spice-gold group-hover:text-deep-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M8 11h8M9 3h6l1 4H8l1-4z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-deep-navy mb-4 font-heading">
                Product Sourcing
              </h3>

              <p className="text-charcoal/70 leading-relaxed">
                We connect with trusted farmers, processors, and suppliers
                across India to source quality agricultural commodities
                according to buyer specifications.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="group p-8 rounded-3xl bg-soft-blue border border-transparent
                      hover:border-spice-gold hover:-translate-y-2
                      transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center
                        mb-6 shadow-sm group-hover:bg-spice-gold transition-colors"
              >
                <svg
                  className="w-8 h-8 text-spice-gold group-hover:text-deep-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.5-3A9 9 0 1112 3a9 9 0 014.5 1.2"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-deep-navy mb-4 font-heading">
                Quality Assurance
              </h3>

              <p className="text-charcoal/70 leading-relaxed">
                Products are inspected and processed according to defined
                quality specifications to maintain consistency, cleanliness,
                freshness, and export suitability.
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="group p-8 rounded-3xl bg-soft-blue border border-transparent
                      hover:border-spice-gold hover:-translate-y-2
                      transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center
                        mb-6 shadow-sm group-hover:bg-spice-gold transition-colors"
              >
                <svg
                  className="w-8 h-8 text-spice-gold group-hover:text-deep-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 16V6a1 1 0 011-1h11v11H3zm12 0h2a2 2 0 002-2V9h2l2 3v4h-2"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-deep-navy mb-4 font-heading">
                Global Logistics
              </h3>

              <p className="text-charcoal/70 leading-relaxed">
                We coordinate transportation and shipment handling to help
                ensure agricultural products reach international destinations
                safely and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="quality-section py-20 md:py-28 bg-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-spice-gold blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl animate-pulse [animation-delay:1.5s]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="quality-content opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <span className="text-spice-gold font-bold uppercase tracking-widest text-sm">
                Quality First
              </span>

              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
                Quality You Can Trust
              </h2>

              <p className="text-soft-blue/90 text-lg leading-relaxed mb-8">
                Quality is integrated into every stage of our supply chain. From
                sourcing and processing to final packaging, we focus on
                maintaining consistent product standards for our international
                buyers.
              </p>

              <div className="space-y-5">
                {[
                  "Carefully selected raw materials",
                  "Product cleaning and sorting",
                  "Batch-level quality checks",
                  "Buyer-specific specifications",
                  "Export-ready packaging",
                  "Attention to shipment requirements",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="quality-item flex items-center gap-4 opacity-0 translate-x-[-20px] transition-all duration-700 ease-out"
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div
                      className="w-7 h-7 rounded-full bg-spice-gold/20
                           flex items-center justify-center
                           transition-transform duration-300
                           hover:scale-125"
                    >
                      <svg
                        className="w-4 h-4 text-spice-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="text-white/90 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="quality-image relative h-[450px] rounded-3xl overflow-hidden opacity-0 translate-x-10 transition-all duration-1000 ease-out">
              <Image
                src="/images/service_image.webp"
                alt="Agricultural products quality"
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 quality-caption transition-all duration-700 delay-500">
                <p className="text-spice-gold font-bold uppercase tracking-widest text-sm mb-2">
                  From India to the World
                </p>

                <h3 className="text-white text-3xl font-bold font-heading">
                  Consistency at Every Stage
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-spice-gold font-bold uppercase tracking-widest text-5xl">
              Why Us
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-deep-navy mt-3 mb-6">
              Built Around Your Requirements
            </h2>

            <p className="text-charcoal/70 text-lg leading-relaxed">
              We combine reliable sourcing, quality-focused processes, flexible
              packaging, and international logistics to simplify global trade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Reliable Sourcing",
                text: "Strong relationships with farmers, suppliers, and processors across India.",
              },
              {
                number: "02",
                title: "Consistent Quality",
                text: "Focused quality checks and product handling throughout the supply chain.",
              },
              {
                number: "03",
                title: "Flexible Solutions",
                text: "Product specifications and packaging can be adapted to buyer requirements.",
              },
              {
                number: "04",
                title: "Global Reach",
                text: "Coordinated logistics and documentation support for international trade.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative bg-soft-blue rounded-3xl p-8
                     hover:-translate-y-2 transition-all duration-300"
              >
                <span className="text-6xl font-extrabold text-spice-gold/20">
                  {item.number}
                </span>

                <h3 className="text-2xl font-bold text-deep-navy font-heading mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-charcoal/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
