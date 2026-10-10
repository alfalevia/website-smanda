
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    number: "01",
    title: "Profil Sekolah",
    description: "Sejarah, visi misi, fasilitas, dan lingkungan sekolah.",
    href: "/about",
  },
  {
    number: "02",
    title: "Prestasi",
    description: "Pencapaian dan prestasi siswa SMA Negeri 2 Sragen.",
    href: "/prestasi",
  },
  {
    number: "03",
    title: "Ekstrakurikuler",
    description: "Kegiatan, organisasi, dan pengembangan bakat siswa.",
    href: "/ekstrakurikuler",
  },
  {
    number: "04",
    title: "Berita Sekolah",
    description: "Informasi kegiatan dan perkembangan sekolah.",
    href: "/berita",
  },
];

const gallery = [
  {
    image: "/aula.jpg",
    title: "Aula Sekolah",
    description: "Ruang kegiatan dan berbagai acara sekolah.",
  },
  {
    image: "/lapangan.jpg",
    title: "Lapangan Sekolah",
    description: "Area olahraga dan aktivitas siswa.",
  },
  {
    image: "/masjid.jpg",
    title: "Masjid Sekolah",
    description: "Fasilitas pendukung kegiatan keagamaan.",
  },
  {
    image: "/osis1.jpg",
    title: "Kegiatan Siswa",
    description: "Aktivitas organisasi dan pengembangan diri.",
  },
  {
    image: "/paskibra.jpg",
    title: "Kegiatan Paskibra",
    description: "Melatih kedisiplinan dan kerja sama.",
  },
  {
    image: "/padus1.jpg",
    title: "Paduan Suara",
    description: "Kegiatan seni dan pengembangan bakat siswa.",
  },
];

const newsItems = [
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
];

const values = [
  ["S", "Santun"],
  ["M", "Mandiri"],
  ["A", "Aktif"],
  ["R", "Religius"],
  ["T", "Tangguh"],
];

const schoolAddress =
  "Jl. Anggrek No. 34, Sragen Kulon, Kecamatan Sragen, Kabupaten Sragen, Jawa Tengah 57212";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(schoolAddress);

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-yellow-400 hover:text-green-950"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % gallery.length);
    }, 2000);

    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <main className="overflow-hidden bg-stone-50 text-green-950">
      {/* HERO / BERANDA */}
      <section
        id="beranda"
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/sekolah.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center"
        >
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            src="/logo.jpg"
            alt="Logo SMA Negeri 2 Sragen"
            className="h-36 w-36 object-contain md:h-40 md:w-40"
          />

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-6 text-sm font-bold tracking-[0.35em] text-yellow-400"
          >
            S.M.A.R.T
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-4 text-4xl font-extrabold tracking-wide text-white md:text-6xl"
          >
            SMA NEGERI 2 SRAGEN
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg"
          >
            Sekolah Unggul, Berkarakter, dan Berprestasi
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/about"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Kenal Lebih Dekat →
            </Link>

            <a
              href="#berita"
              className="rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-green-950"
            >
              Lihat Berita ↓
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#menu"
          aria-label="Gulir ke menu utama"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/50 text-xl text-white"
        >
          ↓
        </motion.a>
      </section>

      {/* MENU UTAMA */}
      <section id="menu" className="border-b border-stone-200 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid max-w-7xl md:grid-cols-4"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="border-b border-stone-200 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <Link
                href={item.href}
                className="group block p-7 transition duration-300 hover:bg-green-950"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-yellow-600 group-hover:text-yellow-400">
                    {item.number}
                  </span>
                  <span className="text-xl text-gray-400 group-hover:text-yellow-400">
                    →
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold group-hover:text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500 group-hover:text-green-100">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-8 bg-yellow-400 transition-all group-hover:w-16" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TENTANG SEKOLAH DAN SLIDESHOW */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl bg-green-950 shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={gallery[currentImage].image}
                src={gallery[currentImage].image}
                alt={gallery[currentImage].title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
                className="h-[360px] w-full object-cover md:h-[400px]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

            <div className="absolute bottom-12 left-0 right-0 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={gallery[currentImage].title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg font-bold text-white">
                    {gallery[currentImage].title}
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    {gallery[currentImage].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto sebelumnya"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-yellow-400 hover:text-green-950"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Foto berikutnya"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-yellow-400 hover:text-green-950"
            >
              ›
            </button>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {gallery.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Tampilkan ${item.title}`}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === index
                      ? "w-7 bg-yellow-400"
                      : "w-2 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
              Tentang Kami
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
              Sekolah untuk bertumbuh, belajar, dan berprestasi.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              SMA Negeri 2 Sragen merupakan lingkungan pendidikan yang
              mendorong siswa untuk berkembang dalam bidang akademik,
              karakter, kreativitas, maupun kegiatan nonakademik.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-yellow-700"
            >
              Selengkapnya tentang sekolah →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NILAI S.M.A.R.T */}
      <section className="bg-green-900 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-bold uppercase tracking-[0.25em] text-yellow-400">
              Nilai Sekolah
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-white">
              S.M.A.R.T
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
              Nilai yang menjadi bagian dari semangat dan karakter warga
              SMA Negeri 2 Sragen.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {values.map(([letter, name]) => (
              <motion.div
                key={letter}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-yellow-400/60 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-3xl font-extrabold text-green-950">
                  {letter}
                </div>
                <p className="mt-4 font-bold text-white">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BERITA SEKOLAH */}
      <section
        id="berita"
        className="bg-stone-50 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
                Informasi Terbaru
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Berita Sekolah
              </h2>
            </div>

            <Link
              href="/berita"
              className="font-bold text-green-800 hover:text-yellow-700"
            >
              Lihat semua berita →
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -7 }}
                className="h-full"
              >
                <Link
                  href={`/berita/${item.id}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={item.gambar}
                      alt={item.judul}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                      className="h-56 w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                      {item.kategori}
                    </p>

                    <h3 className="mt-2 text-xl font-bold group-hover:text-green-700">
                      {item.judul}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {item.ringkasan}
                    </p>

                    <p className="mt-5 text-sm font-bold text-green-800">
                      Baca selengkapnya →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center md:flex-row md:px-10 md:text-left"
        >
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Ingin mengenal SMA Negeri 2 Sragen?
            </h2>
            <p className="mt-2 text-green-900">
              Jelajahi profil, prestasi, kegiatan, dan berita sekolah.
            </p>
          </div>

          <Link
            href="/about"
            className="shrink-0 rounded-xl bg-green-950 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-green-900"
          >
            Jelajahi Sekolah →
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* IDENTITAS SEKOLAH */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Logo SMA Negeri 2 Sragen"
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <h2 className="text-base font-extrabold">
                    SMA NEGERI 2 SRAGEN
                  </h2>
                  <p className="mt-1 text-xs text-yellow-400">S.M.A.R.T</p>
                </div>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-green-100/75">
                Sekolah Unggul, Berkarakter, dan Berprestasi. Bersama
                membangun lingkungan belajar yang positif dan mendukung
                potensi siswa.
              </p>

              <a
                href="https://sman2sragen.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block break-all text-sm font-semibold text-yellow-400 hover:text-yellow-300"
              >
                sman2sragen.sch.id ↗
              </a>
            </div>

            {/* NAVIGASI */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Navigasi
              </h3>

              <ul className="space-y-3 text-sm text-green-100/75">
                {[
                  ["Beranda", "/"],
                  ["Profil Sekolah", "/about"],
                  ["Prestasi", "/prestasi"],
                  ["Ekstrakurikuler", "/ekstrakurikuler"],
                  ["Berita Sekolah", "/berita"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="transition hover:text-yellow-400"
                    >
                      › {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* KONTAK */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Hubungi Kami
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-semibold">Alamat Sekolah</p>
                  <p className="mt-2 leading-6 text-green-100/75">
                    {schoolAddress}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-semibold text-yellow-400 hover:text-yellow-300"
                  >
                    Lihat di Google Maps ↗
                  </a>
                </div>

                <div>
                  <p className="font-semibold">Nomor Telepon</p>
                  <a
                    href="tel:0271891215"
                    className="mt-1 inline-block text-green-100/75 hover:text-yellow-400"
                  >
                    (0271) 891215
                  </a>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:sman2sragen123@gmail.com"
                    className="mt-1 block break-all text-green-100/75 hover:text-yellow-400"
                  >
                    sman2sragen123@gmail.com
                  </a>
                  <a
                    href="mailto:sman2sragen79@ymail.com"
                    className="mt-1 block break-all text-green-100/75 hover:text-yellow-400"
                  >
                    sman2sragen79@ymail.com
                  </a>
                </div>
              </div>
            </div>

            {/* MEDIA SOSIAL DAN PETA */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Temukan Kami
              </h3>

              <p className="text-sm leading-6 text-green-100/70">
                Ikuti media sosial SMA Negeri 2 Sragen.
              </p>

              <div className="mt-5 flex gap-3">
                <SocialLink
                  href="https://www.instagram.com/sman2_sragen/"
                  label="Instagram SMA Negeri 2 Sragen"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </SocialLink>

                <SocialLink
                  href="https://www.youtube.com/results?search_query=Sman+2+Sragen+Official"
                  label="YouTube Sman 2 Sragen Official"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.8 15.3V8.7l5.8 3.3-5.8 3.3Z" />
                  </svg>
                </SocialLink>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <iframe
                  title="Peta lokasi SMA Negeri 2 Sragen"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    schoolAddress
                  )}&z=15&output=embed`}
                  className="h-32 w-full border-0"
                  loading="lazy"
                />

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-3 text-xs"
                >
                  <span className="text-green-100/80">Lokasi sekolah</span>
                  <span className="font-bold text-yellow-400">
                    Buka Maps →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-green-100/60 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} SMA Negeri 2 Sragen. Hak cipta
              dilindungi.
            </p>
            <p>S.M.A.R.T — Santun, Mandiri, Aktif, Religius, Tangguh</p>
          </div>
        </div>
      </footer>

      {/* TOMBOL KEMBALI KE ATAS */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-green-950 shadow-lg transition hover:bg-yellow-300"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}