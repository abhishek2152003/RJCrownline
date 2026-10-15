"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8 border-t-[6px] border-spice-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-heading font-extrabold text-3xl tracking-wide notranslate">
              RJCROWNLINE
              <br />
            </h2>
            <p className="text-soft-blue font-medium text-lg mt-4">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase tracking-wider">
              {t("footer.productsHeading")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/dry-fruits"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("categories.dryFruits")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fruits"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("categories.fruits")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/vegetable"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("categories.vegetables")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/spices"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("categories.spices")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/seafood"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("categories.seafood")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase tracking-wider">
              {t("footer.companyHeading")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-soft-blue hover:text-spice-gold transition-colors duration-200"
                >
                  {t("nav.certifications")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase tracking-wider">
              {t("footer.contactHeading")}
            </h3>
            <ul className="space-y-4 text-soft-blue">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-spice-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>exim@rjcrownline.info</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-spice-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>
                  +91 9225226384 <br />
                  +91 8999598255 <br />
                  +91 8850442186 <br />
                  +91 7738053995
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-spice-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="leading-relaxed">
                  Sai Sansar Heights, B/305
                  <br />
                  Near Sacred Heart School, Above KTM Service
                  <br />
                  Durga Nagar, Varapgaon
                  <br />
                  Shahad (East), Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-industrial-blue flex flex-col md:flex-row justify-between items-center text-sm text-soft-blue/70">
          <p>
            &copy; {new Date().getFullYear()} R J CrownLine. {t("footer.allRightsReserved")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-spice-gold transition-colors duration-200"
            >
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
