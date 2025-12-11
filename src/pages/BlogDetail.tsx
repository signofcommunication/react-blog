import React from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug!);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { Component, frontmatter } = post;

  return (
    <div>
      <h1>{frontmatter.title as string}</h1>
      <Component />
    </div>
  );
};

export default BlogDetail;
