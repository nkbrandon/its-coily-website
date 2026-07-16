"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="bg-indigo-950 text-white py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold">{t("newsletterTitle")}</h2>
        <p className="mt-2 text-indigo-200">{t("newsletterSubtitle")}</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder={t("newsletterFirstNamePlaceholder")}
            className="flex-1 px-4 py-3 rounded-md text-gray-900"
          />
          <input
            type="email"
            placeholder={t("newsletterPlaceholder")}
            className="flex-1 px-4 py-3 rounded-md text-gray-900"
          />
          <button className="px-6 py-3 bg-white text-indigo-950 rounded-md font-medium whitespace-nowrap">
            {t("newsletterButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
