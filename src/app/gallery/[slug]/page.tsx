import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { albums } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) return { title: "Album Not Found" };
  return {
    title: album.title,
    description: `Photos from ${album.title} — CUPE Local 2`,
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) notFound();

  return (
    <>
      <section className="bg-cupe-navy">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Photos
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {album.title}
          </h1>
          <p className="mt-1 text-gray-400">
            {album.year} &middot; {album.images.length} photos
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Lightbox
          images={album.images}
          basePath="/images/real/gallery"
          altPrefix={album.title}
        />
      </section>
    </>
  );
}
