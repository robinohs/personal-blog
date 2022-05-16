import { Group, Space, Title, TypographyStylesProvider } from "@mantine/core";
import type { PostMetaData } from "@type/Post.type";
import ArticleImage from "@components/ArticleImage";
import Counter from "@components/Counter";
import Layout from "@components/Layout";
import ReadingTimeIndicator from "@components/ReadingTimeIndicator";
import YouTube from "@components/YouTube";
import { getPostFromSlug, getSlugs } from "@scripts/PostApi";
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
    <Group>
      <Counter post={meta} />
      <ReadingTimeIndicator text={source.compiledSource} />
    </Group>
    <Space h="lg" />
    <TypographyStylesProvider sx={{ fontSize: 17 }}>
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
