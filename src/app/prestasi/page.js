
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kategori = ["Semua", "Akademik", "Non-Akademik"];

const prestasi = [
  { id: 1, kategori: "Akademik", judul: "Essay Nasional", foto: "/ak1.jpg", deskripsi: "Prestasi siswa dalam bidang penulisan esai tingkat nasional." },
  { id: 2, kategori: "Akademik", judul: "English Speech Contest", foto: "/ak2.jpg", deskripsi: "Pencapaian siswa dalam kompetisi pidato bahasa Inggris." },
  { id: 3, kategori: "Akademik", judul: "English Speech Contest", foto: "/ak3.jpg", deskripsi: "Dokumentasi pencapaian siswa dalam kompetisi bahasa Inggris." },
  { id: 4, kategori: "Akademik", judul: "English Speech Contest", foto: "/ak4.jpg", deskripsi: "Prestasi siswa dalam mengembangkan kemampuan berbahasa Inggris." },
  { id: 5, kategori: "Akademik", judul: "FLS3N", foto: "/ak5.jpg", deskripsi: "Dokumentasi pencapaian siswa dalam ajang FLS3N." },
  { id: 6, kategori: "Akademik", judul: "Inovasi Teknologi", foto: "/ak6.jpg", deskripsi: "Prestasi siswa dalam bidang inovasi dan teknologi." },
  { id: 7, kategori: "Akademik", judul: "Bidang Studi Biologi", foto: "/ak7.jpg", deskripsi: "Pencapaian siswa dalam bidang studi biologi." },
  { id: 8, kategori: "Akademik", judul: "Essay Writing", foto: "/ak8.jpg", deskripsi: "Prestasi siswa dalam kompetisi penulisan esai." },
  { id: 9, kategori: "Akademik", judul: "OSN-P Biologi", foto: "/ak9.jpg", deskripsi: "Pencapaian siswa dalam kompetisi bidang biologi." },
  { id: 10, kategori: "Akademik", judul: "Menulis Cerpen", foto: "/ak10.jpg", deskripsi: "Prestasi siswa dalam bidang penulisan cerita pendek." },
  { id: 11, kategori: "Akademik", judul: "Cipta Puisi", foto: "/ak11.jpg", deskripsi: "Pencapaian siswa dalam bidang penulisan puisi." },
  { id: 12, kategori: "Akademik", judul: "Jurnalistik", foto: "/ak12.jpg", deskripsi: "Prestasi siswa dalam bidang jurnalistik." },
  { id: 13, kategori: "Non-Akademik", judul: "Paskibra Kabupaten Sragen", foto: "/non1.jpg", deskripsi: "Pencapaian siswa dalam bidang paskibra." },
  { id: 14, kategori: "Non-Akademik", judul: "Solo Gitar", foto: "/non2.jpg", deskripsi: "Prestasi siswa dalam bidang musik dan permainan gitar." },
  { id: 15, kategori: "Non-Akademik", judul: "Menyanyi Solo Putra", foto: "/non3.jpg", deskripsi: "Pencapaian siswa dalam kompetisi menyanyi solo putra." },
  { id: 16, kategori: "Non-Akademik", judul: "Cipta Lagu", foto: "/non4.jpg", deskripsi: "Prestasi siswa dalam bidang penciptaan lagu." },
  { id: 17, kategori: "Non-Akademik", judul: "Menyanyi Solo Putri", foto: "/non5.jpg", deskripsi: "Pencapaian siswa dalam kompetisi menyanyi solo putri." },
  { id: 18, kategori: "Non-Akademik", judul: "Taekwondo", foto: "/non6.jpg", deskripsi: "Prestasi siswa dalam bidang olahraga bela diri taekwondo." },
  { id: 19, kategori: "Non-Akademik", judul: "Lari 100 Meter", foto: "/non7.jpg", deskripsi: "Pencapaian siswa dalam cabang atletik lari 100 meter." },
  { id: 21, kategori: "Non-Akademik", judul: "Tapak Suci", foto: "/non9.jpg", deskripsi: "Prestasi siswa dalam bidang bela diri Tapak Suci." },
  { id: 22, kategori: "Non-Akademik", judul: "Futsal Ocean Champions Cup", foto: "/non10.jpg", deskripsi: "Pencapaian siswa dalam kompetisi Ocean Champions Cup." },
  { id: 23, kategori: "Non-Akademik", judul: "Esport Mobile Legends", foto: "/non11.jpg", deskripsi: "Prestasi siswa dalam kompetisi esport Mobile Legends." },
  { id: 24, kategori: "Non-Akademik", judul: "Gus Tawa Cup", foto: "/non12.jpg", deskripsi: "Dokumentasi pencapaian siswa dalam Gus Tawa Cup." },
  { id: 25, kategori: "Non-Akademik", judul: "Persahabatan Duta Genre", foto: "/non13.jpg", deskripsi: "Pencapaian siswa dalam kegiatan Duta Genre." },
  { id: 26, kategori: "Non-Akademik", judul: "Influencer Duta Genre", foto: "/non14.jpg", deskripsi: "Prestasi siswa dalam bidang influencer Duta Genre." },
  { id: 27, kategori: "Non-Akademik", judul: "Turnamen Futsal Solo Raya", foto: "/non15.jpg", deskripsi: "Pencapaian siswa dalam turnamen futsal Solo Raya." },
  { id: 28, kategori: "Non-Akademik", judul: "Paduan Suara", foto: "/non16.jpg", deskripsi: "Prestasi siswa dalam bidang musik dan paduan suara." },
];

const statistik = [
  { angka: "28", label: "Dokumentasi Prestasi" },
  { angka: "12", label: "Prestasi Akademik" },
  { angka: "16", label: "Prestasi Non-Akademik" },
];

const perjalanan = [
  {
    nomor: "01",
    judul: "Prestasi Akademik",
    deskripsi:
      "Pencapaian siswa dalam bidang sains, bahasa, penulisan, dan pengembangan pengetahuan.",
  },
  {
    nomor: "02",
    judul: "Prestasi Non-Akademik",
    deskripsi:
      "Pencapaian siswa dalam olahraga, seni, musik, organisasi, dan pengembangan bakat.",
  },
];

function FotoPrestasi({ src, alt, className = "", ukuranPenuh = false }) {
  const [gagal, setGagal] = useState(false);

  useEffect(() => {
    setGagal(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#e8e1d3] ${className}`}
    >
      {!gagal ? (
        <img
          src={src}
          alt={alt}
          loading={ukuranPenuh ? "eager" : "lazy"}
          onError={() => setGagal(true)}
          className={
            ukuranPenuh
              ? "block h-full w-full object-contain"
              : "h-full w-full object-cover"
          }
        />
      ) : (
        <div className="flex h-full min-h-32 flex-col items-center justify-center p-4 text-center">
          <p className="text-sm font-semibold text-[#173b2b]">
            Foto belum ditemukan
          </p>
          <p className="mt-1 text-xs text-[#68766d]">{src}</p>
        </div>
      )}
    </div>
  );
}

export default function PrestasiPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [prestasiTerpilih, setPrestasiTerpilih] = useState(null);

  const daftarPrestasi =
    kategoriAktif === "Semua"
      ? prestasi
      : prestasi.filter((item) => item.kategori === kategoriAktif);

  // Tutup modal menggunakan tombol Escape.
  useEffect(() => {
    if (!prestasiTerpilih) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPrestasiTerpilih(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prestasiTerpilih]);

  // Mencegah halaman belakang ikut bergulir ketika modal terbuka.
  useEffect(() => {
    if (!prestasiTerpilih) return;

    const overflowSebelumnya = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowSebelumnya;
    };
  }, [prestasiTerpilih]);

  return (
    <main className="overflow-hidden bg-[#f7f4ec] text-[#173b2b]">
      {/* HERO */}
      <section className="bg-[#173b2b] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bd45]">
              SMA Negeri 2 Sragen
            </p>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
              Jejak Prestasi,
              <br />
              Cerita Inspirasi.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-green-100 md:text-base">
              Setiap pencapaian memiliki cerita tentang usaha,
              latihan, dan keberanian untuk mencoba. Jelajahi
              perjalanan siswa SMA Negeri 2 Sragen dalam
              mengembangkan potensi akademik maupun non-akademik.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pencapaian"
                className="bg-[#e5bd45] px-6 py-3 text-sm font-bold text-[#173b2b] transition hover:bg-white"
              >
                Jelajahi Prestasi
              </a>
              <a
                href="#perjalanan"
                className="border border-white/40 px-6 py-3 text-sm font-bold transition hover:border-[#e5bd45] hover:text-[#e5bd45]"
              >
                Tentang Prestasi
              </a>
            </div>

            <div className="mt-10 border-t border-white/20 pt-5">
              <p className="text-sm text-green-100">
                Akademik · Seni · Olahraga · Kreativitas
              </p>
            </div>
          </motion.div>

          {/* FOTO UTAMA */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full border border-[#e5bd45] md:-right-5 md:-top-5" />

              <div className="relative overflow-hidden bg-[#294c3b]">
                <FotoPrestasi
                  src="/prestasi.jpg"
                  alt="Dokumentasi prestasi siswa SMA Negeri 2 Sragen"
                  className="aspect-[3/4] w-full"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10271c]/90 via-transparent to-transparent" />

                <div className="pointer-events-none absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5bd45]">
                    Kebanggaan Sekolah
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-bold leading-snug md:text-3xl">
                    Kerja Keras Menjadi Pencapaian
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Setiap langkah adalah bagian dari perjalanan
                    untuk terus berkembang.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-right text-xs tracking-wide text-green-100/70">
              Dokumentasi prestasi siswa
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="border-b border-[#d9d2c4] bg-[#ebe5d8]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3">
          {statistik.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`px-4 py-8 text-center md:py-10 ${
                index < 2
                  ? "border-b border-[#d1c9ba] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="font-serif text-4xl font-bold md:text-5xl">
                {item.angka}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#777267]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALERI PRESTASI */}
      <section
        id="pencapaian"
        className="scroll-mt-16 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
              Galeri Pencapaian
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Setiap pencapaian
              <br />
              punya ceritanya.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#68766d]">
              Klik foto atau kartu prestasi untuk melihat foto dalam
              ukuran besar beserta deskripsi lengkapnya.
            </p>
          </motion.div>

          {/* FILTER KATEGORI */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#d9d2c4] pb-5">
            {kategori.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setKategoriAktif(item)}
                aria-pressed={kategoriAktif === item}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-widest transition ${
                  kategoriAktif === item
                    ? "bg-[#173b2b] text-[#e5bd45]"
                    : "text-[#59665d] hover:bg-[#e9e2d4]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#68766d]">
            Menampilkan{" "}
            <span className="font-bold text-[#173b2b]">
              {daftarPrestasi.length} prestasi
            </span>
          </p>

          {/* KARTU YANG BISA DIKLIK */}
          <motion.div
            layout
            className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {daftarPrestasi.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setPrestasiTerpilih(item)}
                  aria-label={`Lihat foto dan deskripsi ${item.judul}`}
                  className="group block w-full overflow-hidden border border-[#d9d2c4] bg-white text-left transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#a17b18] focus:ring-offset-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="h-full transition-transform duration-500 group-hover:scale-105">
                      <FotoPrestasi
                        src={item.foto}
                        alt={item.judul}
                        className="h-full w-full"
                      />
                    </div>
                    <span className="absolute left-3 top-3 bg-[#173b2b] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#e5bd45]">
                      {item.kategori}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-white px-3 py-2 text-xs font-bold text-[#173b2b] shadow">
                      Lihat foto ↗
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a17b18]">
                      Prestasi Siswa
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-[#173b2b]">
                      {item.judul}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#68766d]">
                      {item.deskripsi}
                    </p>
                    <div className="mt-5 border-t border-[#e3ddd1] pt-4">
                      <span className="text-sm font-bold text-[#173b2b] group-hover:text-[#a17b18]">
                        Klik untuk detail
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PERJALANAN PRESTASI */}
      <section
        id="perjalanan"
        className="scroll-mt-16 bg-[#173b2b] px-6 py-20 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[40%_60%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e5bd45]">
              Lebih dari Sekadar Penghargaan
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Proses yang
              <br />
              membawa hasil.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-green-100">
              Prestasi bukan hanya tentang hasil akhir, tetapi juga
              proses belajar, kerja sama, kedisiplinan, dan usaha
              untuk menjadi lebih baik.
            </p>
          </motion.div>

          <div className="border-l border-[#718778] pl-8">
            {perjalanan.map((item, index) => (
              <motion.div
                key={item.nomor}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#e5bd45]" />
                <p className="text-sm font-bold tracking-[0.2em] text-[#e5bd45]">
                  {item.nomor}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.judul}</h3>
                <p className="mt-3 text-sm leading-7 text-green-100">
                  {item.deskripsi}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="bg-[#ebe5d8] px-6 py-20 text-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17b18]">
            SMA Negeri 2 Sragen
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#173b2b] md:text-5xl">
            Terus Berkarya,
            <br />
            Terus Berprestasi.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#68766d]">
            Setiap pencapaian adalah awal dari perjalanan baru
            untuk terus belajar, berkembang, dan menginspirasi.
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-[#a17b18]" />
        </motion.div>
      </section>

      {/* MODAL FOTO BESAR DAN DESKRIPSI */}
      <AnimatePresence>
        {prestasiTerpilih && (
          <motion.div
            key="modal-prestasi"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPrestasiTerpilih(null)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="judul-prestasi-modal"
              className="relative my-auto flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden bg-[#f7f4ec] shadow-2xl md:grid md:grid-cols-[1.5fr_1fr]"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* TOMBOL TUTUP */}
              <button
                type="button"
                onClick={() => setPrestasiTerpilih(null)}
                aria-label="Tutup foto"
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl leading-none text-[#173b2b] shadow-lg transition hover:bg-[#e5bd45]"
              >
                ×
              </button>

              {/* FOTO BESAR: SELURUH FOTO DITAMPILKAN */}
              <div className="flex min-h-0 items-center justify-center overflow-hidden bg-[#171b18] md:min-h-[560px]">
                <FotoPrestasi
                  key={prestasiTerpilih.foto}
                  src={prestasiTerpilih.foto}
                  alt={prestasiTerpilih.judul}
                  ukuranPenuh
                  className="flex h-[42vh] w-full items-center justify-center sm:h-[55vh] md:h-[78vh] md:max-h-[780px]"
                />
              </div>

              {/* DESKRIPSI */}
              <div className="flex min-h-0 flex-col overflow-y-auto p-6 sm:p-8 md:justify-center md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17b18]">
                  {prestasiTerpilih.kategori}
                </p>

                <div className="mb-5 mt-4 h-1 w-14 bg-[#e5bd45]" />

                <h2
                  id="judul-prestasi-modal"
                  className="font-serif text-2xl font-bold leading-snug text-[#173b2b] sm:text-3xl"
                >
                  {prestasiTerpilih.judul}
                </h2>

                <p className="mt-6 text-sm leading-8 text-[#59665d] sm:text-base">
                  {prestasiTerpilih.deskripsi}
                </p>

                <div className="mt-8 border-t border-[#d9d2c4] pt-5">
                  <p className="text-xs uppercase tracking-widest text-[#68766d]">
                    SMA Negeri 2 Sragen
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#173b2b]">
                    Dokumentasi Prestasi Siswa
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setPrestasiTerpilih(null)}
                  className="mt-7 w-full bg-[#173b2b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#29543e]"
                >
                  Tutup Foto
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
