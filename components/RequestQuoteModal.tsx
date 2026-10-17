"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset status when modal is closed or opened
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
    }
  }, [isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/exim@rjcrownline.info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            phone: formData.phone,
            company: formData.company,
            product: productName || "Not specified",
            quantity: formData.quantity,
            message: formData.message,
            _subject: `New Quote Request for ${productName || "Product"} from ${formData.name}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
              {t("buttons.sendInquiry")}
            </p>

            <h2
              id="quote-modal-title"
              className="font-heading text-2xl sm:text-3xl font-bold text-white"
            >
              {productName
                ? `${t("modal.titlePrefix")} ${productName}`
                : t("modal.generalTitle")}
            </h2>

            {productName && (
              <p className="text-soft-blue/90 mt-2">
                {t("nav.products")}:{" "}
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
                  {t("modal.fullName")} <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("modal.fullNamePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  {t("modal.companyName")}
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("modal.companyPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  {t("modal.emailAddress")}{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("modal.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-deep-navy mb-2">
                  {t("modal.phoneWhatsApp")}
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("modal.phonePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
                />
              </div>
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-semibold text-deep-navy mb-2">
                {t("nav.products")}
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
                {t("modal.quantity")}
              </label>

              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={t("modal.quantityPlaceholder")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-deep-navy mb-2">
                {t("modal.additionalMessage")}
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t("modal.messagePlaceholder")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-charcoal outline-none resize-none transition-all focus:border-industrial-blue focus:ring-2 focus:ring-industrial-blue/10"
              />
            </div>

            {status === "success" && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-emerald-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Your quote request has been submitted successfully! We will
                  get in touch soon.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-red-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Something went wrong while submitting. Please try again or
                  email us directly at exim@rjcrownline.info.
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-200 text-charcoal font-semibold hover:bg-gray-50 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {t("buttons.close")}
              </button>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg bg-industrial-blue text-white font-semibold hover:bg-deep-navy disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-md cursor-pointer flex items-center justify-center space-x-2"
              >
                {status === "submitting" ? (
                  <>
                    <span>Sending...</span>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <span>{t("modal.submitButton")}</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
