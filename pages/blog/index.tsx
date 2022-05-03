import Layout from "core/components/Layout";
import ArticlesSection from "core/sections/blog/ArticlesSection";
import { getAllPosts } from "core/src/PostApi";
import { PostMetaData } from "types/Post.type";

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