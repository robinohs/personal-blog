import { Text } from "@mantine/core";
import { Post } from "@prisma/client";
import type { PostMetaData } from "@type/Post.type";
import getViewsForPost from "@utils/getViewsForPost";
import useOneTimeEffect from "@hooks/useOneTimeEffect";
import fetcher from "lib/fetcher";
import useSWR from "swr";

type Props = {
  post: PostMetaData;
};

const Counter = ({ post }: Props) => {
  const { data: views, mutate } = useSWR<Post[]>("/api/views", fetcher);

  useOneTimeEffect(() => {
    const increase = async () => {
      await fetch("/api/views", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({ slug: post.slug }),
      });
      await mutate();
    };
    increase();
  });

  return (
    <Text color="dimmed">
      {`${getViewsForPost(post, views)?.views.toString() ?? "---"} views`}
    </Text>
  );
};

export default Counter;
