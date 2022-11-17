import PageLink from "@components/PageLink";
import Section from "@components/Section";
import { Avatar, Box, Text } from "@mantine/core";
import useStyles from "./AboutMeSection.style";

const AboutMeSection = () => {
  const { classes } = useStyles();
  return (
    <Section title={"About Me."}>
      <Box className={classes.wrapper}>
        <Text className={classes.text}>
          Hi. My name is Robin and I am currently doing my masters degree in
          Computer Science at{" "}
          <PageLink href="https://www.uni-saarland.de/en/home.html">
            Saarland University (Germany)
          </PageLink>{" "}
          which I will finish in 2023.
          <br />
          <br />
          My passions are developing for the web, anything related to the aerospace as well as the financial markets. The bachelor program{" "}
          <PageLink href="https://www.uni-saarland.de/en/study/programmes/bachelor/cybersecurity.html">
            Cybersecurity
          </PageLink>{" "}
          made me aware for secure and bug-free code, which is why I wrote my
          bachelor thesis about generating automated software tests for Android
          applications.
          <br />
          <br />
          In the time between my bachelor&apos;s degree and the start of my
          master&apos;s program, I worked eight months in a Scrum team within
          German Airforce (Luftwaffe) as a full-stack developer.
          <br />
          Using modern agile software development concepts, I gained valuable first experiences with Continuous Integration and tools like{" "}
          <PageLink href="https://www.atlassian.com/software/jira">
            Jira
          </PageLink>{" "}
          and{" "}
          <PageLink href="https://www.atlassian.com/software/confluence">
            Confluence
          </PageLink>
          .
          <br />
          <br />
          During my master studies I worked as a student assistant at the chair
          for Dependable Systems and Software at Saarland University.
          <br />
          My task was to develop a Full-Stack Satellite Simulator using{" "}
          <PageLink href="https://reactjs.org/">React</PageLink> and{" "}
          <PageLink href="https://spring.io/">Spring Boot</PageLink> with{" "}
          <PageLink href="https://www.orekit.org/">Orekit</PageLink> for space
          related computations.
        </Text>
        <Avatar size={120} radius={"md"} src="/user.jpg" />
      </Box>
    </Section>
  );
};

export default AboutMeSection;
