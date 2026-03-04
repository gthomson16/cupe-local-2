export interface Article {
  title: string;
  date: string;
  category: string;
  image: string | null;
  excerpt: string;
  slug: string;
  body: string[];
}

export const articles: Article[] = [
  {
    title: "TTC Unions Standing Together",
    date: "February 28, 2026",
    category: "News",
    image: "/images/real/ttc-unions-standing-together.jpg",
    excerpt:
      "Today, leaders from CUPE Local 2, ATU Local 113, CUPE Local 470, CUPE Local 5089, and IAMAW Lodge 235 came together to strengthen coordination and plan our work together. Each union has its own members and priorities, but we share one clear belief: when workers stand together, we are stronger.",
    slug: "ttc-unions-standing-together",
    body: [
      "Today, leaders from CUPE Local 2, ATU Local 113, CUPE Local 470, CUPE Local 5089, and IAMAW Lodge 235 came together to strengthen coordination and plan our work together.",
      "Each union has its own members and priorities, but we share one clear belief: when workers stand together, we are stronger.",
      "This meeting was about unity, solidarity, and action. It was about building stronger coordination so we can better protect workers, improve working conditions, and keep pushing for fairness and respect on the job.",
      "Transit workers keep Toronto moving every day. That work matters, and the people doing it matter.",
      "We are committed to continuing this collaboration and turning solidarity into real results.",
      "In solidarity,\nCUPE Local 2",
    ],
  },
  {
    title: "Welcome to the CUPE Local 2 News Page",
    date: "February 22, 2026",
    category: "Announcement",
    image: null,
    excerpt:
      "Welcome to the official news page for CUPE Local 2, representing 700 workers at the Toronto Transit Commission. Bookmark this page and check back regularly. If you have questions or need to speak with a union representative, use the Contact Us page.",
    slug: "welcome-to-the-cupe-local-2-news-page",
    body: [
      "Welcome to the official news page for CUPE Local 2, representing 700 workers at the Toronto Transit Commission.",
      "Bookmark this page and check back regularly. If you have questions or need to speak with a union representative, use the Contact Us page.",
      "In solidarity,\nCUPE Local 2 Executive",
    ],
  },
];
