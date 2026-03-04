import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CUPE Local 2.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with your union representatives"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-cupe-navy">Send us a message</h2>
            <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
            <p className="mt-4 text-gray-600">
              For more information, call us or submit your contact information
              and we&apos;ll get back to you.
            </p>

            <form className="mt-8 space-y-5" action="https://cupelocal2.com/contact/" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cupe-navy">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cupe-navy">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-cupe-navy">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                    placeholder="(416) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cupe-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-lg bg-cupe-gray p-6">
              <h3 className="text-lg font-semibold text-cupe-navy">Quick Contact</h3>
              <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />

              <div className="mt-6 space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-cupe-navy">President</div>
                    <a href="mailto:president@cupelocal2.com" className="text-sm text-gray-600 hover:text-cupe-red">
                      president@cupelocal2.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-cupe-navy">Vice-President</div>
                    <a href="mailto:vicepresident@cupelocal2.com" className="text-sm text-gray-600 hover:text-cupe-red">
                      vicepresident@cupelocal2.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-cupe-navy">Health &amp; Safety</div>
                    <a href="mailto:health@cupelocal2.com" className="text-sm text-gray-600 hover:text-cupe-red">
                      health@cupelocal2.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cupe-red/10 text-cupe-red">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-cupe-navy">Follow Us</div>
                    <a href="https://twitter.com/@CUPE_Local2" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-cupe-red">
                      @CUPE_Local2
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-cupe-navy p-6 text-white">
              <h3 className="text-lg font-semibold">Need Immediate Help?</h3>
              <p className="mt-2 text-sm text-gray-300">
                If you have an urgent workplace safety issue, contact your
                Health and Safety Representative immediately.
              </p>
              <a
                href="mailto:health@cupelocal2.com"
                className="mt-4 inline-block rounded-md bg-cupe-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cupe-red-dark"
              >
                Contact H&amp;S Rep
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
