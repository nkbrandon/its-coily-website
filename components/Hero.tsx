"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-950 leading-tight">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{t("heroSubtitle")}</p>
        <Link
          href="/hair-care"
          className="inline-block mt-6 px-6 py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800"
        >
          {t("heroCta")}
        </Link>
      </div>
      <img
        src="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/11/Itscoily-hero-image.png?fit=1024%2C732&ssl=1"
        alt="Hero"
        className="rounded-xl w-full object-cover"
      />
    </section>
  );
}
