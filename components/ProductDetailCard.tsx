"use client";

import { useState } from "react";
import Image from "next/image";
import RequestQuoteModal from "@/components/RequestQuoteModal";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetailProps {
  title: string;
  specs: ProductSpec[];
  imageSrc: string;
}

export default function ProductDetailCard({
  title,
  specs,
  imageSrc,
}: ProductDetailProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(11,41,66,0.08)] hover:shadow-[0_20px_50px_rgba(11,41,66,0.12)] transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row w-full max-w-6xl mx-auto my-10 group">
        {/* Product Image Side */}
        <div className="w-full md:w-2/5 relative aspect-square md:aspect-auto overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent md:bg-gradient-to-r" />

          {/* Quality Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-xs font-bold text-deep-navy uppercase tracking-wider">
              Export Quality
            </span>
          </div>
        </div>

        {/* Product Details Side */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          {/* Product Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            {title}
          </h2>

          <div className="w-16 h-1.5 bg-spice-gold rounded-full mb-8" />

          {/* Specifications */}
          <div className="bg-soft-blue/50 p-6 md:p-8 rounded-2xl border border-soft-blue">
            <h3 className="font-bold text-industrial-blue uppercase tracking-wider text-sm mb-5 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Specifications
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-base">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l-2 border-spice-gold/50 pl-4"
                >
                  <dt className="text-gray-500 font-medium mb-1 text-xs uppercase tracking-wide">
                    {spec.label}
                  </dt>

                  <dd className="font-bold text-deep-navy">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Request Quote */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="px-6 py-3 bg-industrial-blue text-white rounded-lg font-semibold hover:bg-deep-navy transition-colors duration-300"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <RequestQuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={title}
      />
    </>
  );
}
