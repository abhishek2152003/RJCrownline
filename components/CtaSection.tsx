import Link from "next/link";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative py-24 bg-deep-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta.webp"
          alt="Global Export and Shipping"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to source premium{" "}
            <span className="text-spice-gold">authentic flavors</span> for your
            market?
          </h2>
          <p className="text-xl text-soft-blue mb-10 leading-relaxed">
            Partner with us for reliable, high-quality agricultural exports. We
            provide end-to-end solutions tailored to your global distribution
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-deep-navy bg-spice-gold hover:bg-yellow-500 transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,138,39,0.39)] hover:shadow-[0_6px_20px_rgba(200,138,39,0.5)] transform hover:-translate-y-1 group"
            >
              Contact Our Team
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
