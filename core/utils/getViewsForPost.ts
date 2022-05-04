import { Post } from "@prisma/client";
import type { PostMetaData } from "@type/Post.type";

const getViewsForPost = (
  post: PostMetaData,
  views: Post[] | undefined
): Post | undefined => {
  if (!views) return undefined;
  const view = views.find((view) => view.slug === post.slug);
  return view;
};

export default getViewsForPost;
