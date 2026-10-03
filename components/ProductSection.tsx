"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Dry Fruits",
    image: "/images/carousel/dryfruits.webp",
    link: "/products/dry-fruits",
  },
  {
    title: "Fresh Fruits",
    image: "/images/fresh_fruits.webp",
    link: "/products/fruits",
  },
  {
    title: "Fresh Vegetables",
    image: "/images/fresh_vegetable.webp",
    link: "/products/vegetable",
  },
  {
    title: "Premium Spices",
    image: "/images/spices.webp",
    link: "/products/spices",
  },
  {
    title: "Wholesome Millets",
    image: "/images/carousel/millets.webp",
    link: "/products/millets",
  },
  {
    title: "Premium Pulses",
    image: "/images/carousel/pulses.webp",
    link: "/products/pulses",
  },
  {
    title: "Premium Seafood",
    image: "/images/seafood.webp",
    link: "/products/seafood",
  },
];

export default function ProductSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(categories.length).fill(false),
  );

  useEffect(() => {
    const cardRefs: HTMLAnchorElement[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setVisibleCards((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const nodes =
      sectionRef.current?.querySelectorAll<HTMLAnchorElement>(".product-card");
    nodes?.forEach((node) => {
      cardRefs.push(node);
      observer.observe(node);
    });

    return () => {
      cardRefs.forEach((n) => observer.unobserve(n));
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-soft-blue relative border-t border-white/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-spice-gold font-bold tracking-widest uppercase text-sm mb-3 block">
            Our Catalog
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-deep-navy mb-6">
            Explore Our{" "}
            <span className="text-industrial-blue">Premium Products</span>
          </h2>
          <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
          <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
            From the finest hand-picked spices to export-grade dry fruits and
            grains, we supply the world with uncompromised quality and authentic
            flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, idx) => {
            const isVisible = visibleCards[idx];
            return (
              <Link
                href={category.link}
                key={idx}
                data-index={idx}
                className={`
                  product-card
                  group relative block w-full
                  aspect-[4/5] md:aspect-[3/4]
                  rounded-3xl overflow-hidden
                  shadow-[0_10px_30px_rgba(11,41,66,0.1)]
                  hover:shadow-[0_20px_40px_rgba(11,41,66,0.2)]
                  transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-2
                  will-change-transform
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-16 scale-95 blur-[2px]"
                  }
                `}
                style={{ transitionDelay: `${(idx % 4) * 120}ms` }}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                    group-hover:rotate-1
                  "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Shimmer effect on hover */}
                <div
                  className="
                    absolute inset-0 z-20
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform duration-1000 ease-out
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    pointer-events-none
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-deep-navy
                    via-deep-navy/30
                    to-transparent
                    opacity-80
                    group-hover:opacity-95
                    transition-opacity duration-500
                  "
                />

                {/* Gold border glow on hover */}
                <div
                  className="
                    absolute inset-0 rounded-3xl z-10
                    ring-0 ring-spice-gold/0
                    group-hover:ring-2 group-hover:ring-spice-gold/60
                    transition-all duration-500
                    pointer-events-none
                  "
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                  <div
                    className="
                      transform translate-y-4
                      group-hover:translate-y-0
                      transition-transform duration-500 ease-out
                    "
                  >
                    <h3
                      className="
                        font-heading text-2xl font-bold
                        text-white mb-3 drop-shadow-md
                        transition-transform duration-500 ease-out
                        group-hover:scale-[1.03] origin-left
                      "
                    >
                      {category.title}
                    </h3>

                    <div
                      className="
                        flex items-center
                        text-spice-gold font-semibold
                        opacity-0 translate-y-2
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500 ease-out delay-100
                      "
                    >
                      <span>View Products</span>

                      <svg
                        className="
                          w-5 h-5 ml-2
                          transform group-hover:translate-x-2
                          transition-transform duration-500 ease-out
                        "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
