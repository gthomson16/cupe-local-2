import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/news";
import AnimateIn from "@/components/AnimateIn";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = articles.find((a) => a.slug === slug);
    if (!article) return { title: "Not Found" };
    return {
      title: article.title,
      description: article.excerpt,
    };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero image or navy header */}
      <section className="relative h-56 overflow-hidden bg-cupe-navy sm:h-64 md:h-72">
        <div className="absolute inset-y-0 right-0 w-2/3">
          <Image
            src="/images/real/gallery/TTC-ServiceImprove Reliability-Nov2019-1447E_1300X480.jpg"
            alt=""
            fill
            className="object-cover object-[center_75%] opacity-75"
            sizes="66vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cupe-navy via-cupe-navy/80 to-cupe-navy/60" />
        <div className="relative mx-auto flex h-full max-w-4xl items-end px-4 pb-10 sm:px-6 lg:px-8">
          <div>
            <div className="animate-fade-in-up mb-3 flex items-center gap-3">
              <span className="rounded-full bg-cupe-red/20 px-3 py-0.5 text-xs font-medium text-red-300">
                {article.category}
              </span>
              <span className="text-sm text-gray-300">{article.date}</span>
            </div>
            <h1 className="animate-fade-in-up text-3xl font-bold text-white [animation-delay:100ms] sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <div className="mb-8 overflow-hidden rounded-lg">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            ) : (
              <div className="flex items-center justify-center bg-white py-12">
                <img src="/images/cupe-logo-hd.png" alt="CUPE Local 2" className="max-h-80 object-contain" />
              </div>
            )}
          </div>
          <article className="prose prose-lg max-w-none text-gray-700">
            {article.body.map((paragraph, i) => (
              <p key={i} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </article>
        </AnimateIn>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cupe-red hover:underline"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all news
          </Link>
        </div>
      </section>
    </>
  );
}
