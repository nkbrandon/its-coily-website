"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCard from "@/components/PostCard";
import { getArticlesByCategory, Article } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

const subcategoryPills: { label: string; value: Article["subcategory"] }[] = [
  { label: "Hair education", value: "hair-education" },
  { label: "Hair concerns", value: "hair-concerns" },
  { label: "Hairstyles", value: "hairstyles" },
  { label: "Tutorials", value: "tutorials" },
  { label: "Products & Tools reviews", value: "products-reviews" },
];

function HairCareContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const activeSub = searchParams.get("sub");
  const allArticles = getArticlesByCategory("hair-care");
  const articles = activeSub
    ? allArticles.filter((article) => article.subcategory === activeSub)
    : allArticles;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-2">
        {t("hairCareHubTitle")}
      </h1>
      <p className="text-gray-600 mb-6">{t("hairCareHubSubtitle")}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        <a
          href="/hair-care"
          className={
            "px-4 py-2 rounded-full text-sm font-medium border " +
            (!activeSub
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-indigo-900 border-indigo-200 hover:bg-indigo-50")
          }
        >
          All
        </a>
        {subcategoryPills.map((pill) => (
          <a
            key={pill.value}
            href={"/hair-care?sub=" + pill.value}
            className={
              "px-4 py-2 rounded-full text-sm font-medium border " +
              (activeSub === pill.value
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-indigo-900 border-indigo-200 hover:bg-indigo-50")
            }
          >
            {pill.label}
          </a>
        ))}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-500">No posts found in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
              date={article.date}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function HairCarePage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={null}>
        <HairCareContent />
      </Suspense>
      <Newsletter />
      <Footer />
    </main>
  );
}
