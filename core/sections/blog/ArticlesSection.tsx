import ArticleItem from "@components/ArticleItem";
import PaginatedList from "@components/PaginatedList";
import SearchableList from "@components/SearchableList";
import Section from "@components/Section";
import { Text } from "@mantine/core";
import { Post } from "@prisma/client";
import type { PostMetaData } from "@type/Post.type";
import createFilter from "@utils/createSearch";
import getViewsForPost from "@utils/getViewsForPost";
import fetcher from "lib/fetcher";
import { useState } from "react";
import useSWR from "swr";

const ARTICLES_PER_PAGE = 20;

type ArticlesSectionProps = {
  posts: PostMetaData[];
};
const ArticlesSection = ({ posts }: ArticlesSectionProps) => {
  const { data: views } = useSWR<Post[]>("/api/views", fetcher);
  const [query, setQuery] = useState("");
  return (
    <Section
      title="Blog."
      subtitle="These are my newest blog articles. I love to write about the newest frameworks and technologies I'm using. You can use the search below to filter articles by title or tags."
    >
      <SearchableList
        items={posts}
        searchFilter={createFilter(["tags", "title"])}
        getQueryHandler={setQuery}
      >
        {(items) => (
          <>
            <PaginatedList
              sx={{ marginTop: "25px" }}
              itemsPerPage={ARTICLES_PER_PAGE}
              items={items}
            >
              {(post) => (
                <ArticleItem
                  key={post.slug}
                  post={post}
                  views={getViewsForPost(post, views)}
                />
              )}
            </PaginatedList>
            {items.length === 0 && query === "" && (
              <Text>No articles found.</Text>
            )}
            {items.length === 0 && query !== "" && (
              <Text>No articles found matching query `{query}`.</Text>
            )}
          </>
        )}
      </SearchableList>
    </Section>
  );
};

export default ArticlesSection;
