import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";

const BlogList: React.FC = () => {
  const posts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    posts.forEach(post => {
      const category = post.frontmatter.category as string;
      if (category) {
        categorySet.add(category);
      }
    });
    return Array.from(categorySet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        post => (post.frontmatter.category as string) === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => {
        const title = (post.frontmatter.title as string)?.toLowerCase() || "";
        const excerpt =
          (post.frontmatter.excerpt as string)?.toLowerCase() || "";
        const category =
          (post.frontmatter.category as string)?.toLowerCase() || "";
        const author = (post.frontmatter.author as string)?.toLowerCase() || "";

        return (
          title.includes(query) ||
          excerpt.includes(query) ||
          category.includes(query) ||
          author.includes(query)
        );
      });
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-400 mb-6">
            Kumpulan catatan dan materi kuliah
          </p>{" "}
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari blog berdasarkan judul, kategori, atau penulis..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-400">Filter:</span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  Semua
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
          {(searchQuery || selectedCategory) && (
            <p className="mt-3 text-gray-400 text-sm">
              Ditemukan {filteredPosts.length} hasil
              {selectedCategory && ` dalam kategori "${selectedCategory}"`}
              {searchQuery && ` untuk "${searchQuery}"`}
            </p>
          )}
        </header>{" "}
        <div className="grid gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 hover:border-slate-600 transition-all duration-200"
              >
                <h2 className="text-2xl font-bold text-white mb-3">
                  {(post.frontmatter.title as string) || post.slug}
                </h2>

                {post.frontmatter.excerpt ? (
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {String(post.frontmatter.excerpt)}
                  </p>
                ) : null}

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {post.frontmatter.category ? (
                    <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full">
                      {String(post.frontmatter.category)}
                    </span>
                  ) : null}
                  {post.frontmatter.date ? (
                    <span>
                      {new Date(
                        post.frontmatter.date as string
                      ).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  ) : null}
                  {post.frontmatter.author ? (
                    <span>• {String(post.frontmatter.author)}</span>
                  ) : null}
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Tidak ada blog yang ditemukan
                {selectedCategory && ` dalam kategori "${selectedCategory}"`}
                {searchQuery && ` untuk "${searchQuery}"`}
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filter
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
