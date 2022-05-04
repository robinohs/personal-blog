import { Space, Title, TypographyStylesProvider } from "@mantine/core";
import type { PostMetaData } from "@type/Post.type";
import ArticleImage from "core/components/ArticleImage";
import Counter from "core/components/Counter";
import Layout from "core/components/Layout";
import YouTube from "core/components/YouTube";
import { getPostFromSlug, getSlugs } from "core/scripts/PostApi";
import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

type PostMDX = {
  meta: PostMetaData;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const BlogDetailPage = ({ source, meta }: PostMDX) => (
  <Layout title={meta.title} enableBreadcrumb>
    <Title order={1}>{meta.title}</Title>
    <Counter post={meta} />
    <Space h="lg" />
    <TypographyStylesProvider>
      <MDXRemote {...source} components={{ YouTube, ArticleImage }} />
    </TypographyStylesProvider>
  </Layout>
);

export default BlogDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutoLinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      meta: meta,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
