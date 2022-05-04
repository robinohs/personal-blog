import {
  Badge,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";
import { PostMetaData } from "core/types/Post.type";

type Props = {
  post: PostMetaData;
};

const ArticleItem = ({ post }: Props) => (
  <NextLink href={`blog/${post.slug}`}>
    <UnstyledButton sx={{ width: "100%" }}>
      <Stack
        spacing="xs"
        sx={(theme) => ({
          borderRadius: 5,
          textDecoration: "none",
          padding: "15px 10px",
          ":hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[1],
          },
        })}
      >
        <Title order={2}>{post.title}</Title>
        <Text color="dimmed">{post.excerpt}</Text>
        <Grid>
          <Grid.Col span={8} xs={9} md={8}>
            <Group>
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col span={4} xs={3} md={4}>
            <Text sx={{ textAlign: "end" }}>{post.date}</Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </UnstyledButton>
  </NextLink>
);

export default ArticleItem;
