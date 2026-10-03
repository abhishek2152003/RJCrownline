"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function RequestQuoteModal({
  isOpen,
  onClose,
  productName = "",
}: RequestQuoteModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted || typeof document === "undefined") return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      product: productName,
      ...formData,
    });

    // Add your form submission logic here
    alert("Your quote request has been submitted!");

    onClose();

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      quantity: "",
      message: "",
    });
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-deep-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centering wrapper for Y and X axis */}
      <div
        className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 text-center"
        onClick={onClose}
      >
        {/* Modal Dialog */}
        <div
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto text-left flex flex-col max-h-[90vh] sm:max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative shrink-0 bg-deep-navy px-6 py-5 sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <p className="text-spice-gold text-sm font-semibold uppercase tracking-wider mb-1">
              Product Enquiry
            </p>

            <h2
              id="quote-modal-title"
              className="font-heading text-2xl sm:text-3xl font-bold text-white"
            >
              Request a Quote
            </h2>

            {productName && (
              <p className="text-soft-blue/90 mt-2">
                Product:{" "}
                <span className="text-white font-semibold">{productName}</span>
              </p>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 space-y-5 overflow-y-auto"
          >
            {/* Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-semibold text-deep-navy mb-2">
                Product
              </label>

              <input
                type="text"
                value={productName}
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-charcoal cursor-not-allowed"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-deep-navy mb-2">
                Required Quantity
              </label>

              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 kg / 10 MT"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-deep-navy mb-2">
                Additional Requirements
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your requirements, packaging, destination, etc."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none resize-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-200 text-charcoal font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full sm:flex-1 px-6 py-3 rounded-lg bg-industrial-blue text-white font-semibold hover:bg-deep-navy transition-colors shadow-md"
              >
                Send Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
