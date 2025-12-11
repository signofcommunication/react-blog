import React from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  status: "completed" | "in-progress" | "planned";
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "React Blog with MDX",
      description:
        "A modern blog built with React, TypeScript, and MDX. Features include markdown rendering, category filtering, and search functionality.",
      technologies: ["React", "TypeScript", "MDX", "Tailwind CSS", "Vite"],
      github: "#",
      status: "in-progress",
    },
    {
      id: "2",
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing my projects, skills, and blog posts with a modern and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
      status: "completed",
    },
    {
      id: "3",
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with drag-and-drop functionality and local storage.",
      technologies: ["React", "TypeScript", "React DnD", "LocalStorage"],
      status: "planned",
    },
  ];

  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      completed: "bg-green-100 text-green-800 border-green-300",
      "in-progress": "bg-blue-100 text-blue-800 border-blue-300",
      planned: "bg-gray-100 text-gray-800 border-gray-300",
    };

    const labels = {
      completed: "Completed",
      "in-progress": "In Progress",
      planned: "Planned",
    };

    return (
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full border ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl lg:text-2xl text-purple-100 max-w-3xl"
            >
              A showcase of my web development projects, experiments, and
              learning endeavors
            </motion.p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group"
              >
                {/* Project Image Placeholder */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-48 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {getStatusBadge(project.status)}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 px-4 py-2 bg-gray-800 text-white text-center rounded-lg font-medium hover:bg-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State or Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-12 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                More Projects Coming Soon!
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and experiments. Check
                back regularly to see what I've been building, or follow my blog
                for updates on my latest work.
              </p>
              <a
                href="/blog"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Read My Blog
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {projects.filter(p => p.status === "completed").length}
                </div>
                <div className="text-gray-600 font-medium">
                  Completed Projects
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {projects.filter(p => p.status === "in-progress").length}
                </div>
                <div className="text-gray-600 font-medium">In Progress</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {new Set(projects.flatMap(p => p.technologies)).size}
                </div>
                <div className="text-gray-600 font-medium">
                  Technologies Used
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
