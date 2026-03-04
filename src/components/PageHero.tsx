import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-56 overflow-hidden bg-cupe-navy sm:h-64 md:h-72">
      <div className="absolute inset-y-0 right-0 w-3/5">
        <Image
          src="/images/real/streetcar.jpg"
          alt=""
          fill
          className="object-cover object-right opacity-60 [mask-image:linear-gradient(to_right,transparent,black_40%)]"
          sizes="50vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cupe-navy via-cupe-navy/70 to-transparent" />
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8">
        <div>
          <h1 className="animate-fade-in-up text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="animate-fade-in-up text-lg text-gray-300 [animation-delay:150ms]" style={{ marginTop: 8 }}>{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
