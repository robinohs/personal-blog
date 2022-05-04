import Fuse from "fuse.js";
import type { PostMetaData } from "@type/Post.type";

const filterPosts = (query: string, posts: PostMetaData[]) => {
  if (query === "") return posts;

  const fuse = new Fuse(posts, {
    fieldNormWeight: 0,
    includeScore: true,
    keys: ["title", "tags"],
  });

  return fuse
    .search(query)
    .filter((item) => (item.score ?? 1) < 0.01)
    .sort((a, b) => {
      const aScore = a.score ?? 0;
      const bScore = b.score ?? 0;
      if (aScore > bScore) return 1;
      if (aScore < bScore) return -1;
      return 0;
    })
    .map((item) => item.item);
};

export default filterPosts;
