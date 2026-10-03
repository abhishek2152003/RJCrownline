"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.55,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`about-section py-20 md:py-32 bg-white overflow-hidden relative ${
        isVisible ? "animate" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <span className="about-reveal about-item-1 text-spice-gold font-bold tracking-widest uppercase text-sm mb-3 block">
              Who We Are
            </span>

            <h2 className="about-reveal about-item-2 font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-6 leading-tight">
              Welcome to <br />
              <span className="text-industrial-blue">RJCROWNLINE</span>
            </h2>

            <div className="about-reveal about-item-3 w-20 h-1.5 bg-spice-gold rounded-full mb-8"></div>

            <div className="space-y-6 text-charcoal text-lg leading-relaxed">
              <p className="about-reveal about-item-3">
                <strong>Mr. John Doe </strong>
                is the founder of RJCROWNLINE. We offer premium
                agri-commodities, dry fruits, and spices for export. We have a
                robust, high-reach network with farmers in Maharashtra and all
                over India.
              </p>

              <p className="about-reveal about-item-4">
                In a market with increasing demand, one needs to look for a
                reliable provider who will match all your needs in a
                satisfactory manner. We at <strong>RJCROWNLINE</strong> are
                catering to exactly the same, and are thus earning a prominent
                position in the market.
              </p>

              <div className="about-reveal about-item-4 p-6 bg-soft-blue border-l-4 border-spice-gold rounded-r-xl mt-8">
                <p className="font-bold text-deep-navy text-xl">
                  "We provide complete export solutions for Exporters."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-soft-blue rounded-[3rem] rotate-3 transform origin-bottom-right z-0 transition-transform duration-500 hover:rotate-6"></div>

            <div className="about-image-reveal relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,41,66,0.15)] aspect-[4/3] md:aspect-square lg:aspect-[4/5]">
              <Image
                src="/images/welcome.webp"
                alt="Premium Indian Spices and Commodities"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-deep-navy text-white p-6 md:p-8 rounded-2xl shadow-2xl z-20 animate-fade-in-up">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-spice-gold rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 text-deep-navy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-xl md:text-2xl">
                    Trusted
                  </p>
                  <p className="text-soft-blue text-sm md:text-base font-medium">
                    Export Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
