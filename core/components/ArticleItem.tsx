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
import type { Post } from "@prisma/client";
import type { PostMetaData } from "@type/Post.type";

type Props = {
  post: PostMetaData;
  views: Post | undefined;
};

const ArticleItem = ({ post, views }: Props) => (
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
        <Grid>
          <Grid.Col span={8} xs={9} md={8}>
            <Title order={2}>{post.title}</Title>
          </Grid.Col>
          <Grid.Col span={4} xs={3} md={4}>
            <Text
              color="dimmed"
              sx={{ textAlign: "end" }}
            >{`${views?.views.toString()} views`}</Text>
          </Grid.Col>
        </Grid>
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
            <Text color="dimmed" sx={{ textAlign: "end" }}>
              {post.date}
            </Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </UnstyledButton>
  </NextLink>
);

export default ArticleItem;
