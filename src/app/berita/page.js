"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const berita = [
  {
    id: "1",
    judul: "Maulid Nabi Muhammad SAW",
    tanggal: "2026",
    kategori: "Keagamaan",
    ringkasan:
      "Peringatan Maulid Nabi menjadi momen untuk meneladani akhlak Rasulullah dan memperkuat nilai-nilai kebaikan dalam kehidupan sehari-hari.",
    gambar: "/berita1.jpg",
  },
  {
    id: "2",
    judul: "Hari Jadi Provinsi Jawa Tengah ke-81",
    tanggal: "2026",
    kategori: "Peringatan",
    ringkasan:
      "Mengenang perjalanan Jawa Tengah sekaligus menumbuhkan rasa bangga terhadap budaya dan perkembangan daerah.",
    gambar: "/berita2.jpg",
  },
  {
    id: "3",
    judul: "Dirgahayu Republik Indonesia ke-81",
    tanggal: "2026",
    kategori: "Peringatan",
    ringkasan:
      "Semangat kemerdekaan menjadi pengingat untuk menjaga persatuan, menghargai perjuangan, dan berkontribusi bagi bangsa.",
    gambar: "/berita3.jpg",
  },
  {
    id: "4",
    judul: "Selamat Hari Pramuka ke-65",
    tanggal: "2026",
    kategori: "Kesiswaan",
    ringkasan:
      "Kegiatan Pramuka mengajarkan kedisiplinan, kemandirian, kerja sama, serta kepedulian terhadap sesama.",
    gambar: "/berita4.jpg",
  },
  {
    id: "5",
    judul: "Selamat Purna Tugas",
    tanggal: "2026",
    kategori: "Sekolah",
    ringkasan:
      "Ungkapan terima kasih atas dedikasi dan pengabdian dalam mendukung pendidikan serta perkembangan sekolah.",
    gambar: "/berita5.jpg",
  },
  {
    id: "6",
    judul: "Sistem Penerimaan Murid Baru",
    tanggal: "2026",
    kategori: "Informasi",
    ringkasan:
      "Informasi bagi calon murid dan orang tua mengenai tahapan serta ketentuan penerimaan murid baru.",
    gambar: "/berita6.jpg",
  },
  {
    id: "7",
    judul: "Informasi Kelulusan",
    tanggal: "2026",
    kategori: "Informasi",
    ringkasan:
      "Informasi kelulusan untuk membantu siswa mengetahui pengumuman hasil akhir pendidikan.",
    gambar: "/berita7.jpg",
  },
  {
    id: "8",
    judul: "Upacara Masa Pengenalan Lingkungan Sekolah",
    tanggal: "2026",
    kategori: "Kesiswaan",
    ringkasan:
      "Penyambutan murid baru melalui kegiatan MPLS untuk mengenal lingkungan, warga, dan budaya sekolah.",
    gambar: "/berita8.jpg",
  },
  {
    id: "9",
    judul: "Selamat Hari Guru Nasional",
    tanggal: "2026",
    kategori: "Peringatan",
    ringkasan:
      "Apresiasi bagi para guru yang terus membimbing siswa untuk belajar, berkembang, dan meraih cita-cita.",
    gambar: "/berita9.jpg",
  },
  {
    id: "10",
    judul: "Menanamkan Nilai Integritas",
    tanggal: "2026",
    kategori: "Pendidikan",
    ringkasan:
      "Kejujuran, tanggung jawab, dan konsistensi menjadi bagian penting dalam membangun karakter siswa.",
    gambar: "/berita10.jpg",
  },
];

const kategoriList = [
  "Semua",
  "Keagamaan",
  "Peringatan",
  "Kesiswaan",
  "Sekolah",
  "Informasi",
  "Pendidikan",
];

export default function BeritaPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const beritaTampil =
    kategoriAktif === "Semua"
      ? berita
      : berita.filter((item) => item.kategori === kategoriAktif);

  return (
    <main className="overflow-hidden bg-stone-50 text-green-950">
      {/* HERO DENGAN FOTO DI KANAN */}
      <section className="relative overflow-hidden bg-green-950 px-6 py-12 text-white md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-green-700/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* TEKS DI KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-yellow-400" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                Kabar Sekolah
              </p>
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Cerita dari
              <span className="mt-2 block text-yellow-400">
                lingkungan sekolah.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-green-100 md:text-lg">
              Ada banyak hal menarik di sekolah. Temukan kabar kegiatan
              siswa, prestasi, dan informasi terbaru dari SMA Negeri 2 Sragen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#daftar-berita"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3.5 font-bold text-green-950 transition hover:bg-yellow-300"
              >
                Jelajahi berita
                <span aria-hidden="true">→</span>
              </motion.a>

              <span className="text-sm text-green-100">
                Kegiatan · Prestasi · Informasi
              </span>
            </div>
          </motion.div>

          {/* FOTO DI KANAN */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-yellow-400/40 md:-right-4 md:-top-4" />

            <div className="relative h-72 overflow-hidden rounded-2xl bg-green-900 sm:h-96 md:h-[420px]">
              <img
                src="/berita.jpg"
                alt="Kegiatan di lingkungan sekolah"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  SMA Negeri 2 Sragen
                </p>

                <p className="mt-2 max-w-sm text-xl font-bold leading-snug text-white md:text-2xl">
                  Ruang untuk belajar, bertumbuh, dan berprestasi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAFTAR BERITA */}
      <section
        id="daftar-berita"
        className="scroll-mt-20 bg-white px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
            Informasi Sekolah
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Kabar Terbaru Sekolah
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Simak berbagai kegiatan, informasi, dan momen penting yang
            berlangsung di SMA Negeri 2 Sragen.
          </p>
        </div>

        {/* FILTER KATEGORI */}
        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap justify-center gap-3">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setKategoriAktif(kategori)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                kategoriAktif === kategori
                  ? "border-green-950 bg-green-950 text-yellow-400"
                  : "border-stone-200 bg-stone-50 text-gray-600 hover:border-green-800 hover:text-green-900"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* KARTU BERITA */}
        <motion.div
          layout
          className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {beritaTampil.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link
                  href={`/berita/${item.id}`}
                  className="block h-full"
                  aria-label={`Baca berita ${item.judul}`}
                >
                  <div className="relative h-56 overflow-hidden bg-green-900">
                    <motion.img
                      src={item.gambar}
                      alt={item.judul}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-md bg-yellow-400 px-3 py-1 text-xs font-bold text-green-950">
                      {item.kategori}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-gray-500">
                      {item.tanggal}
                    </p>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-green-950 transition-colors group-hover:text-green-700">
                      {item.judul}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.ringkasan}
                    </p>

                    <div className="mt-5 border-t border-stone-200 pt-4 text-sm font-bold text-green-800">
                      Baca selengkapnya
                      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {beritaTampil.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            Belum ada berita dalam kategori ini.
          </p>
        )}
      </section>

      {/* BAGIAN PENUTUP */}
      <section className="bg-green-950 px-6 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            SMA Negeri 2 Sragen
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Selalu Ada Cerita di Sekolah
          </h2>

          <p className="mt-5 leading-8 text-green-100">
            Ikuti kegiatan dan informasi sekolah untuk mengetahui berbagai
            hal yang sedang berlangsung di lingkungan SMA Negeri 2 Sragen.
          </p>

          <a
            href="#daftar-berita"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-7 py-3 font-bold text-green-950 transition hover:bg-yellow-300"
          >
            Lihat Semua Berita
          </a>
        </div>
      </section>
    </main>
  );
}