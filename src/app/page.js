import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white p-8">
        <h1 className="text-5xl font-bold">Hi, I'm Pablo Aller</h1>
        <p className="text-xl mt-4">Software Engineering & Web Development Student</p>
        <a href="#projects" className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white text-lg hover:bg-blue-600 transition">
          View My Projects
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white p-8 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="mt-2 text-gray-600">A collection of my recent work</p>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="mt-2 text-gray-600">Built with Next.js and Tailwind CSS</p>
            <a href="#" className="mt-3 text-blue-600 hover:text-blue-700">View Project</a>
          </div>
          <p className="text-gray-500 italic">More projects coming soon...</p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-gray-100 p-8 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I'm a 20-year-old Software Engineering student at Universitat Oberta de Catalunya,
          also pursuing a Higher Vocational Training in Web Development at CPIFP Los Enlaces in Zaragoza.
          Passionate about technology, travel, and continuous learning.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <ul className="mt-3 text-gray-600">
            <li>JavaScript, HTML, CSS</li>
            <li>React, Next.js, Tailwind CSS</li>
            <li>Sociable, Adaptable, Eager to Learn</li>
            <li>Spanish (Native), English (Fluent)</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 text-white p-8 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-2">Let's get in touch!</p>
        <p className="mt-4">Email: <a href="mailto:pablo.aller.moreno@gmail.com" className="text-blue-400 hover:underline">pablo.aller.moreno@gmail.com</a></p>
      </section>
    </div>
  );
}
