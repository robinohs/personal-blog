import { Avatar, Box, Text } from "@mantine/core";
import PageLink from "@components/PageLink";
import Section from "@components/Section";

const AboutMeSection = () => (
  <Section title={"About Me."}>
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column-reverse",
        gap: 25,
        "@media (min-width: 800px)": {
          display: "relative",
          justifyItems: "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
        },
      }}
    >
      <Text
        sx={(theme) => ({
          textAlign: "center",
          "@media (min-width: 800px)": {
            textAlign: "left",
          },
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[5]
              : theme.colors.gray[8],
        })}
      >
        Hi. My name is Robin and I am currently doing my masters degree in
        Computer Science at{" "}
        <PageLink href="https://www.uni-saarland.de/en/home.html">
          Saarland University (Germany)
        </PageLink>{" "}
        which I will complete in early 2023.
        <br />
        <br />
        My passion is Web Development, Space technologies and Mobile
        Development. The bachelor program{" "}
        <PageLink href="https://www.uni-saarland.de/en/study/programmes/bachelor/cybersecurity.html">
          Cybersecurity
        </PageLink>{" "}
        made me aware for secure and bug-free code, which is why I wrote my
        bachelor thesis about generating automated software tests for Android
        applications.
        <br />
        <br />
        In the time between my bachelor&apos;s degree and the starting of the
        master&apos;s program I worked eight months in a scrum team for the
        German Airforce (Luftwaffe) as a Full-Stack developer.
        <br />
        Using modern agile software development concepts, I gathered experience
        with Continuous Integration and tools like{" "}
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
        During my master studies I work as a Student Assistant at the chair for
        Dependable Systems and Software at Saarland University.
        <br />
        My task is to develop a Full-Stack Satellite Simulator using{" "}
        <PageLink href="https://reactjs.org/">React</PageLink> and{" "}
        <PageLink href="https://spring.io/">Spring Boot</PageLink> with{" "}
        <PageLink href="https://www.orekit.org/">Orekit</PageLink> for space
        related computations.
      </Text>
      <Avatar size={120} radius={"md"} src="/user.jpg" />
    </Box>
  </Section>
);

export default AboutMeSection;
