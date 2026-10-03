"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;
    const subject = encodeURIComponent(
      `New Contact Request from ${firstName} ${lastName}`,
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    // Open the default email client
    window.location.href = `mailto:info@globalspiceexports.com?subject=${subject}&body=${body}`;

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-soft-blue">
      {/* Header */}
      <section className="relative w-full py-20 md:py-28 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta.webp"
            alt="Global Shipping"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-2xl mx-auto drop-shadow-md">
            Whether you have a question about our products, pricing, or need to
            arrange a global shipment, our team is ready to answer all your
            questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(11,41,66,0.15)] overflow-hidden">
            {/* Contact Information (Left Side) */}
            <div className="w-full lg:w-2/5 bg-industrial-blue p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Circle */}
              <div
                className="
      contact-decoration
      absolute top-[-20%] left-[-20%]
      w-[60%] h-[40%]
      rounded-full
      bg-ocean-blue
      opacity-50
      blur-3xl
      z-0
    "
              />

              <div className="relative z-10">
                {/* Heading */}
                <h2
                  className="
        contact-heading
        font-heading text-3xl md:text-4xl
        font-bold mb-12 text-white
      "
                >
                  Get In Touch
                </h2>

                <div className="space-y-10">
                  {/* Email */}
                  <div className="contact-item flex items-start group">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-spice-gold transition-all duration-300 rounded-2xl flex items-center justify-center shrink-0 mr-6 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:rotate-3">
                      <svg
                        className="w-6 h-6 text-spice-gold group-hover:text-deep-navy transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-1 text-white tracking-wide">
                        Email Us
                      </h3>

                      <p className="text-soft-blue/90 hover:text-spice-gold transition-colors cursor-pointer">
                        exim@rjcrownline.info
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-item flex items-start group">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-spice-gold transition-all duration-300 rounded-2xl flex items-center justify-center shrink-0 mr-6 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:rotate-3">
                      <svg
                        className="w-6 h-6 text-spice-gold group-hover:text-deep-navy transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-1 text-white tracking-wide">
                        Call Us
                      </h3>

                      <p className="text-soft-blue/90 hover:text-spice-gold transition-colors cursor-pointer">
                        +91 98765 43210
                      </p>

                      <p className="text-soft-blue/90 hover:text-spice-gold transition-colors cursor-pointer">
                        +91 12345 67890
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="contact-item flex items-start group">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-spice-gold transition-all duration-300 rounded-2xl flex items-center justify-center shrink-0 mr-6 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:rotate-3">
                      <svg
                        className="w-6 h-6 text-spice-gold group-hover:text-deep-navy transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-1 text-white tracking-wide">
                        Headquarters
                      </h3>

                      <p className="text-soft-blue/90">
                        Sai Sansar Heights, B/305
                      </p>

                      <p className="text-soft-blue/90">
                        Near Sacred Heart School, Above KTM Service
                      </p>

                      <p className="text-soft-blue/90">
                        Durga Nagar, Varapgaon
                      </p>

                      <p className="text-soft-blue/90">
                        Shahad (East), Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="w-full lg:w-3/5 p-10 md:p-14 lg:p-20 bg-white">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-navy mb-12">
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-10 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="block py-3 px-0 w-full text-lg text-charcoal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-industrial-blue peer transition-colors"
                      placeholder=" "
                    />
                    <label
                      htmlFor="firstName"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-industrial-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="block py-3 px-0 w-full text-lg text-charcoal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-industrial-blue peer transition-colors"
                      placeholder=" "
                    />
                    <label
                      htmlFor="lastName"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-industrial-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative z-0 w-full group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block py-3 px-0 w-full text-lg text-charcoal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-industrial-blue peer transition-colors"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-industrial-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="block py-3 px-0 w-full text-lg text-charcoal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-industrial-blue peer transition-colors"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-industrial-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative z-0 w-full group mt-10">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="block py-3 px-0 w-full text-lg text-charcoal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-industrial-blue peer transition-colors resize-none"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-industrial-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-industrial-blue hover:bg-ocean-blue text-white font-bold text-xl py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(22,78,112,0.39)] hover:shadow-[0_6px_20px_rgba(40,120,168,0.3)] flex justify-center items-center group mt-12"
                >
                  Send Message
                  <svg
                    className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
