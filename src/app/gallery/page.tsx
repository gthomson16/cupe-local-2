import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { albums } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photo galleries from CUPE Local 2 events and activities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photos"
        subtitle="Memories from CUPE Local 2 events and celebrations"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, i) => (
            <AnimateIn key={album.slug} animation="fade-up" delay={Math.min(i * 75, 300)}>
              <Link
                href={`/gallery/${album.slug}`}
                className="group relative block cursor-pointer overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-cupe-navy">
                  <Image
                    src={`/images/real/gallery/${album.cover}`}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {album.images.length} photos
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-sm font-medium text-white/70">{album.year}</div>
                    <h3 className="text-lg font-bold text-white">{album.title}</h3>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
