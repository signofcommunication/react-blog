import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Welcome to My Digital Space
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                A collection of my thoughts, projects, and learning journey in
                technology and education.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <Link
                  to="/blog"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Read My Blog
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600 hover:border-blue-500 transition-all duration-200"
              >
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Blog Posts
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Catatan kuliah, tutorial, dan pemikiran tentang teknologi dan
                  pendidikan.
                </p>
                <Link
                  to="/blog"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Explore →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600 hover:border-blue-500 transition-all duration-200"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white mb-3">Projects</h3>
                <p className="text-gray-300 leading-relaxed">
                  Koleksi proyek web development dan eksperimen teknologi yang
                  telah saya kerjakan.
                </p>
                <Link
                  to="/projects"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Projects →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600 hover:border-blue-500 transition-all duration-200"
              >
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-2xl font-bold text-white mb-3">About Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  Kenali saya lebih dalam, perjalanan belajar, dan passion saya
                  di dunia teknologi.
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-8"
            >
              Latest Posts
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12 bg-slate-800/30 rounded-xl border border-slate-700"
            >
              <p className="text-gray-400 mb-4">
                Recent blog posts will appear here
              </p>
              <Link
                to="/blog"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Posts
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
