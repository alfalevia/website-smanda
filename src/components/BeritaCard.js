import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* BAGIAN ATAS */}
      <div className="flex h-44 items-center justify-center bg-green-900">

        <div className="text-center text-white">
          <div className="text-4xl">📰</div>

          <p className="mt-2 text-sm font-semibold">
            SMA Negeri 2 Sragen
          </p>
        </div>

      </div>

      {/* ISI */}
      <div className="p-6">

        <div className="flex items-center justify-between gap-3">

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
            {item.kategori}
          </span>

          <span className="text-xs text-gray-500">
            {item.tanggal}
          </span>

        </div>

        <h2 className="mt-4 text-xl font-bold leading-7 text-green-950">
          {item.judul}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {item.ringkasan}
        </p>

        <Link
          href={`/berita/${item.id}`}
          className="mt-5 inline-block font-bold text-green-800 transition hover:text-green-950"
        >
          Baca Selengkapnya →
        </Link>

      </div>

    </article>
  );
}