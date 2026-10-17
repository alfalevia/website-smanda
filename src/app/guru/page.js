
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const daftarGuru = [
  { nama: "Budi Santoso, S.Pd.", mapel: "Bahasa Indonesia" },
  { nama: "Siti Rahmawati, S.Pd.", mapel: "Matematika" },
  { nama: "Agus Setiawan, S.Pd.", mapel: "Bahasa Inggris" },
  { nama: "Dewi Lestari, S.Pd.", mapel: "Biologi" },
  { nama: "Rina Wulandari, S.Pd.", mapel: "Fisika" },
  { nama: "Hendra Pratama, S.Pd.", mapel: "Kimia" },
  { nama: "Nina Kurniasih, S.Pd.", mapel: "Sejarah" },
  { nama: "Eko Purnomo, S.Pd.", mapel: "Geografi" },
  { nama: "Sri Handayani, S.Pd.", mapel: "Ekonomi" },
  { nama: "Agung Nugroho, S.Pd.", mapel: "Sosiologi" },
  { nama: "Fitri Anggraini, S.Pd.", mapel: "Pendidikan Pancasila" },
  { nama: "Dimas Saputra, S.Pd.I.", mapel: "Pendidikan Agama" },
  { nama: "Yuni Astuti, S.Pd.", mapel: "PJOK" },
  { nama: "Rizky Firmansyah, S.Kom.", mapel: "Informatika" },
  { nama: "Lilis Suryani, S.Sn.", mapel: "Seni Budaya" },
  { nama: "Wahyu Kuncoro, S.Pd.", mapel: "Bahasa Jawa" },
  { nama: "Maya Puspitasari, S.Pd.", mapel: "Matematika" },
  { nama: "Andi Wijaya, S.Pd.", mapel: "Bahasa Inggris" },
  { nama: "Nanda Permata, S.Pd.", mapel: "Fisika" },
  { nama: "Teguh Prakoso, S.Pd.", mapel: "Biologi" },
].map((guru, index) => ({
  ...guru,
  foto: `/${index + 1}.jpg`,
}));

function AvatarGuru({ guru, besar = false }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-green-100 ${
        besar ? "h-44 w-44" : "h-[76px] w-[76px]"
      }`}
    >
      <img
        src={guru.foto}
        alt={`Foto ${guru.nama}`}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/logo.jpg";
        }}
      />
    </div>
  );
}

export default function GuruPage() {
  const [guruTerpilih, setGuruTerpilih] = useState(null);

  return (
    <main className="min-h-screen bg-[#f7f7f2]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#073923] px-6 pb-14 pt-36 text-white md:px-12 md:pb-16 md:pt-40">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 md:text-sm">
              SMA Negeri 2 Sragen
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Mengenal para guru,
              <span className="block text-yellow-400">
                inspirasi masa depan.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-green-100/90 md:text-lg">
              Sosok pendidik yang berbagi ilmu, membimbing langkah,
              dan menemani siswa tumbuh menjadi generasi yang berprestasi.
            </p>

            <motion.a
              href="#daftar-guru"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-green-950 transition hover:bg-yellow-300"
            >
              Lihat profil guru <span>↓</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="ml-auto max-w-xs rounded-2xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-100">Tim pendidik</span>
                <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-green-950">
                  S.M.A.R.T
                </span>
              </div>

              <p className="mt-8 text-6xl font-bold text-yellow-400">20</p>
              <p className="mt-2 text-lg font-semibold">Profil guru</p>
              <p className="mt-3 text-sm leading-6 text-green-100/75">
                Bersama membangun lingkungan belajar yang positif,
                aktif, dan inspiratif.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAFTAR GURU */}
      <section
        id="daftar-guru"
        className="scroll-mt-8 px-6 py-14 md:px-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Tenaga pendidik
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#123c29] md:text-4xl">
                Kenali guru kami
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
                Pilih salah satu profil untuk melihat informasi guru
                lebih dekat.
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-900">
              {daftarGuru.length} profil
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {daftarGuru.map((guru, index) => (
              <motion.button
                key={guru.nama}
                type="button"
                onClick={() => setGuruTerpilih(guru)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.06,
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Lihat profil ${guru.nama}`}
                className="group w-full rounded-xl border border-gray-200/80 bg-white p-5 text-left transition-colors hover:border-yellow-400 hover:shadow-lg hover:shadow-green-950/5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <div className="flex items-center gap-4">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <AvatarGuru guru={guru} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Pendidik {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="break-words text-sm font-bold leading-5 text-gray-900 transition-colors group-hover:text-green-800 md:text-base">
                      {guru.nama}
                    </h3>
                  </div>
                </div>

                <div className="my-5 h-px bg-gray-100" />

                <p className="text-xs text-gray-500">Mata pelajaran</p>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#174d32]">
                    {guru.mapel}
                  </p>
                  <span className="text-sm text-amber-600 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP PROFIL GURU */}
      <AnimatePresence>
        {guruTerpilih && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGuruTerpilih(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Profil ${guruTerpilih.nama}`}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl bg-[#fdfdf9] p-7 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setGuruTerpilih(null)}
                aria-label="Tutup profil"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-yellow-100 hover:text-green-950"
              >
                ×
              </button>

              <div className="mt-4 flex justify-center">
                <AvatarGuru guru={guruTerpilih} besar />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                Profil pendidik
              </p>

              <h2 className="mt-2 text-xl font-bold text-green-950">
                {guruTerpilih.nama}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Guru Mata Pelajaran
              </p>

              <div className="mt-5 rounded-xl bg-green-50 p-4">
                <p className="text-xs text-gray-500">Mata pelajaran</p>
                <p className="mt-1 font-semibold text-green-900">
                  {guruTerpilih.mapel}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setGuruTerpilih(null)}
                className="mt-5 w-full rounded-lg bg-green-950 px-4 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Tutup profil
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
