export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-6 pt-24 text-white"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Availability Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Available for opportunities
        </div>

        {/* Introduction */}
        <p className="mb-4 text-lg text-gray-400">
          Hello, Im
        </p>

        {/* Name */}
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl">
          Ahmed Ali
        </h1>

        {/* Job Title */}
        <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          I build beautiful, responsive, and user-friendly
          web experiences using modern technologies.
          I love turning creative ideas into real websites.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-gray-950 transition duration-300 hover:bg-cyan-400"
          >
            View My Work ↗
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-700 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}