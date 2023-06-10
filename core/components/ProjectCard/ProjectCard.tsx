import PageLink from "@components/PageLink";
import { Badge, Card, Center, Group, Stack, Text } from "@mantine/core";
import Project from "@type/Project.type";
import React from "react";
import useStyles from "./ProjectCard.style";

// const ListItem = ({ leftText, children }: { leftText: string; children: React.ReactNode }) => {
//   const { classes } = useStyles();
//   return (
//     <Group position="left" className={classes.group}>
//       <Text weight={400} className={classes.listLeft}>
//         {leftText}
//       </Text>
//       {children}
//     </Group>
//   );
// };

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
    // <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${`/images/${project.image}`})` }} className={classes.card}>
    //   <div>
    //     <Group position="apart" className={classes.group}>
    //       <Text weight={500} size="xl">
    //         {project.name}
    //       </Text>
    //     </Group>
    // <Text size="sm" className={classes.text}>
    //   {project.description}
    // </Text>
    //     {/* {project.image && <Image className={classes.image} width={200} height={100} src={`/images/${project.image}`} alt="Random unsplash image" />} */}
    //     <ListItem leftText={"Type:"}>
    // <Badge color="blue" variant="dot" className={classes.listBade}>
    //   {project.type}
    // </Badge>
    //     </ListItem>
    //     <ListItem leftText={"Language:"}>
    // <Badge color="blue" variant="dot" className={classes.listBade}>
    //   {project.language}
    // </Badge>
    //     </ListItem>
    //     <ListItem leftText={"Topics:"}>
    // <Group position="left" spacing="xs" className={classes.group}>
    //   {project.topics.map((topic) => (
    //     <Badge key={`${topic}-${project.name}`} color="blue" variant="light">
    //       {topic}
    //     </Badge>
    //   ))}
    // </Group>
    //     </ListItem>
    // {project.link && (
    //   <ListItem leftText={"Repository:"}>
    //     <PageLink sx={{ fontSize: 15 }} href={project.link} openInNewTab>
    //       Project repository
    //     </PageLink>
    //   </ListItem>
    // )}
    // {project.documentation && (
    //   <ListItem leftText={"Documentation:"}>
    //     <PageLink sx={{ fontSize: 15 }} href={project.documentation} openInNewTab>
    //       Project documentation
    //     </PageLink>
    //   </ListItem>
    // )}
    //   </div>
    // </Paper>
  );
};

export default ProjectCard;
