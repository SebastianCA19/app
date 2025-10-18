import "../../globals.css";
import type { Viewport } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/Sidebar";

const roboto = localFont({
  src: "../../../../public/fonts/Roboto-Regular.woff2",
  variable: "--font-roboto",
  weight: "400",
});

const sansationBold = localFont({
  src: "../../../../public/fonts/Sansation-Bold.woff2",
  variable: "--font-sansation-bold",
  weight: "400",
});

const sansationLight = localFont({
  src: "../../../../public/fonts/Sansation-Light.woff2",
  variable: "--font-sansation-light",
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
  <body className="min-h-screen flex bg-gray-50">
    {/* Sidebar */}
    <Sidebar />

    {/* Main */}
    <main className="flex-1 h-screen overflow-y-auto pl-0 md:pl-4">
      {children}
    </main>
  </body>
</html>

  );
}
