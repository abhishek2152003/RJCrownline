"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-soft-blue">
      <section className="relative min-h-screen flex items-center justify-center bg-deep-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1987&auto=format&fit=crop"
            alt="Agricultural products"
            fill
            priority
            className="object-cover object-center opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-deep-navy/80" />
        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-spice-gold/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        {/* Content */}
        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-spice-gold font-bold uppercase tracking-[0.3em] text-sm mb-5">
            Our Gallery
          </span>

          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6">
            Coming <span className="text-spice-gold">Soon</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
