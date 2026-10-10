
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function EkstrakurikulerPage() {
  const [ekskulTerpilih, setEkskulTerpilih] = useState(null);

  const ekskul = [
    {
      id: "pramuka",
      nama: "Pramuka",
      deskripsi:
        "Mengembangkan kemandirian, kedisiplinan, kepemimpinan, dan kerja sama.",
      foto: [
        "/pramuka1.jpg",
        "/pramuka2.jpg",
        "/pramuka3.jpg",
        "/pramuka4.jpg",
      ],
    },
    {
      id: "pmr",
      nama: "PMR",
      deskripsi:
        "Membentuk kepedulian sosial dan keterampilan dasar dalam kegiatan kemanusiaan.",
      foto: [
        "/pmr1.jpg",
        "/pmr2.jpg",
        "/pmr3.jpg",
        "/pmr4.jpg",
        "/pmr5.jpg",
      ],
    },
    {
      id: "futsal",
      nama: "Futsal",
      deskripsi:
        "Wadah bagi siswa yang memiliki minat dan bakat dalam olahraga futsal.",
      foto: ["/futsal1.jpg", "/futsal2.jpg", "/futsal3.jpg"],
    },
    {
      id: "basket",
      nama: "Basket",
      deskripsi:
        "Mengembangkan kemampuan olahraga, kerja sama tim, sportivitas, dan kedisiplinan siswa.",
      foto: [
        "/basket1.jpg",
        "/basket2.jpg",
        "/basket3.jpg",
        "/basket4.jpg",
      ],
    },
    {
      id: "osis",
      nama: "OSIS",
      deskripsi:
        "Mengembangkan kemampuan berorganisasi, kepemimpinan, dan tanggung jawab siswa.",
      foto: ["/osis1.jpg", "/osis2.jpg", "/osis3.jpg", "/osis4.jpg"],
    },
    {
      id: "padus",
      nama: "Paduan Suara",
      deskripsi:
        "Mengembangkan kemampuan bermusik, vokal, kekompakan, dan kepercayaan diri.",
      foto: [
        "/padus1.jpg",
        "/padus2.jpg",
        "/padus3.jpg",
        "/padus4.jpg",
      ],
    },
    {
      id: "pandareksa",
      nama: "Pandareksa",
      deskripsi:
        "Membangun kepedulian terhadap lingkungan dan kegiatan di alam terbuka.",
      foto: [
        "/pandareksa1.jpg",
        "/pandareksa2.jpg",
        "/pandareksa4.jpg",
      ],
    },
    {
      id: "paskibra",
      nama: "Paskibra",
      deskripsi:
        "Membentuk kedisiplinan, kekompakan, tanggung jawab, dan jiwa kepemimpinan.",
      foto: [
        "/paskibra.jpg",
        "/paskibra2.jpg",
        "/paskibra3.jpg",
        "/paskibra4.jpg",
      ],
    },
  ];

  return (
    <main className="overflow-hidden bg-stone-50">
      {/* HEADER */}
      <section className="bg-green-950 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold uppercase tracking-[0.2em] text-yellow-400"
          >
            Kegiatan Siswa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-3 text-4xl font-extrabold text-white md:text-5xl"
          >
            Temukan Minat,
            <br />
            Kembangkan Potensi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-5 max-w-2xl leading-8 text-green-100"
          >
            Ekstrakurikuler menjadi ruang bagi siswa untuk mengembangkan
            minat, bakat, kreativitas, kepemimpinan, dan kemampuan bekerja
            sama di luar kegiatan pembelajaran.
          </motion.p>
        </div>
      </section>

      {/* DAFTAR EKSTRAKURIKULER */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
            Pilihan Ekstrakurikuler
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-green-950 md:text-4xl">
            Berkegiatan sesuai passion
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Pilih kegiatan yang sesuai dengan minat dan kemampuanmu,
            lalu berkembang bersama teman-teman di lingkungan sekolah.
          </p>
        </motion.div>

        {/* KARTU EKSTRAKURIKULER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ekskul.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              variants={fadeUp}
              onClick={() => setEkskulTerpilih(item)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.96 }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm transition-shadow duration-300 hover:border-green-200 hover:shadow-xl"
            >
              {/* FOTO KARTU */}
              <div className="h-44 overflow-hidden bg-stone-100">
                <motion.img
                  src={item.foto[0]}
                  alt={item.nama}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* INFORMASI */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-950">
                  {item.nama}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.deskripsi}
                </p>

                <div className="mt-5 border-t border-stone-100 pt-4">
                  <span className="text-sm font-bold text-yellow-600 transition-colors duration-300 group-hover:text-green-800">
                    Lihat galeri →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-yellow-400 px-6 py-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl font-extrabold text-green-950"
          >
            Bukan hanya belajar di kelas
          </motion.h2>

          <p className="mt-4 leading-7 text-green-900">
            Kembangkan kemampuan, temukan pengalaman baru, dan
            bangun kepercayaan diri melalui berbagai kegiatan siswa.
          </p>
        </div>
      </motion.section>

      {/* POPUP DETAIL */}
      <AnimatePresence>
        {ekskulTerpilih && (
          <motion.div
            key="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setEkskulTerpilih(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 35, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TOMBOL X */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setEkskulTerpilih(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-black"
                aria-label="Tutup galeri"
              >
                ×
              </motion.button>

              {/* FOTO UTAMA POPUP */}
              <div className="relative h-64 overflow-hidden md:h-80">
                <motion.img
                  key={ekskulTerpilih.foto[0]}
                  src={ekskulTerpilih.foto[0]}
                  alt={ekskulTerpilih.nama}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <motion.p
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400"
                  >
                    Kegiatan Siswa
                  </motion.p>

                  <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-2 text-3xl font-extrabold text-white md:text-4xl"
                  >
                    {ekskulTerpilih.nama}
                  </motion.h2>
                </div>
              </div>

              {/* ISI POPUP */}
              <div className="p-6 md:p-8">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600"
                >
                  Galeri Kegiatan
                </motion.p>

                <h3 className="mt-2 text-2xl font-bold text-green-950">
                  Dokumentasi {ekskulTerpilih.nama}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Beberapa dokumentasi kegiatan{" "}
                  {ekskulTerpilih.nama.toLowerCase()} di SMA Negeri 2 Sragen.
                </p>

                {/* GALERI FOTO */}
                <motion.div
                  key={ekskulTerpilih.id}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                >
                  {ekskulTerpilih.foto.map((foto, index) => (
                    <motion.div
                      key={foto}
                      variants={fadeUp}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="overflow-hidden rounded-xl bg-stone-100"
                    >
                      <motion.img
                        src={foto}
                        alt={`${ekskulTerpilih.nama} ${index + 1}`}
                        loading="lazy"
                        className="h-52 w-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.45 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* TOMBOL TUTUP */}
                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="button"
                    onClick={() => setEkskulTerpilih(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg bg-green-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-900"
                  >
                    Tutup
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}