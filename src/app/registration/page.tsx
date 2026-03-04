import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Member Registration",
  description: "Register as a CUPE Local 2 member.",
};

const workgroups = [
  "Radio",
  "Electrical",
  "Signals",
  "Substations",
  "Power Control",
  "Cable Shop",
  "Overhead",
  "Relay Shop",
  "TCT/SCADA",
  "M&M",
];

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Member Registration"
        subtitle="Register with CUPE Local 2 to stay connected"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-cupe-navy">
              Register with Local 2
            </h2>
            <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
            <p className="mt-3 text-gray-600">
              Fill out the form below to register as a member. Fields marked with
              <span className="text-cupe-red"> *</span> are required.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-cupe-navy">
                  First Name <span className="text-cupe-red">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-cupe-navy">
                  Last Name <span className="text-cupe-red">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
            </div>

            <div>
              <label htmlFor="regEmail" className="block text-sm font-medium text-cupe-navy">
                Email Address <span className="text-cupe-red">*</span>
              </label>
              <input
                type="email"
                id="regEmail"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="badge" className="block text-sm font-medium text-cupe-navy">
                  Badge Number <span className="text-cupe-red">*</span>
                </label>
                <input
                  type="text"
                  id="badge"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
              <div>
                <label htmlFor="regPhone" className="block text-sm font-medium text-cupe-navy">
                  Phone Number <span className="text-cupe-red">*</span>
                </label>
                <input
                  type="tel"
                  id="regPhone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
            </div>

            <div>
              <label htmlFor="workgroup" className="block text-sm font-medium text-cupe-navy">
                Workgroup <span className="text-cupe-red">*</span>
              </label>
              <select
                id="workgroup"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
              >
                <option value="">Select your workgroup</option>
                {workgroups.map((wg) => (
                  <option key={wg} value={wg}>{wg}</option>
                ))}
              </select>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <h3 className="text-sm font-semibold text-cupe-navy">
                Mailing Address <span className="text-gray-400 font-normal">(Optional)</span>
              </h3>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-cupe-navy">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-cupe-navy">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-cupe-navy">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  defaultValue="Ontario"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
              <div>
                <label htmlFor="postal" className="block text-sm font-medium text-cupe-navy">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-cupe-red focus:outline-none focus:ring-1 focus:ring-cupe-red"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-md bg-cupe-red px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cupe-red-dark focus:outline-none focus:ring-2 focus:ring-cupe-red focus:ring-offset-2 sm:w-auto"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
