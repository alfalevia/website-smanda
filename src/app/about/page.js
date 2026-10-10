"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const revealViewport = { once: true, amount: 0.12 };

export default function AboutPage() {
  const [tab, setTab] = useState("visi");

  return (
    <main className="bg-[#f5f1e8] text-[#173b2b]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#173b2b]">
        <div className="mx-auto grid min-h-[580px] max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bd45]">
              Profil Sekolah
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 font-serif text-5xl font-bold leading-tight text-white md:text-6xl"
            >
              Mengenal
              <br />
              lebih dekat.
            </motion.h1>

            <div className="mt-7 h-px w-16 bg-[#e5bd45]" />

            <p className="mt-7 max-w-md text-sm leading-7 text-green-100">
              Mengenal perjalanan, lingkungan, kegiatan, dan kehidupan
              pendidikan di SMA Negeri 2 Sragen.
            </p>

            <a
              href="#tentang"
              className="mt-8 w-fit border-b border-[#e5bd45] pb-2 text-sm font-bold text-white transition hover:text-[#e5bd45]"
            >
              Lihat profil ↓
            </a>
          </motion.div>

          <div className="relative min-h-[380px] overflow-hidden">
            <motion.img
              src="/sekolah2.jpg"
              alt="SMA Negeri 2 Sragen"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.025 }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#173b2b]/80 to-transparent" />

            <div className="absolute bottom-7 right-7 bg-[#173b2b]/90 px-5 py-4">
              <p className="text-xs uppercase tracking-widest text-[#e5bd45]">
                SMA Negeri 2 Sragen
              </p>
              <p className="mt-1 text-sm text-white">
                Sragen, Jawa Tengah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGASI */}
      <div className="sticky top-0 z-40 border-b border-[#d9d2c4] bg-[#f5f1e8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4">
          {[
            ["tentang", "Tentang"],
            ["sejarah", "Sejarah"],
            ["struktur", "Struktur"],
            ["visi", "Visi & Misi"],
            ["warga", "Guru & Karyawan"],
          ].map(([id, nama]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap px-5 py-4 text-xs font-bold uppercase tracking-widest text-[#31513f] transition hover:bg-[#173b2b] hover:text-[#e5bd45]"
            >
              {nama}
            </a>
          ))}
        </div>
      </div>

      {/* TENTANG */}
      <motion.section
        id="tentang"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="scroll-mt-16 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
                Sekilas
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Sekolah yang
                <br />
                terus bertumbuh.
              </h2>

              <div className="mt-7 h-1 w-16 bg-[#e5bd45]" />
            </div>

            <div>
              <p className="text-lg leading-8 text-[#405548]">
                SMA Negeri 2 Sragen merupakan satuan pendidikan
                jenjang SMA berstatus negeri yang berada di Kabupaten
                Sragen, Jawa Tengah.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#68766d]">
                Kehidupan sekolah tidak hanya berlangsung di dalam
                ruang kelas. Kegiatan siswa, pembelajaran, organisasi,
                prestasi, dan lingkungan sekolah menjadi bagian dari
                pengalaman pendidikan.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* INFORMASI SINGKAT */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="border-y border-[#d9d2c4] bg-[#ebe5d8]"
      >
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            ["Status", "Negeri"],
            ["Jenjang", "SMA"],
            ["Lokasi", "Sragen"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`p-8 ${
                index !== 2
                  ? "border-b border-[#d1c9ba] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-[#7b776c]">
                {label}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

            {/* SEJARAH */}
      <motion.section
        id="sejarah"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="scroll-mt-16 bg-[#173b2b] py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bd45]">
              01 — Sejarah
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Sejarah Berdirinya
              <br />
              SMA Negeri 2 Sragen
            </h2>

            <div className="mt-7 h-px w-16 bg-[#e5bd45]" />

            <p className="mt-7 max-w-3xl text-sm leading-8 text-green-100">
              Berdasarkan keterangan sejarah berdirinya SMA Negeri 2
              Sragen, perjalanan sekolah dimulai dari berdirinya
              SMA Sukawati Sragen hingga kemudian menjadi SMA Negeri 2
              Sragen.
            </p>
          </div>

          <div className="border-l border-[#718778] pl-8 md:ml-[30%]">
            {/* 1963 */}
            <motion.div variants={reveal} className="relative pb-14">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 rounded-full bg-[#e5bd45]" />

              <p className="font-serif text-3xl font-bold text-[#e5bd45]">
                1963
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-green-200">
                1 Agustus 1963
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Berdirinya SMA Sukawati Sragen
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                Pada tanggal 1 Agustus 1963 di Kabupaten Sragen
                berdiri sekolah swasta bernama SMA Sukawati Sragen.
                Sekolah ini berada di bawah naungan Yayasan Front
                Marhaenis.
              </p>

              <div className="mt-6 border border-[#718778] bg-[#234735] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#e5bd45]">
                  Panitia Pendidikan
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-green-100">
                  <li>
                    <strong>Ketua:</strong> Bp. Wongsoatmodjo, BA
                    (Camat Sragen)
                  </li>
                  <li>
                    <strong>Sekretaris:</strong> Bp. Y. Soeradi
                    Hardjopranoto (Wakasek/Guru SMP Negeri 1 Sragen)
                  </li>
                  <li>
                    <strong>Bendahara:</strong> Bp. Soetimboel
                    (Kepala SMP Negeri 1 Sragen)
                  </li>
                  <li>
                    <strong>Bagian Pendidikan:</strong> Bp. Soebono, BA
                    (Guru SMA Negeri Sragen)
                  </li>
                  <li>
                    <strong>Bagian Usaha:</strong> Bp. Soejono
                    Tjiptosuhardjo
                  </li>
                  <li>
                    <strong>Bagian Tata Usaha:</strong> Bp. Soekimpoel
                    (TU SMA Negeri Sragen)
                  </li>
                  <li>
                    <strong>Kepala Sekolah:</strong> Bp. Wongsoatmodjo, BA
                    (Camat Sragen)
                  </li>
                  <li>
                    <strong>Pelaksana Harian:</strong> Bp. Soebono, BA
                    (Wakil Kepala Sekolah)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 1977 */}
            <motion.div variants={reveal} className="relative pb-14">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 rounded-full bg-[#e5bd45]" />

              <p className="font-serif text-3xl font-bold text-[#e5bd45]">
                1977
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-green-200">
                1 Januari 1977
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Menjadi SMA PEMDA Sragen
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                Pada tanggal 1 Januari 1977, Yayasan Front Marhaenis
                menyerahkan SMA Sukawati Sragen kepada Bapak Bupati
                Kepala Daerah Tingkat II Sragen.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                Pada tanggal yang sama, nama SMA Sukawati Sragen
                dirubah menjadi <strong>SMA PEMDA Sragen</strong>.
              </p>
              <div className="mt-5 border-l-2 border-[#e5bd45] pl-5">
                <p className="text-sm text-green-100">
                  Kepala sekolah pada waktu itu:
                </p>
                <p className="mt-1 font-bold text-white">Bp. Soedjadi</p>
              </div>
            </motion.div>

            {/* 1978 */}
            <motion.div variants={reveal} className="relative pb-14">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 rounded-full bg-[#e5bd45]" />

              <p className="font-serif text-3xl font-bold text-[#e5bd45]">
                1978
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-green-200">
                1 Juli 1978
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Pengesahan SMA PEMDA Sragen
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                SMA PEMDA Sragen disyahkan oleh Bapak Kepala Bidang
                Dikmenum Semarang dengan nomor piagam
                <strong> No. 074/XIII/4.A/78 </strong>
                tanggal 1 April 1978.
              </p>
            </motion.div>

            {/* 1980 */}
            <motion.div variants={reveal} className="relative pb-14">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 rounded-full bg-[#e5bd45]" />

              <p className="font-serif text-3xl font-bold text-[#e5bd45]">
                1980
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-green-200">
                1 Juli 1980
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Resmi menjadi SMA Negeri 2 Sragen
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                Pada tanggal 1 Juli 1980, SMA PEMDA Sragen diresmikan
                menjadi <strong>SMA Negeri 2 Sragen</strong> oleh
                Bapak Menteri P dan K Republik Indonesia di Jakarta
                dengan surat keputusan tanggal 30 Juli 1980
                Nomor <strong>0208/0/1980</strong>.
              </p>
            </motion.div>

            {/* KEPALA SEKOLAH */}
            <motion.div variants={reveal} className="relative">
              <span className="absolute -left-[37px] top-1 flex h-4 w-4 rounded-full bg-[#e5bd45]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5bd45]">
                Perjalanan Kepemimpinan
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Kepala SMA Negeri 2 Sragen
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-green-100">
                Berikut nama-nama yang tercatat pernah menjabat sebagai
                Kepala SMA Negeri 2 Sragen berdasarkan keterangan
                sejarah sekolah.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  ["1", "Bp. Drs. Sri Widodo", "1 Juli 1980 – 29 September 1986"],
                  ["2", "Bp. Soejoto Siswohadisapoetro, BA", "29 September 1986 – 23 Desember 1987"],
                  ["3", "Bp. KM. Maksum, BA", "23 Desember 1987 – 15 November 1989"],
                  ["4", "Bp. R.M. Sambodo, BA", "15 November 1989 – 11 September 1995"],
                  ["5", "Bp. Drs. Sardjono", "20 September 1995 – 29 April 1996 (Pengampu)"],
                  ["6", "Bp. Drs. Sri Widodo", "Tercantum dalam sumber sebagai Kepala ke-6"],
                  ["7", "Bp. Drs. Sutarno", "Kepala SMAN 2 Sragen ke-7"],
                  ["8", "Bp. Drs. Suyatmin", "Kepala SMAN 2 Sragen ke-8"],
                  ["9", "Bp. Drs. Sumarsono", "Kepala SMAN 2 Sragen ke-9"],
                  ["10", "Bp. Drs. Sunaryo", "1 Mei 2003 – 29 September 2013"],
                  ["11", "Bp. Drs. Supono", "29 September 2013 – 2 April 2014"],
                  ["12", "Bp. Drs. Paidi, M.Pd", "2 April 2014 – 1 Maret 2020"],
                  ["13", "Bu Dra. Titi Handayani, M.Pd", "1 Maret 2020 – sekarang"],
                ].map(([nomor, nama, periode]) => (
                  <motion.div
                    key={nomor}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="grid gap-3 border border-[#718778] bg-[#234735] p-4 md:grid-cols-[45px_1fr]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center bg-[#e5bd45] font-bold text-[#173b2b]">
                      {nomor}
                    </div>
                    <div>
                      <p className="font-bold text-white">{nama}</p>
                      <p className="mt-1 text-xs leading-5 text-green-100">
                        {periode}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

            {/* STRUKTUR */}
      <motion.section
        id="struktur"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="scroll-mt-16 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
              02 — Organisasi
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
              Struktur sekolah
            </h2>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center overflow-hidden bg-white p-3 shadow-sm"
          >
            <motion.img
              src="/struktur.jpg"
              alt="Struktur organisasi sekolah"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
              className="max-h-[500px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* VISI & MISI */}
      <motion.section
        id="visi"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="scroll-mt-16 bg-[#e9e2d4] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-[35%_65%]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
                03 — Arah Sekolah
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Visi &
                <br />
                Misi
              </h2>

              <div className="mt-8 overflow-hidden bg-white p-3">
                <motion.img
                  src="/visimisi.jpg"
                  alt="Visi dan Misi SMA Negeri 2 Sragen"
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.35 }}
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="flex border-b border-[#c9c0b0]">
                <button
                  onClick={() => setTab("visi")}
                  className={`px-6 py-4 text-xs font-bold uppercase tracking-widest ${
                    tab === "visi"
                      ? "border-b-2 border-[#173b2b] text-[#173b2b]"
                      : "text-[#8a887f]"
                  }`}
                >
                  Visi
                </button>

                <button
                  onClick={() => setTab("misi")}
                  className={`px-6 py-4 text-xs font-bold uppercase tracking-widest ${
                    tab === "misi"
                      ? "border-b-2 border-[#173b2b] text-[#173b2b]"
                      : "text-[#8a887f]"
                  }`}
                >
                  Misi
                </button>
              </div>

              <AnimatePresence mode="wait">
                {tab === "visi" ? (
                  <motion.div
                    key="visi"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="py-10"
                  >
                    <p className="font-serif text-3xl font-bold leading-relaxed md:text-4xl">
                      “Unggul dalam mutu, santun dalam perilaku,
                      dan berkarakter pelajar Pancasila.”
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="misi"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 py-10"
                  >
                    {[
                      "Mendukung kebutuhan belajar peserta didik.",
                      "Menciptakan proses pembelajaran yang baik.",
                      "Membudayakan akhlak dan nilai-nilai positif.",
                      "Menumbuhkan kepedulian terhadap lingkungan.",
                      "Mewujudkan pendidikan yang ramah bagi siswa.",
                      "Mengembangkan karakter Profil Pelajar Pancasila.",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex gap-5 border-b border-[#d3cbbc] pb-5"
                      >
                        <span className="font-serif text-xl font-bold text-[#a17b18]">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-[#526158]">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GURU & KARYAWAN */}
      <motion.section
        id="warga"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="scroll-mt-16 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
                04 — Warga Sekolah
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Di balik
                <br />
                kegiatan sekolah.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#65736a]">
                Guru dan tenaga kependidikan menjadi bagian penting
                dalam mendukung kegiatan pembelajaran dan pelayanan
                pendidikan di sekolah.
              </p>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-[#d8d0c1]">
              {[
                ["Guru", "Pembelajaran"],
                ["Wali Kelas", "Pendampingan"],
                ["Tenaga Kependidikan", "Pelayanan"],
                ["Staf Sekolah", "Administrasi"],
              ].map(([judul, sub], index) => (
                <motion.div
                  key={judul}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group border-b border-r border-[#d8d0c1] p-6 transition hover:bg-[#173b2b]"
                >
                  <p className="font-serif text-2xl font-bold text-[#173b2b] transition group-hover:text-white">
                    {judul}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#a17b18]">
                    {sub}
                  </p>
                  <div className="mt-8 h-px w-8 bg-[#e5bd45] transition-all group-hover:w-16" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* PENUTUP */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.7 }}
        className="bg-[#173b2b] px-6 py-24 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bd45]">
          SMA Negeri 2 Sragen
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl font-bold leading-relaxed text-white md:text-5xl">
          Tempat belajar, bertumbuh,
          dan menciptakan cerita.
        </h2>

        <div className="mx-auto mt-8 h-px w-16 bg-[#e5bd45]" />
      </motion.section>
    </main>
  );
}