export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold"
            >
              Shahbaz<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-3 text-gray-400">
              Frontend Developer
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Building modern web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {currentYear} Shahbaz Khan.
            All rights reserved.
          </p>

          <p>
            Made with{" "}
            <span className="text-cyan-400">
              Next.js & Tailwind CSS
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}