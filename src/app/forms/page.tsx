import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FormsTabbed from "@/components/FormsTabbed";

export const metadata: Metadata = {
  title: "Forms",
  description: "Submit complaints, safety concerns, scholarship applications, and other forms.",
};

export default function FormsPage() {
  return (
    <>
      <PageHero
        title="Forms"
        subtitle="Submit complaints, safety concerns, and other requests"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FormsTabbed />

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
