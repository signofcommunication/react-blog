import React from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="min-h-screen bg-white">
      {/* Header Section - Light Background */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <Link
            to="/blog"
            className="text-gray-600 hover:text-gray-900 mb-6 inline-block"
          >
            ← Kembali ke Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 mt-4">
            {frontmatter.title as string}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 text-sm">
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
                    .toUpperCase()}
                </span>
              </>
            ) : null}
          </div>
        </div>
      </header>{" "}
      {/* Content Section - White Background */}
      <article className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        {frontmatter.excerpt ? (
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed">
              {String(frontmatter.excerpt)}
            </p>
          </div>
        ) : null}

        <MDXProvider>
          <div className="prose prose-lg max-w-none">
            <Component />
          </div>
        </MDXProvider>
      </article>
    </div>
  );
};

export default BlogDetail;
