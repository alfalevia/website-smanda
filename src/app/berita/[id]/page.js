
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const berita = [
  {
    id: "1",
    judul: "Maulid Nabi Muhammad SAW",
    tanggal: "2026",
    kategori: "Keagamaan",
    gambar: "/berita1.jpg",
    ringkasan:
      "Peringatan Maulid Nabi Muhammad SAW menjadi momen untuk mengenang keteladanan Rasulullah dan menerapkan nilai-nilai kebaikan dalam kehidupan sehari-hari.",
    isi: [
      {
        subjudul: "Mengenal Makna Maulid Nabi",
        paragraf:
          "Peringatan Maulid Nabi Muhammad SAW menjadi kesempatan untuk mengenang perjalanan hidup dan keteladanan Rasulullah. Nilai-nilai seperti kejujuran, kesabaran, kepedulian, dan sikap saling menghormati dapat menjadi pelajaran penting bagi seluruh warga sekolah.",
      },
      {
        subjudul: "Menanamkan Akhlak Terpuji",
        paragraf:
          "Keteladanan Rasulullah dapat diterapkan melalui kebiasaan sederhana, seperti berkata jujur, menghargai guru dan teman, membantu sesama, serta bertanggung jawab atas setiap tindakan. Sikap tersebut penting untuk membangun lingkungan sekolah yang nyaman dan positif.",
      },
      {
        subjudul: "Harapan dari Peringatan",
        paragraf:
          "Melalui peringatan Maulid Nabi, siswa diharapkan tidak hanya mengenal sejarah Rasulullah, tetapi juga berusaha menerapkan akhlak terpuji dalam kehidupan sehari-hari, baik di sekolah, di rumah, maupun di masyarakat.",
      },
    ],
  },
  {
    id: "2",
    judul: "Hari Jadi Provinsi Jawa Tengah ke-81",
    tanggal: "2026",
    kategori: "Peringatan",
    gambar: "/berita2.jpg",
    ringkasan:
      "Hari jadi Provinsi Jawa Tengah menjadi momen untuk mengenang perjalanan daerah sekaligus menumbuhkan kepedulian terhadap budaya dan pembangunan.",
    isi: [
      {
        subjudul: "Mengenang Perjalanan Jawa Tengah",
        paragraf:
          "Hari jadi Provinsi Jawa Tengah menjadi kesempatan untuk mengenang perjalanan dan perkembangan daerah. Berbagai perubahan yang terjadi merupakan bagian dari upaya membangun kehidupan masyarakat yang lebih baik.",
      },
      {
        subjudul: "Menjaga Budaya dan Persatuan",
        paragraf:
          "Jawa Tengah memiliki kekayaan budaya, tradisi, bahasa, dan kesenian yang perlu dijaga bersama. Generasi muda dapat ikut melestarikannya dengan mengenal budaya daerah serta menghargai perbedaan di lingkungan sekitar.",
      },
      {
        subjudul: "Peran Generasi Muda",
        paragraf:
          "Siswa dapat berkontribusi melalui kegiatan belajar, sikap disiplin, kepedulian terhadap lingkungan, dan partisipasi dalam kegiatan positif. Hal sederhana tersebut menjadi bagian dari upaya membangun masa depan daerah.",
      },
    ],
  },
  {
    id: "3",
    judul: "Dirgahayu Republik Indonesia ke-81",
    tanggal: "2026",
    kategori: "Peringatan",
    gambar: "/berita3.jpg",
    ringkasan:
      "Peringatan kemerdekaan mengajak seluruh warga sekolah menghargai perjuangan para pahlawan dan menjaga semangat persatuan.",
    isi: [
      {
        subjudul: "Mengenang Perjuangan Bangsa",
        paragraf:
          "Hari Kemerdekaan Republik Indonesia menjadi pengingat atas perjuangan panjang para pahlawan dalam meraih kemerdekaan. Kemerdekaan yang dinikmati saat ini membawa tanggung jawab untuk menjaga persatuan dan mengisi pembangunan dengan hal-hal positif.",
      },
      {
        subjudul: "Menumbuhkan Semangat Nasionalisme",
        paragraf:
          "Semangat nasionalisme dapat diwujudkan melalui sikap menghormati simbol negara, menghargai perbedaan, menjaga kerukunan, dan mengutamakan kepentingan bersama. Nilai-nilai tersebut dapat dimulai dari kehidupan sehari-hari di lingkungan sekolah.",
      },
      {
        subjudul: "Peran Siswa dalam Mengisi Kemerdekaan",
        paragraf:
          "Sebagai generasi penerus, siswa dapat mengisi kemerdekaan dengan belajar sungguh-sungguh, mengembangkan kemampuan, menjaga lingkungan, serta menggunakan teknologi secara bijak. Dengan demikian, semangat perjuangan dapat diteruskan melalui tindakan nyata.",
      },
    ],
  },
  {
    id: "4",
    judul: "Selamat Hari Pramuka ke-65",
    tanggal: "2026",
    kategori: "Kesiswaan",
    gambar: "/berita4.jpg",
    ringkasan:
      "Hari Pramuka mengingatkan pentingnya kedisiplinan, kemandirian, kerja sama, dan kepedulian terhadap sesama.",
    isi: [
      {
        subjudul: "Pramuka sebagai Wadah Pembentukan Karakter",
        paragraf:
          "Gerakan Pramuka merupakan salah satu kegiatan yang dapat membantu siswa mengembangkan karakter dan keterampilan. Melalui kegiatan kepramukaan, siswa memperoleh kesempatan untuk belajar menghadapi tantangan, menyelesaikan masalah, dan bekerja bersama orang lain.",
      },
      {
        subjudul: "Belajar Disiplin dan Mandiri",
        paragraf:
          "Kedisiplinan dan kemandirian menjadi nilai penting dalam kegiatan Pramuka. Siswa belajar menaati aturan, mengelola tanggung jawab, mengambil keputusan, serta menyelesaikan tugas dengan sungguh-sungguh.",
      },
      {
        subjudul: "Membangun Kepedulian",
        paragraf:
          "Selain melatih keterampilan, kegiatan Pramuka juga mengajarkan pentingnya membantu sesama dan menjaga lingkungan. Nilai-nilai tersebut diharapkan dapat diterapkan siswa dalam kegiatan sekolah maupun kehidupan bermasyarakat.",
      },
    ],
  },
  {
    id: "5",
    judul: "Selamat Purna Tugas",
    tanggal: "2026",
    kategori: "Sekolah",
    gambar: "/berita5.jpg",
    ringkasan:
      "Penghargaan dan ucapan terima kasih atas dedikasi serta pengabdian dalam mendukung pendidikan di lingkungan sekolah.",
    isi: [
      {
        subjudul: "Menghargai Pengabdian",
        paragraf:
          "Purna tugas menjadi momen untuk memberikan penghargaan kepada tenaga pendidik maupun tenaga kependidikan yang telah menyelesaikan masa pengabdiannya. Dedikasi yang diberikan selama menjalankan tugas merupakan bagian penting dari perjalanan pendidikan.",
      },
      {
        subjudul: "Kontribusi bagi Lingkungan Sekolah",
        paragraf:
          "Setiap bentuk pengabdian memiliki arti bagi perkembangan sekolah. Pengalaman, bimbingan, dan kontribusi yang telah diberikan dapat menjadi bagian dari kenangan serta pembelajaran bagi warga sekolah.",
      },
      {
        subjudul: "Ucapan Terima Kasih",
        paragraf:
          "Terima kasih atas waktu, tenaga, dan perhatian yang telah dicurahkan selama menjalankan tugas. Semoga masa purna tugas membawa kebahagiaan, kesehatan, dan kesempatan untuk menikmati waktu bersama keluarga.",
      },
    ],
  },
  {
    id: "6",
    judul: "Sistem Penerimaan Murid Baru",
    tanggal: "2026",
    kategori: "Informasi",
    gambar: "/berita6.jpg",
    ringkasan:
      "Informasi penerimaan murid baru membantu calon murid dan orang tua memahami tahapan serta ketentuan pendaftaran.",
    isi: [
      {
        subjudul: "Persiapan Pendaftaran",
        paragraf:
          "Calon murid dan orang tua perlu mempersiapkan diri sebelum mengikuti proses penerimaan murid baru. Informasi mengenai persyaratan, dokumen, jalur pendaftaran, dan jadwal perlu diperhatikan agar proses pendaftaran berjalan lebih teratur.",
      },
      {
        subjudul: "Memeriksa Informasi Resmi",
        paragraf:
          "Informasi penerimaan dapat berubah mengikuti ketentuan yang berlaku. Oleh karena itu, calon murid sebaiknya memeriksa pengumuman resmi dari sekolah atau dinas pendidikan untuk memperoleh informasi yang tepat mengenai prosedur pendaftaran.",
      },
      {
        subjudul: "Mengikuti Tahapan Pendaftaran",
        paragraf:
          "Setiap calon murid perlu mengikuti tahapan pendaftaran sesuai petunjuk resmi, termasuk melengkapi dokumen dan memeriksa kembali data yang dikirimkan. Jika terdapat hal yang belum dipahami, calon murid dapat menghubungi pihak penyelenggara melalui saluran resmi.",
      },
    ],
  },
  {
    id: "7",
    judul: "Informasi Kelulusan",
    tanggal: "2026",
    kategori: "Informasi",
    gambar: "/berita7.jpg",
    ringkasan:
      "Informasi kelulusan menjadi panduan bagi siswa untuk mengetahui pengumuman hasil akhir pendidikan dan langkah selanjutnya.",
    isi: [
      {
        subjudul: "Memeriksa Pengumuman Kelulusan",
        paragraf:
          "Siswa perlu memeriksa pengumuman kelulusan melalui saluran resmi yang ditetapkan oleh sekolah. Perhatikan informasi yang disampaikan agar tidak terjadi kesalahan dalam memahami hasil pengumuman.",
      },
      {
        subjudul: "Memperhatikan Informasi Lanjutan",
        paragraf:
          "Setelah pengumuman, siswa sebaiknya memperhatikan arahan sekolah mengenai dokumen, administrasi, dan tahapan lanjutan yang diperlukan. Jika ada informasi yang belum jelas, siswa dapat meminta penjelasan kepada pihak sekolah.",
      },
      {
        subjudul: "Mempersiapkan Langkah Berikutnya",
        paragraf:
          "Kelulusan merupakan salah satu tahap penting dalam perjalanan pendidikan. Siswa dapat mulai mempertimbangkan pilihan pendidikan lanjutan atau rencana masa depan sesuai minat, kemampuan, dan cita-cita masing-masing.",
      },
    ],
  },
  {
    id: "8",
    judul: "Upacara Masa Pengenalan Lingkungan Sekolah",
    tanggal: "2026",
    kategori: "Kesiswaan",
    gambar: "/berita8.jpg",
    ringkasan:
      "Masa Pengenalan Lingkungan Sekolah membantu murid baru mengenal lingkungan, tata tertib, dan budaya belajar.",
    isi: [
      {
        subjudul: "Menyambut Murid Baru",
        paragraf:
          "Masa Pengenalan Lingkungan Sekolah merupakan kegiatan yang membantu murid baru beradaptasi dengan lingkungan pendidikan yang baru. Melalui kegiatan ini, murid dapat mulai mengenal lingkungan sekolah dan orang-orang yang akan mendampingi proses belajar mereka.",
      },
      {
        subjudul: "Mengenal Lingkungan dan Tata Tertib",
        paragraf:
          "Pengenalan lingkungan sekolah dapat mencakup informasi mengenai fasilitas, tata tertib, kebiasaan belajar, serta berbagai layanan yang tersedia. Pemahaman tersebut membantu murid mengetahui tanggung jawab dan aturan yang perlu diperhatikan selama berada di sekolah.",
      },
      {
        subjudul: "Membangun Semangat Belajar",
        paragraf:
          "Dengan mengenal lingkungan sekolah sejak awal, murid diharapkan lebih percaya diri dalam mengikuti pembelajaran dan menjalin hubungan baik dengan teman maupun guru. Sikap saling menghormati dan menjaga kebersamaan menjadi bagian penting dalam proses adaptasi.",
      },
    ],
  },
  {
    id: "9",
    judul: "Selamat Hari Guru Nasional",
    tanggal: "2026",
    kategori: "Peringatan",
    gambar: "/berita9.jpg",
    ringkasan:
      "Hari Guru Nasional menjadi kesempatan untuk menghargai peran guru dalam membimbing dan mendidik generasi penerus.",
    isi: [
      {
        subjudul: "Peran Guru dalam Pendidikan",
        paragraf:
          "Guru memiliki peran penting dalam mendampingi siswa memahami pelajaran, mengembangkan keterampilan, dan membentuk karakter. Proses pendidikan tidak hanya berlangsung melalui penyampaian materi, tetapi juga melalui bimbingan dan keteladanan.",
      },
      {
        subjudul: "Menghargai Jasa Para Pendidik",
        paragraf:
          "Hari Guru Nasional menjadi kesempatan untuk mengungkapkan rasa hormat dan terima kasih kepada para guru atas dedikasi mereka. Dukungan, arahan, dan kesabaran guru membantu siswa menghadapi berbagai tantangan selama proses belajar.",
      },
      {
        subjudul: "Menghormati Guru dalam Keseharian",
        paragraf:
          "Apresiasi kepada guru dapat diwujudkan melalui tindakan sederhana, seperti mengikuti pembelajaran dengan baik, menghargai pendapat, menjaga sopan santun, dan bertanggung jawab terhadap tugas. Sikap tersebut merupakan bentuk penghormatan yang dapat diterapkan setiap hari.",
      },
    ],
  },
  {
    id: "10",
    judul: "Menanamkan Nilai Integritas",
    tanggal: "2026",
    kategori: "Pendidikan",
    gambar: "/berita10.jpg",
    ringkasan:
      "Nilai integritas seperti kejujuran, tanggung jawab, dan konsistensi penting dalam membangun karakter siswa.",
    isi: [
      {
        subjudul: "Apa Itu Integritas?",
        paragraf:
          "Integritas merupakan sikap yang menunjukkan kesesuaian antara perkataan dan tindakan. Seseorang yang memiliki integritas berusaha bersikap jujur, bertanggung jawab, dan tetap memegang nilai yang benar meskipun menghadapi tantangan.",
      },
      {
        subjudul: "Menerapkan Integritas di Sekolah",
        paragraf:
          "Siswa dapat menerapkan integritas dengan mengerjakan tugas secara jujur, tidak menyontek, menaati peraturan, menjaga fasilitas sekolah, dan mengakui kesalahan. Kebiasaan tersebut membantu membangun rasa percaya antara siswa, guru, dan warga sekolah lainnya.",
      },
      {
        subjudul: "Membangun Kebiasaan Positif",
        paragraf:
          "Integritas tidak terbentuk dalam satu hari, tetapi melalui kebiasaan yang dilakukan secara konsisten. Dengan membiasakan diri untuk jujur dan bertanggung jawab, siswa dapat ikut menciptakan lingkungan belajar yang lebih baik dan saling menghargai.",
      },
    ],
  },
];

export default function DetailBeritaPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const item = berita.find((beritaItem) => beritaItem.id === id);

  if (!item) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-stone-50 px-6 text-center text-green-950">
        <h1 className="text-3xl font-extrabold">
          Berita tidak ditemukan
        </h1>

        <p className="mt-3 text-gray-600">
          Berita yang kamu cari tidak tersedia.
        </p>

        <Link
          href="/berita"
          className="mt-6 rounded-xl bg-green-950 px-6 py-3 font-bold text-yellow-400 transition hover:bg-green-800"
        >
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-5 py-12 text-green-950 md:px-10 md:py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-yellow-700"
        >
          <span aria-hidden="true">←</span>
          Kembali ke Semua Berita
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* FOTO BERITA */}
          <div className="relative mt-7 h-64 overflow-hidden rounded-2xl bg-green-900 sm:h-96 md:h-[460px]">
            <img
              src={item.gambar}
              alt={item.judul}
              className="h-full w-full object-cover"
            />
          </div>

          {/* JUDUL DAN INFORMASI */}
          <div className="mt-8">
            <span className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-green-950">
              {item.kategori}
            </span>

            <p className="mt-5 text-sm font-semibold text-gray-500">
              {item.tanggal} · SMA Negeri 2 Sragen
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              {item.judul}
            </h1>

            <p className="mt-6 border-l-4 border-yellow-400 pl-4 text-lg leading-8 text-gray-700">
              {item.ringkasan}
            </p>

            {/* ISI LENGKAP BERITA */}
            <div className="mt-10 space-y-8">
              {item.isi.map((bagian, index) => (
                <motion.section
                  key={bagian.subjudul}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                >
                  <h2 className="mb-3 text-xl font-bold text-green-950 md:text-2xl">
                    {bagian.subjudul}
                  </h2>

                  <p className="text-base leading-8 text-gray-700 md:text-lg">
                    {bagian.paragraf}
                  </p>
                </motion.section>
              ))}
            </div>

            {/* INFORMASI PENUTUP */}
            <div className="mt-12 rounded-2xl bg-green-950 p-7 text-white md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                Informasi Sekolah
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                SMA Negeri 2 Sragen
              </h2>

              <p className="mt-3 leading-7 text-green-100">
                Terus ikuti informasi dan kegiatan sekolah melalui halaman
                berita SMA Negeri 2 Sragen.
              </p>

              <Link
                href="/berita"
                className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-green-950 transition hover:bg-yellow-300"
              >
                Lihat Berita Lainnya
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  );
}