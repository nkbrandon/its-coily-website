"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { articles } from "@/lib/articles";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const results = query
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query),
      )
    : [];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-2">
        Search results
      </h1>
      <p className="text-gray-600 mb-10">
        {query
          ? 'Showing results for "' + query + '"'
          : "Type something to search."}
      </p>

      {query && results.length === 0 && (
        <p className="text-gray-500">No posts found.</p>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {results.map((article) => (
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
    </section>
  );
}

export default function SearchPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={null}>
        <SearchContent />
      </Suspense>
      <Footer />
    </main>
  );
}
