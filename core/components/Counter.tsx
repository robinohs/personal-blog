import { Text } from "@mantine/core";
import { Post } from "@prisma/client";
import { PostMetaData } from "@type/Post.type";
import getViewsForPost from "@util/getViewsForPost";
import fetcher from "lib/fetcher";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type Props = {
  post: PostMetaData;
};

const Counter = ({ post }: Props) => {
  const { data: views } = useSWR<Post[]>("/api/views", fetcher);
  const [, setDidRun] = useState(false);
  useEffect(() => {
    const increaseCounter = async () => {
      await fetch("/api/views", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({ slug: post.slug }),
      });
    };
    setDidRun((oldVal) => {
      if (!oldVal) increaseCounter();
      return true;
    });
  }, [post.slug]);

  return (
    <Text color="dimmed">
      {`${getViewsForPost(post, views)?.views.toString() ?? "---"} views`}
    </Text>
  );
};

export default Counter;
