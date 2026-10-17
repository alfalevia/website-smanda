
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "smanda123") {
      localStorage.setItem("adminLogin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Logo tanpa bingkai bulat */}
        <div className="mb-5 flex justify-center">
          <img
            src="/logo.jpg"
            alt="Logo SMA Negeri 2 Sragen"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Judul */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Login Admin
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            SMA Negeri 2 Sragen
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Silakan masuk untuk mengelola berita sekolah.
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              autoComplete="username"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-green-800 py-3 font-semibold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Masuk
          </button>
        </form>

        {/* Kembali ke Beranda */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-green-800 hover:underline"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>

      <p className="fixed bottom-3 px-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SMA Negeri 2 Sragen
      </p>
    </main>
  );
}
