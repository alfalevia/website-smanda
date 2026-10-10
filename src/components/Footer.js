import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <div className="grid gap-10 md:grid-cols-3">

          {/* IDENTITAS */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-bold text-green-950">
                S2
              </div>

              <div>
                <h2 className="font-bold">
                  SMA NEGERI 2 SRAGEN
                </h2>

                <p className="text-xs tracking-[0.2em] text-yellow-400">
                  S.M.A.R.T
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-green-100">
              Website informasi dan profil SMA Negeri 2 Sragen.
              Menjadi ruang informasi bagi siswa, orang tua,
              alumni, dan masyarakat.
            </p>
          </div>

          {/* NAVIGASI */}
          <div>
            <h3 className="mb-5 font-bold text-yellow-400">
              Navigasi
            </h3>

            <div className="flex flex-col gap-3 text-sm text-green-100">
              <Link
                href="/"
                className="transition hover:text-yellow-400"
              >
                Beranda
              </Link>

              <Link
                href="/about"
                className="transition hover:text-yellow-400"
              >
                Profil
              </Link>

              <Link
                href="/prestasi"
                className="transition hover:text-yellow-400"
              >
                Prestasi
              </Link>

              <Link
                href="/ekstrakurikuler"
                className="transition hover:text-yellow-400"
              >
                Ekstrakurikuler
              </Link>

              <Link
                href="/berita"
                className="transition hover:text-yellow-400"
              >
                Berita
              </Link>
            </div>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="mb-5 font-bold text-yellow-400">
              Informasi
            </h3>

            <div className="space-y-3 text-sm leading-6 text-green-100">
              <p>
                📍 Sragen, Jawa Tengah
              </p>

              <p>
                📧 Email sekolah
              </p>

              <p>
                ☎️ Kontak sekolah
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-green-800 pt-6 text-center text-sm text-green-200">
          © 2026 SMA Negeri 2 Sragen. All rights reserved.
        </div>

      </div>

    </footer>
  );
}