import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-56 overflow-hidden bg-cupe-navy sm:h-64 md:h-72">
      <div className="absolute inset-y-0 right-0 w-2/3">
        <Image
          src="/images/real/gallery/TTC-ServiceImprove Reliability-Nov2019-1447E_1300X480.jpg"
          alt=""
          fill
          className="object-cover object-[center_75%] opacity-75"
          sizes="66vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cupe-navy via-cupe-navy/80 to-cupe-navy/60" />
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-lg text-gray-300">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
