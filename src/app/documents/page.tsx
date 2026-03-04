import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Documents",
  description: "Important documents, agreements, and resources for CUPE Local 2 members.",
};

const documents = [
  {
    title: "CBA 2022–2026",
    description: "The current Collective Bargaining Agreement between CUPE Local 2 and the Toronto Transit Commission.",
    href: "https://cupelocal2.com/wp-content/uploads/2025/07/CBA-2022-2026.pdf",
    category: "Agreement",
    thumbnail: "/images/real/documents/cba.png",
  },
  {
    title: "Employee & Family Assistance Program",
    description: "Information about the EFAP program available to all members and their families.",
    href: "https://cupelocal2.com/wp-content/uploads/2019/05/EFAP-Brochure.pdf",
    category: "Benefits",
    thumbnail: "/images/real/documents/efap.png",
  },
  {
    title: "By-Laws 2017",
    description: "The current by-laws governing CUPE Local 2 operations and procedures.",
    href: "https://cupelocal2.com/wp-content/uploads/2023/01/By-Laws-2017-Jan-19th-2023.pdf",
    category: "Governance",
    thumbnail: "/images/real/documents/bylaws.png",
  },
  {
    title: "Local 2 WSIB Facts",
    description: "Important information about Workplace Safety and Insurance Board claims and procedures.",
    href: "https://cupelocal2.com/wp-content/uploads/2023/02/Local-2-WSIB-Facts.pdf",
    category: "Safety",
    thumbnail: "/images/real/documents/wsib.png",
  },
  {
    title: "Salary Continuance Form",
    description: "Complete and submit this form if you have missed time due to a workplace injury or illness while waiting for WSIB to process your claim. Members receive 100% pay for up to 30 days.",
    href: "https://cupelocal2.com/wp-content/uploads/2025/12/salary-continuance-form-local-2.pdf",
    category: "Forms",
    thumbnail: "/images/real/documents/salary.png",
  },
  {
    title: "CUPE Local 2 Insurance Discount",
    description: "Exclusive insurance discount program for members through ICD Insurance Brokers Ltd.",
    href: "https://cupelocal2.com/wp-content/uploads/2019/05/CUPE-ICD.pdf",
    category: "Benefits",
    thumbnail: "/images/real/documents/insurance.png",
  },
];

const categoryColors: Record<string, string> = {
  Agreement: "bg-blue-100 text-blue-700",
  Benefits: "bg-green-100 text-green-700",
  Governance: "bg-purple-100 text-purple-700",
  Safety: "bg-amber-100 text-amber-700",
  Forms: "bg-rose-100 text-rose-700",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        title="Documents"
        subtitle="Important resources for CUPE Local 2 members"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, i) => (
            <AnimateIn key={doc.title} animation="fade-up" delay={Math.min(i * 75, 300)}>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={doc.thumbnail}
                    alt={`${doc.title} cover page`}
                    fill
                    className="object-cover object-top transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute right-2 top-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[doc.category]}`}>
                      {doc.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-cupe-navy group-hover:text-cupe-red">
                    {doc.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-500">{doc.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-cupe-red">
                    Download PDF
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
