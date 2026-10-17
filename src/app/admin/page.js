"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("adminLogin", "true");
      router.replace("/");
    } else {
      setError("Username atau password salah.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <p className="mb-2 text-sm font-bold tracking-widest text-green-700">
          SMA NEGERI 2 SRAGEN
        </p>

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Login
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Silakan login untuk masuk ke website.
        </p>

        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan username"
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-700"
          required
        />

        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-green-700"
          required
        />

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-green-800 px-4 py-3 font-semibold text-white transition hover:bg-green-900"
        >
          Masuk ke Website
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          Demo login: admin / admin123
        </p>
      </form>
    </main>
  );
}