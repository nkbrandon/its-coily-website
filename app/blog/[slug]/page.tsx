import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import PostCard from "@/components/PostCard";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug, 3);

  return (
    <main>
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <img
            src="https://secure.gravatar.com/avatar/be047deee5d6db54031bbde64abdb00f164e1f9886a98bab38412503a3d651a9?s=96&d=mm&r=g"
            alt="It's Coily"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium text-gray-700">It&apos;s Coily</span>
          <span>&middot;</span>
          <span>{article.date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt={article.title}
          className="rounded-xl w-full object-cover mb-8"
        />
        <ArticleContent content={article.content} />

        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-indigo-950 mb-6">
              Posts You May Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <PostCard
                  key={r.slug}
                  title={r.title}
                  image={r.image}
                  slug={r.slug}
                  date={r.date}
                />
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold text-indigo-950 mb-2">
            Leave a Comment
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className="space-y-4 max-w-xl">
            <textarea
              placeholder="Type here.."
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Website"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <button
              type="button"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700"
            >
              Submit Comment
            </button>
            <p className="text-xs text-gray-400">
              Comments on this preview site are not stored or published.
            </p>
          </form>
        </section>
      </article>
      <Footer />
    </main>
  );
}
