
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardAdmin() {
  const router = useRouter();

  const [berita, setBerita] = useState([]);
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Kegiatan Sekolah");
  const [tanggal, setTanggal] = useState("2026-10-15");
  const [isi, setIsi] = useState("");
  const [editId, setEditId] = useState(null);
  const [cekLogin, setCekLogin] = useState(false);

  useEffect(() => {
    const statusLogin =
      localStorage.getItem("adminLogin") ||
      sessionStorage.getItem("adminLogin");

    if (statusLogin !== "true") {
      router.replace("/admin/login");
      return;
    }

    const dataTersimpan = localStorage.getItem("beritaSmanda");

    if (dataTersimpan) {
      try {
        setBerita(JSON.parse(dataTersimpan));
      } catch {
        setBerita([]);
      }
    }

    setCekLogin(true);
  }, [router]);

  function simpanBerita(dataBaru) {
    setBerita(dataBaru);
    localStorage.setItem("beritaSmanda", JSON.stringify(dataBaru));
  }

  function resetForm() {
    setJudul("");
    setKategori("Kegiatan Sekolah");
    setTanggal("2026-10-15");
    setIsi("");
    setEditId(null);
  }

  function tambahAtauEditBerita(e) {
    e.preventDefault();

    if (!judul.trim() || !isi.trim()) {
      alert("Judul dan isi berita harus diisi!");
      return;
    }

    if (editId !== null) {
      const dataBaru = berita.map((item) =>
        item.id === editId
          ? {
              ...item,
              judul: judul.trim(),
              kategori,
              tanggal,
              isi: isi.trim(),
            }
          : item
      );

      simpanBerita(dataBaru);
      alert("Berita berhasil diperbarui!");
    } else {
      const beritaBaru = {
        id: Date.now(),
        judul: judul.trim(),
        kategori,
        tanggal,
        isi: isi.trim(),
      };

      simpanBerita([beritaBaru, ...berita]);
      alert("Berita berhasil ditambahkan!");
    }

    resetForm();
  }

  function mulaiEdit(item) {
    setEditId(item.id);
    setJudul(item.judul);
    setKategori(item.kategori);
    setTanggal(item.tanggal);
    setIsi(item.isi);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function hapusBerita(id) {
    const yakin = window.confirm(
      "Apakah kamu yakin ingin menghapus berita ini?"
    );

    if (!yakin) return;

    const dataBaru = berita.filter((item) => item.id !== id);

    simpanBerita(dataBaru);

    if (editId === id) {
      resetForm();
    }

    alert("Berita berhasil dihapus.");
  }

  function keluar() {
    localStorage.removeItem("adminLogin");
    sessionStorage.removeItem("adminLogin");
    router.replace("/admin/login");
  }

  if (!cekLogin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-green-900">
          Memeriksa login admin...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-800 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-green-900 p-6 text-white shadow-lg">
          <div>
            <p className="text-sm font-bold tracking-widest text-yellow-300">
              SMA NEGERI 2 SRAGEN
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Dashboard Admin
            </h1>

            <p className="mt-2 text-sm text-green-100">
              Kelola berita dan informasi sekolah.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-lg bg-white px-4 py-2 font-semibold text-green-900 hover:bg-green-50"
            >
              Lihat Website
            </button>

            <button
              type="button"
              onClick={keluar}
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-green-800"
            >
              Keluar
            </button>
          </div>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Berita
            </p>

            <p className="mt-2 text-3xl font-bold text-green-900">
              {berita.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Pengelolaan Berita
            </p>

            <p className="mt-2 text-xl font-bold text-green-800">
              Aktif
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-xl font-bold">
            {editId !== null
              ? "Edit Berita Sekolah"
              : "Tambahkan Berita Sekolah"}
          </h2>

          <form
            onSubmit={tambahAtauEditBerita}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Judul Berita
              </label>

              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Contoh: Kegiatan Upacara Bendera"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Kategori Berita
                </label>

                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
                >
                  <option>Kegiatan Sekolah</option>
                  <option>Prestasi</option>
                  <option>Pendidikan</option>
                  <option>Pengumuman</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Tanggal Berita
                </label>

                <input
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Isi Berita
              </label>

              <textarea
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Tuliskan isi berita sekolah..."
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                required
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-lg bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
              >
                {editId !== null
                  ? "Simpan Perubahan"
                  : "+ Tambah Berita"}
              </button>

              {editId !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
                >
                  Batal Edit
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-xl font-bold">
            Daftar Berita ({berita.length})
          </h2>

          {berita.length === 0 ? (
            <p className="rounded-lg bg-gray-50 p-6 text-center text-gray-500">
              Belum ada berita. Tambahkan berita melalui formulir di atas.
            </p>
          ) : (
            <div className="space-y-4">
              {berita.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-900">
                    {item.kategori}
                  </span>

                  <h3 className="mt-3 text-lg font-bold">
                    {item.judul}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Tanggal: {item.tanggal}
                  </p>

                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6">
                    {item.isi}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => mulaiEdit(item)}
                      className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-green-950 hover:bg-yellow-300"
                    >
                      Edit Berita
                    </button>

                    <button
                      type="button"
                      onClick={() => hapusBerita(item.id)}
                      className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                    >
                      Hapus Berita
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
