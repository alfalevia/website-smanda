"use client";

import { useEffect, useState } from "react";

const photos = [
  {
    src: "/aula.jpg",
    title: "Aula SMA Negeri 2 Sragen",
  },
  {
    src: "/lapangan.jpg",
    title: "Lapangan Sekolah",
  },
  {
    src: "/upacara.jpg",
    title: "Kegiatan Upacara",
  },
  {
    src: "/paskibra.jpg",
    title: "Kegiatan Paskibra",
  },
  {
    src: "/pramuka.jpg",
    title: "Kegiatan Pramuka",
  },
  {
    src: "/masjid.jpg",
    title: "Masjid Sekolah",
  },
];

export default function SchoolGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="group relative h-[380px] overflow-hidden rounded-2xl">

      {/* FOTO */}
      <img
        src={photos[current].src}
        alt={photos[current].title}
        className="h-full w-full object-cover transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* NAMA FOTO */}
      <div className="absolute bottom-6 left-6">
        <p className="text-sm font-semibold text-white">
          {photos[current].title}
        </p>
      </div>

      {/* TOMBOL SEBELUMNYA */}
      <button
        onClick={previous}
        aria-label="Foto sebelumnya"
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
      >
        ‹
      </button>

      {/* TOMBOL BERIKUTNYA */}
      <button
        onClick={next}
        aria-label="Foto berikutnya"
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/70"
      >
        ›
      </button>

      {/* TITIK INDIKATOR */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setCurrent(index)}
            aria-label={`Tampilkan ${photo.title}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-7 bg-yellow-400"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </div>
  );
}