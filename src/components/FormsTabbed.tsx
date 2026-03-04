"use client";

import { useState } from "react";

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

const tabs = [
  { key: "complaint", label: "Complaint" },
  { key: "safety", label: "Safety Concern" },
  { key: "scholarship", label: "Scholarship" },
  { key: "bylaw", label: "By-law Suggestion" },
  { key: "solidarity", label: "Solidarity Gift" },
];

const inputClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red";
const labelClass = "block text-sm font-medium text-cupe-navy";
const textareaClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red";
const selectClass =
  "mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red";
const fileClass =
  "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-cupe-red/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-cupe-red hover:file:bg-cupe-red/20";

function Required() {
  return <span className="text-cupe-red">*</span>;
}

function ComplaintForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-first" className={labelClass}>
            First Name <Required />
          </label>
          <input type="text" id="c-first" className={inputClass} placeholder="First" required />
        </div>
        <div>
          <label htmlFor="c-last" className={labelClass}>
            Last Name <Required />
          </label>
          <input type="text" id="c-last" className={inputClass} placeholder="Last" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-mobile" className={labelClass}>
            Mobile #
          </label>
          <input type="tel" id="c-mobile" className={inputClass} placeholder="Cell phone number" />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email
          </label>
          <input type="email" id="c-email" className={inputClass} placeholder="Personal email address" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-badge" className={labelClass}>
            Badge Number <Required />
          </label>
          <input type="text" id="c-badge" className={inputClass} placeholder="Badge" required />
        </div>
        <div>
          <label htmlFor="c-workgroup" className={labelClass}>
            Workgroup <Required />
          </label>
          <select id="c-workgroup" className={selectClass} required>
            <option value="">Select workgroup</option>
            {workgroups.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </div>
      </div>
      <fieldset>
        <legend className={labelClass}>Is this complaint as a result of discipline?</legend>
        <div className="mt-2 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="radio" name="discipline" value="yes" className="h-4 w-4 border-gray-300 text-cupe-red focus:ring-cupe-red" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="radio" name="discipline" value="no" defaultChecked className="h-4 w-4 border-gray-300 text-cupe-red focus:ring-cupe-red" />
            No
          </label>
        </div>
      </fieldset>
      <div>
        <label htmlFor="c-what" className={labelClass}>
          What <Required />
        </label>
        <textarea id="c-what" rows={3} className={textareaClass} placeholder="Please describe your complaint, i.e. what happened" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-when" className={labelClass}>
            When
          </label>
          <input type="date" id="c-when" className={inputClass} />
          <p className="mt-1 text-xs text-gray-500">Enter a date if applicable</p>
        </div>
        <div>
          <label htmlFor="c-time" className={labelClass}>
            Time
          </label>
          <input type="time" id="c-time" className={inputClass} />
          <p className="mt-1 text-xs text-gray-500">Enter a time if applicable</p>
        </div>
      </div>
      <div>
        <label htmlFor="c-where" className={labelClass}>
          Where
        </label>
        <textarea id="c-where" rows={2} className={textareaClass} placeholder="Describe a location if applicable" />
      </div>
      <div>
        <label htmlFor="c-why" className={labelClass}>
          Why (CBA Violation)
        </label>
        <textarea id="c-why" rows={2} className={textareaClass} placeholder="Can you identify a violation of the Collective Agreement" />
      </div>
      <div>
        <label htmlFor="c-want" className={labelClass}>
          Want <Required />
        </label>
        <textarea id="c-want" rows={2} className={textareaClass} placeholder="What would address this complaint?" required />
      </div>
      <div>
        <label htmlFor="c-attach" className={labelClass}>
          Attachments
        </label>
        <input type="file" id="c-attach" multiple className={fileClass} />
      </div>
      <button type="submit" className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2">
        Submit Complaint
      </button>
    </form>
  );
}

function SafetyConcernForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-first" className={labelClass}>
            First Name <Required />
          </label>
          <input type="text" id="s-first" className={inputClass} placeholder="First" required />
        </div>
        <div>
          <label htmlFor="s-last" className={labelClass}>
            Last Name <Required />
          </label>
          <input type="text" id="s-last" className={inputClass} placeholder="Last" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-badge" className={labelClass}>
            Badge # <Required />
          </label>
          <input type="text" id="s-badge" className={inputClass} placeholder="Badge #" required />
        </div>
        <div>
          <label htmlFor="s-email" className={labelClass}>
            Email <Required />
          </label>
          <input type="email" id="s-email" className={inputClass} required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-mobile" className={labelClass}>
            Mobile #
          </label>
          <input type="tel" id="s-mobile" className={inputClass} />
        </div>
        <div>
          <label htmlFor="s-workgroup" className={labelClass}>
            Workgroup <Required />
          </label>
          <select id="s-workgroup" className={selectClass} required>
            <option value="">Select workgroup</option>
            {workgroups.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="s-concern" className={labelClass}>
          Safety Concern <Required />
        </label>
        <textarea id="s-concern" rows={4} className={textareaClass} placeholder="Please describe your safety concern" required />
      </div>
      <div>
        <label htmlFor="s-rec" className={labelClass}>
          Recommendation
        </label>
        <textarea id="s-rec" rows={3} className={textareaClass} placeholder="Please indicate a recommendation to resolve this if applicable" />
      </div>
      <div>
        <label htmlFor="s-attach" className={labelClass}>
          Attachments
        </label>
        <input type="file" id="s-attach" multiple className={fileClass} />
      </div>
      <button type="submit" className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2">
        Submit Safety Concern
      </button>
    </form>
  );
}

function ScholarshipForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sc-member" className={labelClass}>
            Member&apos;s Name <Required />
          </label>
          <input type="text" id="sc-member" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="sc-badge" className={labelClass}>
            Badge Number <Required />
          </label>
          <input type="text" id="sc-badge" className={inputClass} required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sc-applicant" className={labelClass}>
            Applicant&apos;s Name <Required />
          </label>
          <input type="text" id="sc-applicant" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="sc-age" className={labelClass}>
            Age <Required />
          </label>
          <input type="number" id="sc-age" className={inputClass} required />
        </div>
      </div>
      <div>
        <label htmlFor="sc-addr1" className={labelClass}>
          Home Address <Required />
        </label>
        <input type="text" id="sc-addr1" className={`${inputClass}`} placeholder="Address Line 1" required />
        <input type="text" id="sc-addr2" className={`${inputClass} mt-2`} placeholder="Address Line 2" />
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          <input type="text" id="sc-city" className={inputClass} placeholder="City" required />
          <input type="text" id="sc-province" className={inputClass} placeholder="Province" required />
          <input type="text" id="sc-postal" className={inputClass} placeholder="Postal Code" required />
        </div>
      </div>
      <div>
        <label htmlFor="sc-phone" className={labelClass}>
          Phone <Required />
        </label>
        <input type="tel" id="sc-phone" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="sc-enrolment" className={labelClass}>
          Proof of Enrolment <Required />
        </label>
        <input type="file" id="sc-enrolment" className={fileClass} required />
        <p className="mt-1 text-xs text-gray-500">Upload proof of enrolment document</p>
      </div>
      <button type="submit" className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2">
        Submit Application
      </button>
    </form>
  );
}

function BylawForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b-first" className={labelClass}>
            First Name <Required />
          </label>
          <input type="text" id="b-first" className={inputClass} placeholder="First" required />
        </div>
        <div>
          <label htmlFor="b-last" className={labelClass}>
            Last Name <Required />
          </label>
          <input type="text" id="b-last" className={inputClass} placeholder="Last" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="b-badge" className={labelClass}>
            Badge # <Required />
          </label>
          <input type="text" id="b-badge" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="b-email" className={labelClass}>
            Email
          </label>
          <input type="email" id="b-email" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="b-suggestion" className={labelClass}>
          What is your suggestion? <Required />
        </label>
        <textarea id="b-suggestion" rows={5} className={textareaClass} required />
      </div>
      <button type="submit" className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2">
        Submit Suggestion
      </button>
    </form>
  );
}

function SolidarityGiftForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sg-first" className={labelClass}>
            First Name <Required />
          </label>
          <input type="text" id="sg-first" className={inputClass} placeholder="First" required />
        </div>
        <div>
          <label htmlFor="sg-last" className={labelClass}>
            Last Name <Required />
          </label>
          <input type="text" id="sg-last" className={inputClass} placeholder="Last" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sg-badge" className={labelClass}>
            Badge # <Required />
          </label>
          <input type="text" id="sg-badge" className={inputClass} required />
        </div>
        <div>
          <label htmlFor="sg-email" className={labelClass}>
            Email <Required />
          </label>
          <input type="email" id="sg-email" className={inputClass} required />
        </div>
      </div>
      <div>
        <label htmlFor="sg-phone" className={labelClass}>
          Phone <Required />
        </label>
        <input type="tel" id="sg-phone" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="sg-suggestion" className={labelClass}>
          Suggestion <Required />
        </label>
        <textarea id="sg-suggestion" rows={4} className={textareaClass} placeholder="Please include details about item and any online links (maximum cost $250)" required />
      </div>
      <div>
        <label htmlFor="sg-photo" className={labelClass}>
          Picture Upload
        </label>
        <input type="file" id="sg-photo" accept="image/*" className={fileClass} />
      </div>
      <button type="submit" className="rounded-md bg-cupe-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2">
        Submit Suggestion
      </button>
    </form>
  );
}

const formComponents: Record<string, React.ReactNode> = {
  complaint: <ComplaintForm />,
  safety: <SafetyConcernForm />,
  scholarship: <ScholarshipForm />,
  bylaw: <BylawForm />,
  solidarity: <SolidarityGiftForm />,
};

const formDescriptions: Record<string, string> = {
  complaint: "File a formal complaint regarding workplace issues, contract violations, or grievances. Your submission is confidential.",
  safety: "Report safety hazards, unsafe working conditions, or near-miss incidents. All reports are taken seriously.",
  scholarship: "Apply for CUPE Local 2 Memorial Scholarships available to members and their dependents for educational purposes.",
  bylaw: "Propose changes or amendments to the CUPE Local 2 by-laws. Your input helps shape our union governance.",
  solidarity: "Suggest ideas for solidarity gifts or donations to support other unions, causes, and community organizations.",
};

export default function FormsTabbed() {
  const [active, setActive] = useState("complaint");

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-1 overflow-x-auto" aria-label="Form tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                active === tab.key
                  ? "border-cupe-red text-cupe-red"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-6 text-gray-600">{formDescriptions[active]}</p>
        {formComponents[active]}
      </div>
    </div>
  );
}
