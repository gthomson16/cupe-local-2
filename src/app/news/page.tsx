import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from CUPE Local 2.",
};

const articles = [
  {
    title: "TTC Unions Standing Together",
    date: "February 28, 2026",
    category: "News",
    image: "/images/real/ttc-unions-standing-together.jpg",
    excerpt:
      "Today, leaders from CUPE Local 2, ATU Local 113, CUPE Local 470, CUPE Local 5089, and IAMAW Lodge 235 came together to strengthen coordination and plan our work together. Each union has its own members and priorities, but we share one clear belief: when workers stand together, we are stronger.",
    slug: "ttc-unions-standing-together",
  },
  {
    title: "Welcome to the CUPE Local 2 News Page",
    date: "February 22, 2026",
    category: "Announcement",
    image: null,
    excerpt:
      "Welcome to the official news page for CUPE Local 2, representing 700 workers at the Toronto Transit Commission. Bookmark this page and check back regularly. If you have questions or need to speak with a union representative, use the Contact Us page.",
    slug: "welcome-to-the-cupe-local-2-news-page",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Updates and announcements from CUPE Local 2"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md md:flex"
            >
              <div className="relative h-56 overflow-hidden bg-cupe-navy md:h-auto md:w-80 lg:w-96">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white">
                    <img src="/images/cupe-logo-hd.png" alt="" className="h-full w-full object-contain p-6" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-cupe-red/10 px-3 py-0.5 text-xs font-medium text-cupe-red">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-cupe-navy">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-cupe-red">
                    Read full article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
