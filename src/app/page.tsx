import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    title: "Collective Agreement",
    description: "CBA 2022–2026",
    href: "/documents",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Latest News",
    description: "Updates & announcements",
    href: "/news",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" />
      </svg>
    ),
  },
  {
    title: "File a Form",
    description: "Complaints, safety & more",
    href: "/forms",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "Contact Us",
    description: "Reach your union reps",
    href: "/contact",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const workgroups = [
  "Electricians",
  "Substation Electricians",
  "Radio Technicians",
  "Cable & Telephone Technicians",
  "Relay & Instrumentation Technicians",
  "Transit Control Technicians",
  "Signal Technicians",
  "Overhead Streetcar Linespersons",
  "Power Control Technicians",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cupe-navy">
        <div className="absolute inset-y-0 right-0 w-2/3">
          <Image
            src="/images/real/481176644_1093023835960034_6130416129899750364_n.jpg"
            alt="TTC workers maintaining subway tunnel infrastructure"
            fill
            className="object-cover object-right opacity-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cupe-navy via-cupe-navy/80 to-cupe-navy/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block rounded-full bg-cupe-red/20 px-4 py-1.5 text-sm font-medium text-red-300">
              700 Members Strong
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Toronto&apos;s Transit.{" "}
              <span className="text-cupe-red">Together.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              We are CUPE Local 2 — the skilled workers who install and maintain
              the safety-critical electrical, signal, and communication systems
              that keep the TTC running every day.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex items-center justify-center rounded-md bg-cupe-red px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-cupe-red-dark"
              >
                Register as a Member
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Bar */}
      <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:p-5"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red transition-colors group-hover:bg-cupe-red group-hover:text-white">
                {link.icon}
              </div>
              <h3 className="font-semibold text-cupe-navy">{link.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-cupe-navy sm:text-4xl">
              Who We Are
            </h2>
            <div className="mt-2 h-1 w-16 rounded bg-cupe-red" />
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Welcome to the Canadian Union of Public Employees (CUPE) Local 2,
              a union of 700 workers at the Toronto Transit Commission.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our members proudly install and maintain safety critical systems
              throughout the Subway, Streetcar and Bus Systems in Toronto.
            </p>
            <Link
              href="/executives"
              className="mt-6 inline-flex items-center gap-2 text-cupe-red font-semibold hover:underline"
            >
              Meet our leadership
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/real/overhead-crew.jpg"
              alt="CUPE Local 2 overhead crew maintaining streetcar lines in Toronto"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Workgroups Section */}
      <section className="bg-cupe-gray py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cupe-navy sm:text-4xl">
              Our Workgroups
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-cupe-red" />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our members work across nine specialized trades, keeping
              Toronto&apos;s transit system safe and running.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workgroups.map((group) => (
              <div
                key={group}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cupe-red text-xs font-bold text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-cupe-navy">{group}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-cupe-navy sm:text-4xl">
              Latest News
            </h2>
            <div className="mt-2 h-1 w-16 rounded bg-cupe-red" />
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-1 text-sm font-semibold text-cupe-red hover:underline sm:flex"
          >
            View all news
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="group overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-100 transition-shadow hover:shadow-lg">
            <div className="relative h-48 overflow-hidden bg-cupe-navy">
              <Image
                src="/images/real/ttc-unions-standing-together.jpg"
                alt="TTC Unions Standing Together"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500">February 28, 2026</div>
              <h3 className="mt-2 text-xl font-bold text-cupe-navy">
                TTC Unions Standing Together
              </h3>
              <p className="mt-2 text-gray-600">
                Leaders from CUPE Local 2, ATU Local 113, CUPE Local 470, CUPE
                Local 5089, and IAMAW Lodge 235 came together to strengthen
                coordination and plan our work together.
              </p>
              <Link
                href="/news"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cupe-red hover:underline"
              >
                Read more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
          <article className="group overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-100 transition-shadow hover:shadow-lg">
            <div className="relative h-48 overflow-hidden bg-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/cupe-logo-hd.png" alt="" className="h-full w-full object-contain p-6" />
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500">February 22, 2026</div>
              <h3 className="mt-2 text-xl font-bold text-cupe-navy">
                Welcome to the CUPE Local 2 News Page
              </h3>
              <p className="mt-2 text-gray-600">
                Welcome to the official news page for CUPE Local 2, representing
                700 workers at the Toronto Transit Commission. Bookmark this page
                and check back regularly.
              </p>
              <Link
                href="/news"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cupe-red hover:underline"
              >
                Read more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/news" className="text-sm font-semibold text-cupe-red hover:underline">
            View all news &rarr;
          </Link>
        </div>
      </section>

      {/* Insurance Discount Banner */}
      <section className="bg-cupe-navy">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white">
                CUPE Local 2 Insurance Discount
              </h2>
              <p className="mt-2 text-gray-300">
                Members are eligible for exclusive insurance discounts through
                ICD Insurance Brokers Ltd.
              </p>
            </div>
            <a
              href="/documents"
              className="shrink-0 rounded-md bg-cupe-red px-6 py-3 font-semibold text-white transition-colors hover:bg-cupe-red-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
