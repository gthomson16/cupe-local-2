import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Executives",
  description: "Meet the elected leadership of CUPE Local 2.",
};

const tableOfficers = [
  { role: "President", name: "Sumit Guleria", email: "president@cupelocal2.com" },
  { role: "Vice-President", name: "Domenic Palumbo", email: "vicepresident@cupelocal2.com" },
  { role: "Treasurer", name: "Giovanni Maltese", email: "treasurer@cupelocal2.com" },
  { role: "Health and Safety Rep", name: "Graham Whicher", email: "health@cupelocal2.com" },
  { role: "Recording Secretary", name: "Gianfranco Garcia", email: "secretary@cupelocal2.com" },
];

const executiveBoard = [
  { role: "Electrical", name: "Bill Pappas", email: "electrical@cupelocal2.com" },
  { role: "Substations", name: "Michael Lee", email: "substations@cupelocal2.com" },
  { role: "Signals", name: "Richard Camilleri", email: "signals@cupelocal2.com" },
  { role: "Sergeant at Arms", name: "Tony Carano", email: "sergeant@cupelocal2.com" },
  { role: "Overhead", name: "Don Robertson", email: "overhead@cupelocal2.com" },
  { role: "Power Control", name: "Jon Harris", email: "powercontrol@cupelocal2.com" },
  { role: "Cable Crew", name: "Vishal Champaneri", email: "cable@cupelocal2.com" },
  { role: "Electrical", name: "Sajid Bala", email: "electrical@cupelocal2.com" },
  { role: "TCT/Scada", name: "Kingsley Atkinson", email: "tct.scada@cupelocal2.com" },
  { role: "Signals", name: "Enrique Alvarado", email: "signals@cupelocal2.com" },
  { role: "Radio Shop", name: "Giuseppe Benvenuto", email: "radioshop@cupelocal2.com" },
];

function PersonCard({ role, name, email }: { role: string; name: string; email: string }) {
  return (
    <div className="group rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cupe-navy text-lg font-bold text-white">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-cupe-red">
        {role}
      </div>
      <div className="mt-1 text-lg font-semibold text-cupe-navy">{name}</div>
      <a
        href={`mailto:${email}`}
        className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-cupe-red"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        {email}
      </a>
    </div>
  );
}

export default function ExecutivesPage() {
  return (
    <>
      <PageHero
        title="Executives"
        subtitle="Meet the elected leadership of CUPE Local 2"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-cupe-navy">Table Officers</h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tableOfficers.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-cupe-navy">Executive Board</h2>
          <div className="mt-2 h-1 w-12 rounded bg-cupe-red" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {executiveBoard.map((person, i) => (
              <PersonCard key={`${person.name}-${i}`} {...person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
