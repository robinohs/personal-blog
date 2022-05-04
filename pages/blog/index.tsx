import type { PostMetaData } from "@type/Post.type";
import Layout from "core/components/Layout";
import { getAllPosts } from "core/scripts/PostApi";
import ArticlesSection from "core/sections/blog/ArticlesSection";

type Props = {
  posts: PostMetaData[];
};

const BlogPage = ({ posts }: Props) => {
  return (
    <Layout title="Blog" enableBreadcrumb>
      <ArticlesSection posts={posts} />
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
};
