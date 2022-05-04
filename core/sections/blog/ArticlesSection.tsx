import { Text } from "@mantine/core";
import ArticleItem from "core/components/ArticleItem";
import PaginatedList from "core/components/PaginatedList";
import SearchBar from "core/components/SearchBar";
import Section from "core/components/Section";
import { useEffect, useState } from "react";
import { PostMetaData } from "core/types/Post.type";
import filterPosts from "core/utils/filterPosts";

const ARTICLES_PER_PAGE = 20;

type ArticlesSectionProps = {
  posts: PostMetaData[];
};
const ArticlesSection = ({ posts }: ArticlesSectionProps) => {
  const [query, setQuery] = useState("");
  const [shownPosts, setShownPosts] = useState<PostMetaData[]>([]);

  useEffect(() => {
    const filteredPosts = filterPosts(query, posts);
    setShownPosts(filteredPosts);
  }, [posts, query]);

  return (
    <Section
      title="Blog."
      subtitle="These are my newest blog articles. I love to write about the newest frameworks and technologies I'm using. You can use the search below to filter articles by title or tags."
    >
      <SearchBar handler={setQuery} />
      <PaginatedList
        sx={{ marginTop: "25px" }}
        itemsPerPage={ARTICLES_PER_PAGE}
        items={shownPosts}
      >
        {(post) => <ArticleItem key={post.slug} post={post} />}
      </PaginatedList>
      {shownPosts.length === 0 && query === "" && (
        <Text>No articles found.</Text>
      )}
      {shownPosts.length === 0 && query !== "" && (
        <Text>No articles found matching query `{query}`.</Text>
      )}
    </Section>
  );
};

export default ArticlesSection;
