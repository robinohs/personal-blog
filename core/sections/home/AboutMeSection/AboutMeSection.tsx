import PageLink from "@components/PageLink";
import Section from "@components/Section";
import { Avatar, Box, List, Text } from "@mantine/core";
import useStyles from "./AboutMeSection.style";

const AboutMeSection = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Section id="about" title={"About Me."} sx={(theme) => ({ backgroundColor: theme.colorScheme === "dark" ? "#1e1e1e" : "white" })}>
        <Box className={classes.wrapper}>
          <Text className={classes.text}>
            Hi. My name is Robin and I am currently doing my masters degree in Computer Science at <PageLink href="https://www.uni-saarland.de/en/home.html">Saarland University (Germany)</PageLink> which I will complete at the end of 2023.
            <br />
            <br />
            My passion is web development and space technologies. The bachelor program <PageLink href="https://www.uni-saarland.de/en/study/programmes/bachelor/cybersecurity.html">Cybersecurity</PageLink> made me aware for secure and bug-free code, which motivated my bachelor thesis about generating automated software tests for Android applications.
            <br />
            <br />
            In the time between my bachelor&apos;s degree and the starting of the master&apos;s program I worked eight months in a scrum team for the German Airforce (Luftwaffe). Using modern agile software development concepts, I gathered experience with Continuous Integration and tools like <PageLink href="https://www.atlassian.com/software/jira">Jira</PageLink> or <PageLink href="https://www.atlassian.com/software/confluence">Confluence</PageLink>
            .
            <br />
            <br />
            During my master studies I worked as a student assistant at the chair &quot;Dependable Systems and Software&quot; at Saarland University. My tasks included:
            <List className={classes.text}>
              <List.Item>
                the development of a satellite energy simulator using <PageLink href="https://reactjs.org/">React</PageLink> and <PageLink href="https://spring.io/">Spring Boot</PageLink> with the help of <PageLink href="https://www.orekit.org/">Orekit</PageLink> for space related computations,
              </List.Item>
              <List.Item>the contribution to a Rust library for making applications resource-aware,</List.Item>
              <List.Item>the implementation of a system daemon to enable carbon-aware operating systems</List.Item>
            </List>
          </Text>
          <Avatar size={120} radius={"md"} src="/user.jpg" />
        </Box>
      </Section>
    </Box>
  );
};

export default AboutMeSection;
