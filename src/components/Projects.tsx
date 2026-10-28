type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  icon: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "BookStore App",
      description:
        "A bookstore application featuring user authentication, book browsing, shopping cart, wishlist, and order management.",
      technologies: ["Flutter", "Dart", "Firebase"],
      icon: "📚",
    },
    {
      id: 2,
      title: "Insurance Management System",
      description:
        "An insurance management platform designed to organize insurance-related workflows and records.",
      technologies: ["Web Development", "Database"],
      icon: "🛡️",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A modern, responsive personal portfolio website built to showcase my skills, projects, and experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: "💻",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Here are some projects I've worked on
            to improve my skills and build useful applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Project Icon Area */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-800 to-cyan-950">
                <span
                  className="text-7xl transition duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {project.icon}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Project Title */}
                <h3 className="mb-3 text-xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 border-t border-gray-800 pt-5">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-300 transition hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="text-sm text-gray-500">
                      Project links coming soon
                    </span>
                  )}

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}