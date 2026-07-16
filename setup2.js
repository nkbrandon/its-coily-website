const fs = require("fs");
const path = require("path");

const files = {
  "lib/translations.ts": `export const translations = {
  en: {
    navHairCare: "Hair care",
    navBeauty: "Beauty",
    navHotTopics: "Hot topics",
    navAbout: "About",
    heroTitle: "All You Need For Your Coils.",
    heroSubtitle: "Aurane helps you understand your natural hair, for better hair care.",
    heroCta: "Learn more",
    hairCareTitle: "Hair Care",
    beautyTitle: "Beauty",
    newsletterTitle: "Sign up for our newsletter",
    newsletterSubtitle: "Stay tuned for new and trending tips for your coils!",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Send",
  },
  nl: {
    navHairCare: "Haarverzorging",
    navBeauty: "Beauty",
    navHotTopics: "Actueel",
    navAbout: "Over ons",
    heroTitle: "Alles wat je nodig hebt voor je krullen.",
    heroSubtitle: "Aurane helpt je jouw natuurlijke haar te begrijpen, voor betere haarverzorging.",
    heroCta: "Lees meer",
    hairCareTitle: "Haarverzorging",
    beautyTitle: "Beauty",
    newsletterTitle: "Schrijf je in voor onze nieuwsbrief",
    newsletterSubtitle: "Blijf op de hoogte van nieuwe tips voor jouw haar!",
    newsletterPlaceholder: "Jouw e-mailadres",
    newsletterButton: "Versturen",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];
`,
  "context/LanguageContext.tsx": `"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "nl") {
      setLanguageState(stored);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }

  function t(key: TranslationKey) {
    return translations[language][key];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
`,
  "components/Navbar.tsx": `"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-indigo-900">Aurane</span>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <a href="#" className="hover:text-indigo-700">{t("navHairCare")}</a>
          <a href="#" className="hover:text-indigo-700">{t("navBeauty")}</a>
          <a href="#" className="hover:text-indigo-700">{t("navHotTopics")}</a>
          <a href="#" className="hover:text-indigo-700">{t("navAbout")}</a>
          <button
            onClick={() => setLanguage(language === "en" ? "nl" : "en")}
            className="ml-4 px-3 py-1 border border-gray-300 rounded-md text-xs font-semibold hover:bg-gray-50"
          >
            {language === "en" ? "NL" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
`,
  "components/Hero.tsx": `"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {t("heroSubtitle")}
        </p>
        <a href="#hair-care" className="inline-block mt-6 px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800">
          {t("heroCta")}
        </a>
      </div>
      <img
        src="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/11/Itscoily-hero-image.png?fit=1024%2C732&ssl=1"
        alt="Hero"
        className="rounded-xl w-full object-cover"
      />
    </section>
  );
}
`,
  "components/PostCard.tsx": `type PostCardProps = {
  title: string;
  excerpt?: string;
  image?: string;
};

export default function PostCard({ title, excerpt, image }: PostCardProps) {
  return (
    <div className="flex flex-col">
      {image ? (
        <img
          src={image}
          alt={title}
          className="rounded-lg aspect-[4/3] mb-3 w-full object-cover"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg aspect-[4/3] mb-3" />
      )}
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {excerpt && <p className="text-sm text-gray-600 mt-1">{excerpt}</p>}
    </div>
  );
}
`,
  "components/Newsletter.tsx": `"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="bg-indigo-950 text-white py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold">{t("newsletterTitle")}</h2>
        <p className="mt-2 text-indigo-200">{t("newsletterSubtitle")}</p>
        <form className="mt-6 flex gap-2">
          <input
            type="email"
            placeholder={t("newsletterPlaceholder")}
            className="flex-1 px-4 py-3 rounded-md text-gray-900"
          />
          <button className="px-6 py-3 bg-white text-indigo-950 rounded-md font-medium">
            {t("newsletterButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
`,
  "app/page.tsx": `"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <Hero />

      <section id="hair-care" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">{t("hairCareTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PostCard
            title="Best Skin Care for Dark Circles under Eyes"
            image="https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Woman-using-eye-patches-for-beauty.jpg?fit=1500%2C1000&ssl=1"
          />
          <PostCard
            title="Coily Hair Can't Get Lice...Right?"
            image="https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Young-black-girl-thinking-and-looking-up-contemplating-about-a-question.jpg?fit=2000%2C1333&ssl=1"
          />
          <PostCard
            title="How to Detangle Matted Hair: A Step-by-Step Guide"
            image="https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Front-view-woman-using-hair-comb-on-type-4-hair.jpg?fit=2000%2C1429&ssl=1"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">{t("beautyTitle")}</h2>
        <PostCard
          title="Should You Put SPF on Your Hair and Scalp?"
          excerpt="Met zoveel aandacht voor het beschermen van onze huid tegen de zon, is het logisch om je af te vragen of ons haar en hoofdhuid vergelijkbare zorg nodig hebben..."
          image="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/07/8689.jpg?fit=2000%2C1333&ssl=1"
        />
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Aangemaakt/bijgewerkt:", filePath);
}

console.log("Klaar! Je kan setup2.js nu verwijderen.");
