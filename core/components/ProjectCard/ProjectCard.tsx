import PageLink from "@components/PageLink";
import { Badge, Card, Center, Group, Stack, Text } from "@mantine/core";
import Project from "@type/Project.type";
import React from "react";
import useStyles from "./ProjectCard.style";

const ProjectCard = ({ project }: { project: Project }) => {
  const { classes } = useStyles();
  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md" withBorder>
      <div className={classes.image} style={{ backgroundImage: `url(${`/images/${project.image}`})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Stack spacing="sm">
          <Text size="lg" className={classes.title} weight={500}>
            {project.name}
          </Text>
          <Text size="sm" className={classes.text}>
            {project.description}
          </Text>
          <Group position="apart" spacing="xs">
            <Group spacing="lg">
              <Badge color="blue" variant="dot" className={classes.listBade}>
                {project.type}
              </Badge>
              <Badge color="blue" variant="dot" className={classes.listBade}>
                {project.language}
              </Badge>
            </Group>
            <Group spacing="lg">
              {project.link && (
                <Center>
                  <PageLink sx={{ fontSize: 15 }} href={project.link} openInNewTab>
                    Repository
                  </PageLink>
                </Center>
              )}
              {project.webpage && (
                <Center>
                  <PageLink sx={{ fontSize: 15 }} href={project.webpage} openInNewTab>
                    Webpage
                  </PageLink>
                </Center>
              )}
              {project.documentation && (
                <Center>
                  {project.documentation && (
                    <PageLink sx={{ fontSize: 15 }} href={project.documentation} openInNewTab>
                      Documentation
                    </PageLink>
                  )}
                </Center>
              )}
            </Group>
          </Group>
        </Stack>
      </div>
    </Card>
  );
};

export default ProjectCard;
