"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function AboutUs() {
  const valuesRef = useRef(null);
  const [valuesVisible, setValuesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="relative w-full py-24 md:py-32 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta.webp"
            alt="Spice Market"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-2xl mx-auto">
            Discover the heritage, passion, and commitment that drives
            RJCROWNLINE to deliver pure flavors worldwide.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=1974&auto=format&fit=crop"
                  alt="Farmers harvesting spices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-spice-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                Company Profile
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                Our Legacy of RJCROWNLINE
              </h2>
              <div className="space-y-4 text-charcoal text-lg leading-relaxed">
                <p>
                  Established in the heart of Maharashtra, India,{" "}
                  <strong>RJCROWNLINE</strong> has grown from a humble
                  family-owned enterprise into a premier international exporter
                  of premium spices, grains, and dry fruits.
                </p>
                <p>
                  We source our products directly from vetted, sustainable farms
                  across India, ensuring that every batch of turmeric, every
                  strand of saffron, and every handful of nuts meets the highest
                  global standards for purity and taste.
                </p>
                <p>
                  With decades of agricultural expertise and a state-of-the-art
                  processing infrastructure, we are proud to be the trusted
                  flavor partner for top culinary brands and distributors in
                  over 20 countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-0 bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Mission */}
          <div className="w-full md:w-1/2 bg-industrial-blue text-white py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-blue/50 text-spice-gold shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              To seamlessly bridge the gap between local farmers and global
              markets by delivering 100% pure, unadulterated, and ethically
              sourced agricultural products that elevate culinary experiences
              worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 bg-deep-navy text-white py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-blue/30 text-spice-gold shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="font-heading text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              To be the globally recognized gold standard in the spice and
              agricultural export industry, championed for our uncompromising
              commitment to quality, sustainability, and fair-trade practices.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 md:py-28 bg-soft-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-spice-gold font-bold tracking-widest uppercase text-sm mb-2 block">
              Our Core Principles
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-deep-navy mb-4">
              Company Values
            </h2>
            <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full"></div>
          </div>

          <div
            ref={valuesRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              valuesVisible ? "values-visible" : ""
            }`}
          >
            {/* Value 1 */}
            <div className="value-card bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="value-icon w-14 h-14 bg-soft-blue rounded-xl flex items-center justify-center text-industrial-blue mb-6 transition-colors duration-300 group-hover:text-spice-gold">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-deep-navy">
                Uncompromising Quality
              </h3>

              <p className="text-charcoal/70 mt-3">
                We employ rigorous testing and quality control measures at every
                stage, from farm to packaging.
              </p>
            </div>
            {/* Value 2 */}
            <div className="value-card bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="value-icon w-14 h-14 bg-soft-blue rounded-xl flex items-center justify-center text-industrial-blue mb-6 transition-colors duration-300 group-hover:text-spice-gold">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-deep-navy">
                Ethical Sourcing
              </h3>

              <p className="text-charcoal/70 mt-3">
                We believe in fair trade, ensuring our partner farmers are
                compensated fairly for their hard work.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="value-icon w-14 h-14 bg-soft-blue rounded-xl flex items-center justify-center text-industrial-blue mb-6 transition-colors duration-300 group-hover:text-spice-gold">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-deep-navy">
                Customer First
              </h3>

              <p className="text-charcoal/70 mt-3">
                Your satisfaction is our priority. We offer tailored packaging
                and fast, reliable global shipping.
              </p>
            </div>

            {/* Value 4 */}
            <div className="value-card bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="value-icon w-14 h-14 bg-soft-blue rounded-xl flex items-center justify-center text-industrial-blue mb-6 transition-colors duration-300 group-hover:text-spice-gold">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-deep-navy">
                Sustainability
              </h3>

              <p className="text-charcoal/70 mt-3">
                We implement eco-friendly practices to minimize our carbon
                footprint and preserve natural resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
