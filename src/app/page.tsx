import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only rounded-md bg-cyan-500 p-3 text-gray-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Website Content */}
      <main
        id="main-content"
        className="min-h-screen bg-gray-950 text-white"
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}