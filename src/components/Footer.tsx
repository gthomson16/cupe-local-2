import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cupe-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/cupe-logo-hd.png"
                alt="CUPE Local 2 Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-bold text-white">CUPE Local 2</div>
                <div className="text-sm text-gray-400">TTC Workers Union</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Canadian Union of Public Employees Local 2 — representing 700
              workers who install and maintain safety-critical systems at the
              Toronto Transit Commission.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/executives" className="hover:text-white transition-colors">Executives</Link></li>
              <li><Link href="/documents" className="hover:text-white transition-colors">Documents &amp; CBA</Link></li>
              <li><Link href="/forms" className="hover:text-white transition-colors">Forms</Link></li>
              <li><Link href="/registration" className="hover:text-white transition-colors">Member Registration</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://twitter.com/@CUPE_Local2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @CUPE_Local2
              </a>
              <a
                href="mailto:president@cupelocal2.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                president@cupelocal2.com
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/registration"
                className="inline-block rounded-md bg-cupe-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cupe-red-dark"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CUPE Local 2. All rights reserved. |{" "}
          <a href="https://cupe.ca" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            CUPE National
          </a>
        </div>
      </div>
    </footer>
  );
}
