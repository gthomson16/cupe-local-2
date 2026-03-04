import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Forms",
  description: "Submit complaints, safety concerns, scholarship applications, and other forms.",
};

const forms = [
  {
    title: "Complaints",
    description: "File a formal complaint regarding workplace issues, contract violations, or grievances. Your submission is confidential.",
    href: "https://cupelocal2.com/complaints/",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    color: "bg-rose-50 text-rose-600 ring-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    title: "Safety Concerns",
    description: "Report safety hazards, unsafe working conditions, or near-miss incidents. All reports are taken seriously.",
    href: "https://cupelocal2.com/safety-concerns/",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600 ring-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    title: "Scholarship Application",
    description: "Apply for CUPE Local 2 scholarships available to members and their dependents for educational purposes.",
    href: "https://cupelocal2.com/scholarship-form/",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600 ring-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    title: "By-law Suggestion",
    description: "Propose changes or amendments to the CUPE Local 2 by-laws. Your input helps shape our union governance.",
    href: "https://cupelocal2.com/bylaw-form/",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600 ring-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    title: "Solidarity Gift Suggestion",
    description: "Suggest ideas for solidarity gifts or donations to support other unions, causes, and community organizations.",
    href: "https://cupelocal2.com/solidarity-gift/",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    iconBg: "bg-emerald-100",
  },
];

export default function FormsPage() {
  return (
    <>
      <PageHero
        title="Forms"
        subtitle="Submit complaints, safety concerns, and other requests"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((form) => (
            <a
              key={form.title}
              href={form.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-lg p-6 ring-1 transition-all hover:-translate-y-0.5 hover:shadow-lg ${form.color}`}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${form.iconBg}`}>
                {form.icon}
              </div>
              <h3 className="text-lg font-bold text-cupe-navy">{form.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">{form.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cupe-navy">
                Open form
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-cupe-gray p-6 text-center sm:p-8">
          <h3 className="text-lg font-semibold text-cupe-navy">
            Need help with a form?
          </h3>
          <p className="mt-2 text-gray-600">
            Contact your union representative or reach out to us directly.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-cupe-red px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cupe-red-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
