
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menus = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/about" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Ekstrakurikuler", href: "/ekstrakurikuler" },
  { label: "Berita", href: "/berita" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center"
        >
          <div>
            <p className="text-sm font-bold text-white">
              SMA NEGERI 2 SRAGEN
            </p>
            <p className="text-xs text-yellow-400">S.M.A.R.T</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              aria-current={isActive(menu.href) ? "page" : undefined}
              className={`relative rounded-lg px-4 py-2 font-semibold transition-colors duration-300 ${
                isActive(menu.href)
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {menu.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-yellow-400 transition-transform duration-300 ${
                  isActive(menu.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/30 px-3 py-2 text-xl text-white transition hover:bg-white/10 md:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mx-4 rounded-xl border border-white/15 bg-green-950/95 p-3 shadow-xl backdrop-blur-md md:hidden">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive(menu.href) ? "page" : undefined}
              className={`mb-1 block rounded-lg px-4 py-3 font-semibold transition ${
                isActive(menu.href)
                  ? "bg-yellow-400/10 text-yellow-400"
                  : "text-white hover:bg-white/10 hover:text-yellow-400"
              }`}
            >
              {menu.label}
              {isActive(menu.href) && " ✓"}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}