import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "CUPE Local 2's commitment to accessibility and AODA compliance.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        subtitle="Our commitment to an inclusive and accessible website"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-cupe-navy">
            Our Commitment
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            CUPE Local 2 is committed to ensuring that our website is accessible
            to all people, including those with disabilities. We strive to meet
            or exceed the requirements of the{" "}
            <em>Accessibility for Ontarians with Disabilities Act, 2005</em>{" "}
            (AODA) and conform to the{" "}
            <em>Web Content Accessibility Guidelines</em> (WCAG) 2.0 Level AA.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            As a union that represents workers who build and maintain
            safety-critical infrastructure, we believe that equal access is a
            fundamental right — both in the workplace and online.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Accessibility Features
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            Our website includes the following accessibility features:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              <strong>Semantic HTML</strong> — proper use of headings,
              landmarks, and ARIA labels for screen reader compatibility
            </li>
            <li>
              <strong>Keyboard navigation</strong> — all interactive elements
              are accessible via keyboard
            </li>
            <li>
              <strong>Focus indicators</strong> — visible focus rings on all
              interactive elements
            </li>
            <li>
              <strong>Alt text</strong> — descriptive alternative text on all
              meaningful images
            </li>
            <li>
              <strong>Form labels</strong> — all form inputs are properly
              labelled for assistive technologies
            </li>
            <li>
              <strong>Color contrast</strong> — text and background color
              combinations meet WCAG 2.0 Level AA contrast ratios
            </li>
            <li>
              <strong>Responsive design</strong> — content adapts to different
              screen sizes, zoom levels, and orientations
            </li>
            <li>
              <strong>Readable fonts</strong> — clear, legible typography at
              accessible sizes
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Known Limitations
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            While we strive for full accessibility, some third-party content
            (such as embedded documents or external links) may not fully meet
            WCAG 2.0 Level AA standards. We are working to address these gaps
            and welcome your feedback.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-cupe-navy">
            Reporting an Issue
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <p className="mt-4 leading-relaxed text-gray-700">
            If you encounter any accessibility barriers on our website or have
            suggestions for improvement, please let us know. We take all
            feedback seriously and will make reasonable efforts to address issues
            promptly.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            <strong className="text-cupe-navy">
              CUPE Local 2 — Accessibility Feedback
            </strong>
            <br />
            Email:{" "}
            <a
              href="mailto:president@cupelocal2.com"
              className="text-cupe-blue hover:underline"
            >
              president@cupelocal2.com
            </a>
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Please include the URL of the page and a description of the issue
            you experienced so we can investigate and resolve it as quickly as
            possible.
          </p>
        </div>
      </section>
    </>
  );
}
