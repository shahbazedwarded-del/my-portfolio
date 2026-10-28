"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Replace with your real email address
  const contactEmail = "your.email@example.com";

  // Replace with your actual social links
  const githubUrl = "https://github.com/";
  const linkedinUrl = "https://www.linkedin.com/";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Let's Connect
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Get In{" "}
            <span className="text-cyan-400">
              Touch
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500" />

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Have a project in mind or want to collaborate?
            Feel free to reach out!
          </p>

        </div>

        {/* Contact Grid */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left Side - Contact Details */}
          <div>

            <h3 className="mb-5 text-2xl font-bold">
              Let's talk about your project.
            </h3>

            <p className="mb-8 leading-relaxed text-gray-400">
              I'm always interested in discussing
              new projects, creative ideas, and
              opportunities to build amazing
              web experiences.
            </p>

            {/* Email */}
            <div className="mb-6 flex items-center gap-4">

              <div className="rounded-lg bg-cyan-500/10 p-4 text-2xl">
                📧
              </div>

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all text-gray-400 transition hover:text-cyan-400"
                >
                  {contactEmail}
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="mb-8 flex items-center gap-4">

              <div className="rounded-lg bg-cyan-500/10 p-4 text-2xl">
                📍
              </div>

              <div>
                <h4 className="font-semibold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Pakistan
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div>

              <h4 className="mb-4 font-semibold">
                Follow Me
              </h4>

              <div className="flex flex-wrap gap-4">

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-5 py-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-700 px-5 py-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-xl sm:p-8">

            <form onSubmit={handleSubmit}>

              {/* Name Field */}
              <div className="mb-6">

                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />

              </div>

              {/* Email Field */}
              <div className="mb-6">

                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />

              </div>

              {/* Message Field */}
              <div className="mb-6">

                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400"
                />

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-gray-950 transition duration-300 hover:bg-cyan-400"
              >
                Send Message ↗
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}