import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl lg:text-2xl text-blue-100"
            >
              Passionate learner exploring the intersection of technology and
              education
            </motion.p>
          </div>
        </header>{" "}
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Introduction with Photo */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 hover:shadow-3xl transition-shadow">
                  <img
                    src="/REL08131.JPG"
                    alt="Jeriko"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Hello, I'm Jeriko! 👋
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I'm a student passionate about web development, technology,
                    and continuous learning. This blog serves as my digital
                    notebook where I document my learning journey, share
                    insights from my courses, and showcase projects I've been
                    working on.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Currently, I'm focusing on modern web technologies,
                    including React, TypeScript, and various frontend
                    frameworks. I believe in learning by doing and sharing
                    knowledge with others.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Git & GitHub",
                "HTML & CSS",
                "Responsive Design",
                "Web Development",
              ].map(skill => (
                <div
                  key={skill}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 text-center font-medium text-gray-800 hover:shadow-md transition-shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Interests */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Education & Interests
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  📚 Current Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Studying various subjects including Civic Education
                  (Pendidikan Kewarganegaraan), and actively learning modern web
                  development practices and frameworks.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  💡 Interests
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Web Development, UI/UX Design, Open Source, Technology
                  Education, and Building Projects that Solve Real Problems.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Blog */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why This Blog?
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                I created this blog to document my learning journey and share
                knowledge with others. Writing about what I learn helps me
                understand concepts better and hopefully helps others who are on
                a similar path.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each blog post represents notes from my classes, insights from
                projects, or explorations into new technologies. I believe in
                learning in public and contributing to the community.
              </p>
            </div>
          </section>

          {/* Connect */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-700 mb-8">
              Interested in collaborating or just want to chat? Feel free to
              reach out!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/blog"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read My Blog
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
