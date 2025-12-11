import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";

const BlogList: React.FC = () => {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              {(post.frontmatter.title as string) || post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
