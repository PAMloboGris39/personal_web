import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal desarrollado con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Pablo Aller Moreno</h1>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-gray-300">Inicio</a></li>
                <li><a href="/about" className="hover:text-gray-300">Sobre mí</a></li>
                <li><a href="/projects" className="hover:text-gray-300">Proyectos</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contacto</a></li>
              </ul>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-600 text-white p-4 text-center">
            <p>&copy; 2025 Mi Portafolio | Todos los derechos reservados.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
