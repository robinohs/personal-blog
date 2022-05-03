import { Pagination, Stack, Text } from "@mantine/core";
import ArticleItem from "core/components/ArticleItem";
import SearchBar from "core/components/SearchBar";
import Section from "core/components/Section";
import { useEffect, useMemo, useState } from "react";
import { PostMetaData } from "types/Post.type";
import filterPosts from "utils/filterPosts";

const ARTICLES_PER_PAGE = 20;

type ArticlesSectionProps = {
  posts: PostMetaData[];
};
const ArticlesSection = ({ posts }: ArticlesSectionProps) => {
  const [activePage, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [shownPosts, setShownPosts] = useState<PostMetaData[]>([]);
  const [paginatePosts, setPaginatePosts] = useState<PostMetaData[]>([]);

  const MAX_PAGES = useMemo(
    () => Math.ceil(shownPosts.length / ARTICLES_PER_PAGE),
    [shownPosts]
  );

  useEffect(() => {
    const filteredPosts = filterPosts(query, posts);
    setShownPosts(filteredPosts);
    setPage(1);
  }, [posts, query]);

  useEffect(() => {
    const showPosts = shownPosts.slice(
      (activePage - 1) * ARTICLES_PER_PAGE,
      (activePage - 1) * ARTICLES_PER_PAGE + ARTICLES_PER_PAGE
    );
    setPaginatePosts(showPosts);
  }, [shownPosts, activePage]);

  return (
    <Section
      title="Blog."
      subtitle="These are my newest blog articles. I love to write about the newest frameworks and technologies I'm using. You can use the search below to filter articles by title or tags."
    >
      <SearchBar handler={setQuery} />
      <Stack sx={{ marginTop: "25px" }}>
        {paginatePosts.map((post) => (
          <ArticleItem key={post.slug} post={post} />
        ))}
        {shownPosts.length === 0 && query === "" && (
          <Text>No articles found.</Text>
        )}
        {shownPosts.length === 0 && query !== "" && (
          <Text>No articles found matching query `{query}`.</Text>
        )}
      </Stack>
      {shownPosts.length > 0 && (
        <Stack align="center" sx={{ marginTop: "55px" }}>
          <Pagination page={activePage} onChange={setPage} total={MAX_PAGES} />
        </Stack>
      )}
    </Section>
  );
};

export default ArticlesSection;
