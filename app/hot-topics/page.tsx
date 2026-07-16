"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCard from "@/components/PostCard";
import { getArticlesByCategory } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

export default function HotTopicsPage() {
  const { t } = useLanguage();
  const articles = getArticlesByCategory("hot-topics");

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-2">
          {t("hotTopicsHubTitle")}
        </h1>
        <p className="text-gray-600 mb-10">{t("hotTopicsHubSubtitle")}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
