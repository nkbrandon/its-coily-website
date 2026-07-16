"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const hairCareSubmenu = [
  { label: "Hair education", href: "/hair-care?sub=hair-education" },
  { label: "Hair concerns", href: "/hair-care?sub=hair-concerns" },
  { label: "Hairstyles", href: "/hair-care?sub=hairstyles" },
  {
    label: "Products & Tools reviews",
    href: "/hair-care?sub=products-reviews",
  },
  { label: "Tutorials", href: "/hair-care?sub=tutorials" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const [showHairCareMenu, setShowHairCareMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push("/search?q=" + encodeURIComponent(searchValue.trim()));
      setMobileOpen(false);
    }
  }

  return (
    <header className="w-full bg-indigo-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white whitespace-nowrap"
        >
          <img
            src="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/11/Logo_White.png?fit=200%2C100&ssl=1"
            alt="It's Coily"
            className="h-8 w-auto"
          />
          itscoily
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
          <div
            className="relative"
            onMouseEnter={() => setShowHairCareMenu(true)}
            onMouseLeave={() => setShowHairCareMenu(false)}
          >
            <Link
              href="/hair-care"
              className="flex items-center gap-1 hover:opacity-90"
            >
              {t("navHairCare")}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="mt-0.5"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            {showHairCareMenu && (
              <div className="absolute left-0 top-full w-64 bg-indigo-600 shadow-lg py-2 z-50">
                {hairCareSubmenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-3 text-white hover:bg-indigo-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/beauty" className="hover:opacity-90">
            {t("navBeauty")}
          </Link>
          <Link href="/hot-topics" className="hover:opacity-90">
            {t("navHotTopics")}
          </Link>
          <Link href="/about" className="hover:opacity-90">
            {t("navAbout")}
          </Link>
        </nav>

        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center flex-1 max-w-xs"
        >
          <div className="flex items-center bg-white rounded-md px-3 py-2 w-full">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Type to start searching..."
              className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
            />
            <button type="submit" aria-label="Search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-500 shrink-0"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </form>

        <button
          onClick={() => setLanguage(language === "en" ? "nl" : "en")}
          className="hidden md:inline-block px-3 py-1.5 text-sm font-medium border border-white text-white rounded-md hover:bg-indigo-700 whitespace-nowrap"
        >
          {language === "en" ? "NL" : "EN"}
        </button>

        <button
          className="md:hidden text-white"
          aria-label="Menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 flex flex-col gap-4 text-white text-sm font-semibold">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white rounded-md px-3 py-2"
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Type to start searching..."
              className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
            />
          </form>

          <div>
            <Link
              href="/hair-care"
              className="block py-1"
              onClick={() => setMobileOpen(false)}
            >
              {t("navHairCare")}
            </Link>
            <div className="pl-3 flex flex-col gap-1 mt-1">
              {hairCareSubmenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-1 text-indigo-100 font-normal"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/beauty"
            className="block py-1"
            onClick={() => setMobileOpen(false)}
          >
            {t("navBeauty")}
          </Link>
          <Link
            href="/hot-topics"
            className="block py-1"
            onClick={() => setMobileOpen(false)}
          >
            {t("navHotTopics")}
          </Link>
          <Link
            href="/about"
            className="block py-1"
            onClick={() => setMobileOpen(false)}
          >
            {t("navAbout")}
          </Link>

          <button
            onClick={() => setLanguage(language === "en" ? "nl" : "en")}
            className="self-start px-3 py-1.5 text-sm font-medium border border-white rounded-md"
          >
            {language === "en" ? "NL" : "EN"}
          </button>
        </div>
      )}
    </header>
  );
}
