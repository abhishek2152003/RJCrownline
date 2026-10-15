"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="bg-deep-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center notranslate"
            translate="no"
          >
            <Link href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="RJCROWNLINE"
                className="w-65 sm:w-70 md:w-75 lg:w-80 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center text-[15px]">
            <Link
              href="/"
              className="hover:text-spice-gold font-semibold transition-colors duration-200"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/certifications"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("nav.certifications")}
            </Link>
            <Link
              href="/services"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/gallery"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("nav.gallery")}
            </Link>
            <div className="relative group h-full flex items-center">
              <button className="flex items-center hover:text-spice-gold transition-colors duration-200 focus:outline-none">
                {t("nav.products")}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-0 w-48 bg-white text-deep-navy rounded-b-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden border-t-2 border-spice-gold">
                <Link
                  href="/products/dry-fruits"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors border-b border-gray-100"
                >
                  {t("categories.dryFruits")}
                </Link>
                <Link
                  href="/products/fruits"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors border-b border-gray-100"
                >
                  {t("categories.fruits")}
                </Link>
                <Link
                  href="/products/vegetable"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors border-b border-gray-100"
                >
                  {t("categories.vegetables")}
                </Link>
                <Link
                  href="/products/spices"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors border-b border-gray-100"
                >
                  {t("categories.spices")}
                </Link>
                <Link
                  href="/products/millets"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors border-b border-gray-100"
                >
                  {t("categories.millets")}
                </Link>
                <Link
                  href="/products/pulses"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors"
                >
                  {t("categories.pulses")}
                </Link>
                <Link
                  href="/products/seafood"
                  className="block px-4 py-3 hover:bg-soft-blue hover:text-spice-gold transition-colors"
                >
                  {t("categories.seafood")}
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("nav.contact")}
            </Link>
            <div className="pl-2 border-l border-white/20">
              <LanguageSelector variant="desktop" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-spice-gold focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-industrial-blue/95 backdrop-blur-sm border-t border-ocean-blue transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[800px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-semibold text-spice-gold bg-ocean-blue/20 transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.home")}
          </Link>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.about")}
          </Link>

          <Link
            href="/certifications"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.certifications")}
          </Link>

          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.services")}
          </Link>

          <Link
            href="/gallery"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.gallery")}
          </Link>

          {/* Products */}
          <div>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
            >
              {t("nav.products")}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Product submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isProductsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-6 space-y-1 mt-1 border-l-2 border-ocean-blue ml-4">
                <Link
                  href="/products/dry-fruits"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.dryFruits")}
                </Link>

                <Link
                  href="/products/fruits"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.fruits")}
                </Link>

                <Link
                  href="/products/vegetable"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.vegetables")}
                </Link>

                <Link
                  href="/products/spices"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.spices")}
                </Link>

                <Link
                  href="/products/millets"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.millets")}
                </Link>

                <Link
                  href="/products/pulses"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.pulses")}
                </Link>
                <Link
                  href="/products/seafood"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-spice-gold"
                >
                  {t("categories.seafood")}
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-ocean-blue hover:text-spice-gold"
          >
            {t("nav.contact")}
          </Link>

          <LanguageSelector
            variant="mobile"
            onSelectLanguage={closeMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
}
