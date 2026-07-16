"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/lib/articles";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const hairCarePicks = [
    getArticleBySlug("best-skin-care-for-dark-circles-under-eyes")!,
    getArticleBySlug("coily-hair-cant-get-liceright")!,
    getArticleBySlug("how-to-detangle-matted-hair-a-step-by-step-guide")!,
  ];

  const beautyPick = getArticleBySlug(
    "should-you-put-spf-on-your-hair-and-scalp",
  )!;

  const hotTopicsPicks = [
    getArticleBySlug(
      "the-perfect-swim-turban-for-coily-hair-a-carefree-summer-with-ygy",
    )!,
    getArticleBySlug("are-chemical-hair-relaxers-making-a-comeback")!,
    getArticleBySlug(
      "rihanna-expands-her-empire-with-fenty-hair-launching-june-13th",
    )!,
  ];

  const trendingPicks = [
    getArticleBySlug("what-type-of-are-natural-you")!,
    getArticleBySlug(
      "are-there-cancer-causing-ingredients-in-our-braiding-hair",
    )!,
    getArticleBySlug("4-best-ways-to-moisturize-dry-natural-type-4-hair")!,
    getArticleBySlug(
      "rihanna-expands-her-empire-with-fenty-hair-launching-june-13th",
    )!,
  ];

  return (
    <main>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">{t("hairCareHubTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hairCarePicks.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6 uppercase">
          {t("beautyHubTitle")}
        </h2>
        <div className="max-w-2xl">
          <PostCard
            title={beautyPick.title}
            excerpt={beautyPick.excerpt}
            image={beautyPick.image}
            slug={beautyPick.slug}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">{t("hotTopicsHubTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hotTopicsPicks.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
              image={article.image}
              slug={article.slug}
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">{t("trendingPostsTitle")}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {trendingPicks.map((article) => (
            <PostCard
              key={article.slug}
              title={article.title}
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
