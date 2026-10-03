export default function ExportProcessSection() {
  const processSteps = [
    {
      id: "01",
      title: "Sourcing & Procurement",
      description: "Directly sourced from trusted farms across India, ensuring premium quality right from the roots.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: "02",
      title: "Quality Assurance",
      description: "Rigorous sorting, cleaning, and laboratory testing to meet international food safety standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: "03",
      title: "Secure Packaging",
      description: "Customized, hygienic, and weather-proof packaging to preserve freshness during long transit times.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
      )
    },
    {
      id: "04",
      title: "Logistics & Delivery",
      description: "Efficient port handling, customs clearance, and global shipping to ensure timely delivery worldwide.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-deep-navy mb-4">Our Export Process</h2>
          <div className="w-20 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
            A streamlined and transparent supply chain from Indian farms to global destinations, ensuring uncompromising quality at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile, visible on desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-200 -z-10">
                  <div className="h-full bg-industrial-blue w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              )}
              
              <div className="bg-soft-blue/30 rounded-2xl p-8 flex flex-col items-center text-center h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-heading text-6xl font-black text-industrial-blue z-0 transition-transform group-hover:scale-110">
                  {step.id}
                </div>
                
                <div className="w-20 h-20 rounded-full bg-industrial-blue text-white flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:bg-spice-gold transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-deep-navy mb-3 relative z-10">{step.title}</h3>
                <p className="text-charcoal/70 relative z-10 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
