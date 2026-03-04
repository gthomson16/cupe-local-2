import { Metadata } from "next";
import PageHero from "@/components/PageHero";

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
  },
  {
    title: "Employee & Family Assistance Program",
    description: "Information about the EFAP program available to all members and their families.",
    href: "https://cupelocal2.com/wp-content/uploads/2019/05/EFAP-Brochure.pdf",
    category: "Benefits",
  },
  {
    title: "By-Laws 2017",
    description: "The current by-laws governing CUPE Local 2 operations and procedures.",
    href: "https://cupelocal2.com/wp-content/uploads/2023/01/By-Laws-2017-Jan-19th-2023.pdf",
    category: "Governance",
  },
  {
    title: "Local 2 WSIB Facts",
    description: "Important information about Workplace Safety and Insurance Board claims and procedures.",
    href: "https://cupelocal2.com/wp-content/uploads/2023/02/Local-2-WSIB-Facts.pdf",
    category: "Safety",
  },
  {
    title: "Salary Continuance Form",
    description: "Complete and submit this form if you have missed time due to a workplace injury or illness while waiting for WSIB to process your claim. Members receive 100% pay for up to 30 days.",
    href: "https://cupelocal2.com/wp-content/uploads/2025/12/salary-continuance-form-local-2.pdf",
    category: "Forms",
  },
  {
    title: "CUPE Local 2 Insurance Discount",
    description: "Exclusive insurance discount program for members through ICD Insurance Brokers Ltd.",
    href: "https://cupelocal2.com/wp-content/uploads/2019/05/CUPE-ICD.pdf",
    category: "Benefits",
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
          {documents.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red transition-colors group-hover:bg-cupe-red group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[doc.category]}`}>
                  {doc.category}
                </span>
              </div>
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
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
