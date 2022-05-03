export default interface Post {
  meta: PostMetaData;
  content: string;
}

export interface PostMetaData {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  excerpt: string;
}
