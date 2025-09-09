import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";

const playfair = localFont({
  src: "../public/fonts/PlayfairDisplay-Regular.woff2",
  variable: "--font-playfair",
  weight: "400"
});

const raleway = localFont({
  src: "../public/fonts/Raleway-Thin.woff2",
  variable: "--font-raleway",
  weight: "300"
});

const sourceSans = localFont({
  src: "../public/fonts/SourceSans3-Roman.woff2",
  variable: "--font-source-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sucre Que Queremos",
  description: "Tu plataforma para un futuro mejor en Sucre",
  icons: {
    icon: "/favicon.ico",
  },
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
      <body className={`${playfair.variable} ${raleway.variable} ${sourceSans.variable} font-sans min-h-screen flex flex-col`}>
        <header className="fixed top-0 z-50 w-full">
            <div className="mt-2 mx-auto max-w-3xl bg-white/75 rounded-2xl h-fit px-10 py-4 shadow-2xl backdrop-blur-lg flex flex-row items-center justify-between">
            <img src="./logo.svg" alt="Sucre Que Queremos Logo" className="w-15 h-15"/>
            <nav className="flex gap-5">
              <Link href="/" className="text-red-500 hover:underline font-raleway">Noticias</Link>
              <Link href="/" className="text-red-500 hover:underline font-raleway">Opiniones</Link>
              <Link href="/" className="text-red-500 hover:underline font-raleway flex flex-row items-center justify-center gap-2">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-current w-4 h-4"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 h-screen">{children}</main>
        <footer className="text-white flex items-center">
          <div className="w-full p-4 shadow-md flex flex-col items-center justify-center gap-4 mx-auto">
            <img src="./logo.svg" alt="Sucre Que Queremos Logo" className="w-20 h-20"/>
            <p className="text-gray-500 text-sm font-bold">© 2024 Sucre Que Queremos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}