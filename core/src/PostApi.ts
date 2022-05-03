import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import Post from "types/Post.type";

const POSTS_DIR = path.join(process.cwd(), "posts");

export const getAllPosts = (): Post[] => {
  const slugs = getSlugs();
  const posts = slugs
    .map((slug) => getPostFromSlug(slug))
    .sort((post1, post2) => {
      if (post1.meta.date > post2.meta.date) return -1;
      if (post1.meta.date < post2.meta.date) return 1;
      return 0;
    });
  return posts;
};

export const getSlugs = (): string[] => {
  const paths = sync("*.mdx", { cwd: POSTS_DIR });

  const slugs = paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });

  if (new Set(slugs).size !== slugs.length) {
    console.error("Attention, duplicate slugs detected...");
  }

  return slugs;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    meta: {
      title: data.title ?? slug,
      date: ((data.date as Date) ?? new Date()).toLocaleDateString("en-GB"),
      excerpt: data.excerpt ?? "",
      slug: slug,
      tags: (data.tags ?? []).sort(),
    },
    content,
  };
};
