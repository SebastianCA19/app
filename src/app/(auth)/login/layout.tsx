import "../../globals.css";
import type { Viewport } from "next";
import localFont from "next/font/local";

const playfair = localFont({
  src: "../../../../public/fonts/PlayfairDisplay-Regular.woff2",
  variable: "--font-playfair",
  weight: "400",
});

const raleway = localFont({
  src: "../../../../public/fonts/Raleway-Thin.woff2",
  variable: "--font-raleway",
  weight: "500"
});

const sourceSans = localFont({
  src: "../../../../public/fonts/SourceSans3-Roman.woff2",
  variable: "--font-source-sans",
  weight: "400",
});
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <title>Login</title>
        </head>
        <body className={`${playfair.variable} ${raleway.variable} ${sourceSans.variable} min-h-screen flex flex-col bg-gray-50`}>
            {children}
        </body>
        </html>
  );
}
