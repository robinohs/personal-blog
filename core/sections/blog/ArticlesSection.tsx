import { Stack, TextInput } from "@mantine/core";
import { MagnifyingGlassIcon } from "@modulz/radix-icons";
import ArticleItem from "core/components/ArticleItem";
import Section from "core/components/Section";
import { PostMetaData } from "types/Post.type";

type ArticlesSectionProps = {
  posts: PostMetaData[];
};
const ArticlesSection = ({ posts }: ArticlesSectionProps) => {
  const searchChanged = (newSearch: string) => {};

  return (
    <Section
      title="Blog."
      subtitle="These are my newest blog articles. I love to write about the newest frameworks and technologies I'm using. You can use the search below to filter articles by title or tags."
    >
      <TextInput placeholder="Your search..." icon={<MagnifyingGlassIcon />} />
      <Stack sx={{ marginTop: "25px" }}>
        {posts.map((post) => (
          <ArticleItem key={post.slug} post={post} />
        ))}
      </Stack>
    </Section>
  );
};

export default ArticlesSection;
