"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Premium Kashmiri Saffron",
    description:
      "The world's most exquisite spice, carefully hand-harvested for unparalleled flavor and vibrant color.",
    image: "/images/carousel/saffron.webp",
    // image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    link: "/products/spices/saffron",
  },
  {
    id: 2,
    title: "Organic Turmeric Powder",
    description:
      "High curcumin content turmericsourced directly from pristine organic farms. Earthy, rich, and deeply golden.",
    image: "/images/carousel/turmeric.webp",
    // image: "https://images.unsplash.com/photo-1583949885751-23b7d1909378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVybWVyaWMlMjBwb3dkZXJ8ZW58MHwwfDB8fHww",
    link: "/products/spices/turmeric",
  },
  {
    id: 3,
    title: "Ceylon Cinnamon Sticks",
    description:
      "True cinnamon with a delicate, sweet flavor profile. Perfect for both culinary masterpieces and daily wellness.",
    image: "/images/carousel/cinnamon.webp",
    // image: "https://images.unsplash.com/photo-1622798337764-259682f03741?w=500&auto=format&fit=crop&q=60",
    link: "/products/spices/cinnamon",
  },
  {
    id: 4,
    title: "Premium Dry Fruits",
    description:
      "Hand-selected almonds, cashews, and pistachios. Packed with nutrients and natural crunch.",
    image: "/images/carousel/dryfruits.webp",
    // image: "https://images.unsplash.com/photo-1767877609689-beff32b9c0ac?w=500&auto=format&fit=crop&q=60",
    link: "/products/dry-fruits",
  },
  {
    id: 5,
    title: "Rare Black Turmeric",
    description:
      "A rare and highly valued variety known for its deep blue-black rhizomes and exceptional medicinal properties.",
    image: "/images/carousel/blackturmeric.webp",
    //image: "https://images.unsplash.com/photo-1666818398897-381dd5eb9139?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/spices/black-turmeric",
  },
  {
    id: 6,
    title: "Fresh Quality Fish",
    description:
      "Premium selection of fresh catch, sourced responsibly for the best culinary experience.",
    image: "/images/carousel/fish.webp",
    //image: "https://images.unsplash.com/photo-1611214774777-3d997a9d0e35?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/seafood/fish",
  },
  {
    id: 7,
    title: "Nutritious Millets",
    description:
      "Wholesome and ancient grains, packed with fiber and essential nutrients for a healthy lifestyle.",
    image: "/images/carousel/millets.webp",
    // image: "https://images.unsplash.com/photo-1705475388190-775066fd69a5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/grains/millets",
  },
  {
    id: 8,
    title: "Wholesome Grains",
    description:
      "A diverse variety of whole grains to provide sustained energy and balanced nutrition.",
    image: "/images/carousel/grains.webp",
    //image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60",
    link: "/products/grains",
  },
  {
    id: 9,
    title: "Premium Pulses",
    description:
      "Rich source of protein and essential minerals. Carefully processed for the finest quality and taste.",
    image: "/images/carousel/pulses.webp",
    //image: "https://images.unsplash.com/photo-1708436477916-f97964f3ccf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/pulses",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const next = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(next, 6000);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-deep-navy overflow-hidden group">
      {/* Slides Container */}
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative flex items-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={slide.id === 1}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-transparent"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Slide Content (Hero Style) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <span className="inline-block py-1 px-3 rounded-full bg-spice-gold/20 text-spice-gold border border-spice-gold/50 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
                  Featured Product
                </span>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-md mb-10">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white hover:text-deep-navy transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Explore Our Products
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 hover:bg-black/50 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:opacity-100 z-20"
        aria-label="Previous slide"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/20 hover:bg-black/50 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:opacity-100 z-20"
        aria-label="Next slide"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-500 ease-in-out ${current === index ? "bg-spice-gold w-16" : "bg-white/50 w-8 hover:bg-white/80"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
