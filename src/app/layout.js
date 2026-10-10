import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "SMA Negeri 2 Sragen",
  description: "Website Profil SMA Negeri 2 Sragen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-stone-50 text-gray-900">
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}