export default function About() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="bg-gray-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Side - Introduction */}
          <div>
            <h3 className="mb-6 text-2xl font-bold leading-snug md:text-3xl">
              Passionate About Building
              <span className="text-cyan-400">
                {" "}Web Experiences
              </span>
            </h3>

            <p className="mb-5 leading-relaxed text-gray-400">
              Im Shahbaz Khan, a Frontend Developer
              who enjoys creating modern, responsive,
              and user-friendly websites.
            </p>

            <p className="mb-5 leading-relaxed text-gray-400">
              I love learning new technologies,
              solving problems, and bringing creative
              ideas to life through code.
            </p>

            <p className="leading-relaxed text-gray-400">
              My goal is to build websites that
              not only look great but also provide
              excellent user experiences.
            </p>
          </div>

          {/* Right Side - Skills and Information */}
          <div className="space-y-6">

            {/* Skills Card */}
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:border-cyan-500/50">

              <h3 className="mb-5 text-xl font-semibold">
                💻 My Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Card */}
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-6 transition duration-300 hover:border-cyan-500/50">

              <h3 className="mb-3 text-xl font-semibold">
                🎯 My Focus
              </h3>

              <p className="leading-relaxed text-gray-400">
                Building responsive websites,
                creating clean user interfaces,
                and continuously improving my
                frontend development skills.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}