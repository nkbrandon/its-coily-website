"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6">
          {t("aboutHeading")}
        </h1>
        <img
          src="https://i0.wp.com/itscoily.com/wp-content/uploads/2024/05/pexels-rdne-6192164.jpg?fit=1024%2C683&ssl=1"
          alt={t("aboutHeading")}
          className="rounded-xl w-full object-cover mb-8"
        />
        <p className="text-gray-700 mb-4 leading-relaxed">{t("aboutIntro1")}</p>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("aboutIntro2")}</p>
        <p className="text-xl italic text-indigo-900 text-center mb-10">
          {t("aboutQuote")}
        </p>

        <h2 className="text-2xl font-bold text-indigo-950 mb-3">{t("missionTitle")}</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("missionText")}</p>

        <h2 className="text-2xl font-bold text-indigo-950 mb-3">{t("visionTitle")}</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">{t("visionText")}</p>

        <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
          <img
            src="https://i0.wp.com/itscoily.com/wp-content/uploads/2022/03/IMG_8613.jpg?fit=1024%2C1024&ssl=1"
            alt="Aurane"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-indigo-950 mb-2">
              {t("founderTitle")}
            </h2>
            <p className="text-gray-700 leading-relaxed">{t("founderText")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
