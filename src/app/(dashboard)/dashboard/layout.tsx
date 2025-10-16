import "../../globals.css";
import type { Viewport } from "next";
import localFont from "next/font/local";

const roboto = localFont({
    src: "../../../../public/fonts/Roboto-Regular.woff2",
    variable: "--font-roboto",
    weight: "400"
});

const sansationBold = localFont({
    src:"../../../../public/fonts/Sansation-Bold.woff2",
    variable: "--font-sansation-bold",
    weight: "400"
});

const sansationLight = localFont({
    src: "../../../../public/fonts/Sansation-Light.woff2",
    variable: "--font-sansation-light",
    weight: "400"
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex flex-1">
          {/* Sidebar - solo visible en desktop */}
          <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-lg rounded-r-2xl">
            <div className="p-4 font-bold text-xl">Mi Dashboard</div>
            <nav className="flex-1 p-4 flex flex-col gap-4">
              <a href="#" className="hover:text-blue-600">Inicio</a>
              <a href="#" className="hover:text-blue-600">Reportes</a>
              <a href="#" className="hover:text-blue-600">Usuarios</a>
              <a href="#" className="hover:text-blue-600">Configuración</a>
            </nav>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 min-h-screen md:min-h-0 md:pt-0 ml-none mb-2 md:mb-0 md:mb-none md:ml-2 pb-14 md:pb-0">
            {children}
          </main>
        </div>

        {/* Navbar inferior - solo visible en móvil */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex justify-around items-center p-2">
          <a href="#" className="flex flex-col items-center text-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 6h6v6m-6-6v6H7v-6" /></svg>
            Inicio
          </a>
          <a href="#" className="flex flex-col items-center text-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 114 0v6m-6 0h6" /></svg>
            Reportes
          </a>
          <a href="#" className="flex flex-col items-center text-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zM17 9c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zM7 9c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" /></svg>
            Usuarios
          </a>
          <a href="#" className="flex flex-col items-center text-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Config
          </a>
        </nav>
      </body>
    </html>
  );
}
