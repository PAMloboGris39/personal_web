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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Pablo Aller Moreno</h1>
              <ul className="flex space-x-6">
                <li><a href="#hero" className="hover:text-gray-300">Inicio</a></li>
                <li><a href="#projects" className="hover:text-gray-300">Proyectos</a></li>
                <li><a href="#about" className="hover:text-gray-300">Sobre mí</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contacto</a></li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16 bg-gray-100 text-gray-900 min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
            <p>&copy; 2025 Mi Portafolio | Todos los derechos reservados.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
