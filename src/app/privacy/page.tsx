import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CUPE Local 2 collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-sm text-gray-500">
            Effective date: March 4, 2026
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Introduction
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            CUPE Local 2 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting the privacy of our members, supporters, and
            website visitors. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your personal information in accordance with
            the{" "}
            <em>
              Personal Information Protection and Electronic Documents Act
            </em>{" "}
            (PIPEDA) and applicable Ontario privacy legislation.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Information We Collect
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We collect personal information that you voluntarily provide through
            the following forms on our website:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Contact Form
              </span>{" "}
              — name, email address, phone number, message content
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Member Registration
              </span>{" "}
              — name, email address, phone number, badge number, workgroup, home
              address
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Complaint Form
              </span>{" "}
              — name, badge number, workgroup, description of complaint, file
              attachments
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Safety Concern Form
              </span>{" "}
              — name, badge number, workgroup, safety concern details, file
              attachments
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Scholarship Application
              </span>{" "}
              — name, badge number, email address, file attachments
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                By-law Suggestion Form
              </span>{" "}
              — name, badge number, suggestion content
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-cupe-navy">
                Solidarity Gift Request
              </span>{" "}
              — name, badge number, email address, home address
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            How We Use Your Information
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We use the personal information we collect for the following
            purposes:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              Responding to your inquiries and communicating with you about union
              matters
            </li>
            <li>Processing member registrations and maintaining membership records</li>
            <li>Investigating workplace complaints and safety concerns</li>
            <li>Administering scholarship applications</li>
            <li>Processing solidarity gift requests</li>
            <li>Reviewing and implementing by-law suggestions</li>
            <li>Fulfilling our obligations as your union representative</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Consent
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            By submitting your personal information through any of our forms,
            you consent to the collection, use, and disclosure of that
            information as described in this policy. You may withdraw your
            consent at any time by contacting us, subject to legal or
            contractual restrictions and reasonable notice.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Disclosure of Information
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              With CUPE National or other CUPE bodies when necessary for union
              representation
            </li>
            <li>
              With the Toronto Transit Commission when required for grievance or
              safety proceedings
            </li>
            <li>When required by law or legal process</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Data Security
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of electronic transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Data Retention
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We retain personal information only for as long as necessary to
            fulfill the purposes for which it was collected, or as required by
            law. When your information is no longer needed, it will be securely
            destroyed or anonymized.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Your Rights
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            Under PIPEDA, you have the right to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              Access the personal information we hold about you
            </li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Withdraw your consent to the collection, use, or disclosure of your information</li>
            <li>
              File a complaint with the Office of the Privacy Commissioner of
              Canada if you believe your privacy rights have been violated
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Changes to This Policy
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised effective date. We
            encourage you to review this policy periodically.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Contact Us
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            If you have questions or concerns about this Privacy Policy or our
            handling of your personal information, please contact us at:
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            <strong className="text-cupe-navy">CUPE Local 2 — Privacy Inquiries</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:president@cupelocal2.com"
              className="text-cupe-blue hover:underline"
            >
              president@cupelocal2.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
