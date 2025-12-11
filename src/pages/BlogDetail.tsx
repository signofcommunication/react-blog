import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import { getPostBySlug } from "../lib/posts";
import { MDXProvider } from "../components/MDXProvider";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug!);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600">
            The post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
          >
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  const { Component, frontmatter } = post;
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white">
        {/* Header Section - Light Background */}
        <header className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 mb-6 inline-block"
              >
                ← Kembali ke Blog
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 mt-4"
            >
              {frontmatter.title as string}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 text-gray-600 text-sm"
            >
              {frontmatter.author ? (
                <span>
                  By{" "}
                  <span className="text-gray-900 font-medium">
                    {String(frontmatter.author)}
                  </span>
                </span>
              ) : null}
              {frontmatter.category ? (
                <>
                  <span>in</span>
                  <span className="text-gray-900 font-medium">
                    {String(frontmatter.category)}
                  </span>
                </>
              ) : null}
              {frontmatter.date ? (
                <>
                  <span>on</span>
                  <span className="text-gray-900">
                    {new Date(frontmatter.date as string)
                      .toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                      .toUpperCase()}{" "}
                  </span>
                </>
              ) : null}
            </motion.div>
          </div>
        </header>{" "}
        {/* Content Section - White Background */}
        <article className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          {frontmatter.excerpt ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 pb-8 border-b border-gray-200"
            >
              {" "}
              <p className="text-xl text-gray-700 leading-relaxed">
                {String(frontmatter.excerpt)}
              </p>
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MDXProvider>
              <div className="prose prose-lg max-w-none">
                <Component />
              </div>
            </MDXProvider>{" "}
          </motion.div>
        </article>
      </div>
    </AnimatedPage>
  );
};

export default BlogDetail;
