import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Next.js Image Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
