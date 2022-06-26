import PageLink from "@components/PageLink";
import { Badge, Card, Group, Image, Text } from "@mantine/core";
import Project from "@type/Project.type";
import React from "react";
import useStyles from "./ProjectCard.style";

const ListItem = ({
  leftText,
  children,
}: {
  leftText: string;
  children: React.ReactNode;
}) => {
  const { classes } = useStyles();
  return (
    <Group position="left" className={classes.group}>
      <Text weight={400} className={classes.listLeft}>
        {leftText}
      </Text>
      {children}
    </Group>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" p="lg" mb="lg">
      <Group position="apart" className={classes.group}>
        <Text weight={500} size="xl">
          {project.name}
        </Text>
      </Group>
      <Text size="sm" className={classes.text}>
        {project.description}
      </Text>
      {project.image && (
        <Image
          className={classes.image}
          radius="md"
          src={`/images/${project.image}`}
          alt="Random unsplash image"
        />
      )}
      <ListItem leftText={"Type:"}>
        <Badge color="blue" variant="dot" className={classes.listBade}>
          {project.type}
        </Badge>
      </ListItem>
      <ListItem leftText={"Language:"}>
        <Badge color="blue" variant="dot" className={classes.listBade}>
          {project.language}
        </Badge>
      </ListItem>
      <ListItem leftText={"Topics:"}>
        <Group position="left" spacing="xs" className={classes.group}>
          {project.topics.map((topic) => (
            <Badge key={topic} color="blue" variant="light">
              {topic}
            </Badge>
          ))}
        </Group>
      </ListItem>
      <ListItem leftText={"Repository:"}>
        <PageLink sx={{ fontSize: 15 }} href={project.link}>
          Project repository
        </PageLink>
      </ListItem>
    </Card>
  );
};

export default ProjectCard;
