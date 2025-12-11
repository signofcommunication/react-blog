import type { ComponentType } from 'react';

interface Post {
  slug: string;
  frontmatter: Record<string, unknown>;
  Component: ComponentType;
}

export const posts = import.meta.glob('/content/posts/**/*.mdx', { eager: true });

export function getAllPosts(): Post[] {
  return Object.entries(posts).map(([path, module]: [string, unknown]) => {
    const mod = module as { frontmatter: Record<string, unknown>; default: ComponentType };
    const slug = path.replace('/content/posts/', '').replace('.mdx', '');
    return {
      slug,
      frontmatter: mod.frontmatter,
      Component: mod.default,
    };
  });
}

export function getPostBySlug(slug: string): Post | null {
  const path = `/content/posts/${slug}.mdx`;
  const module = posts[path] as unknown;
  if (!module) return null;
  const mod = module as { frontmatter: Record<string, unknown>; default: ComponentType };
  return {
    slug,
    frontmatter: mod.frontmatter,
    Component: mod.default,
  };
}
