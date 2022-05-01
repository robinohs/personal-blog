import { Anchor, Avatar, Box, Stack, Text } from "@mantine/core";
import { ChevronRightIcon } from "@modulz/radix-icons";
import Layout from "components/Layout";
import Section from "components/Section";
import type { NextPage } from "next";

const PageLink = ({
  children,
  to,
  color,
}: {
  children?: React.ReactNode;
  to: string;
  color?: string;
}) => (
  <Anchor target={"_blank"} href={to}>
    {children}
  </Anchor>
);

const Intro = () => (
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
        <PageLink
          color="blue.300"
          to="https://www.uni-saarland.de/en/home.html"
        >
          Saarland University (Germany)
        </PageLink>{" "}
        which I will complete in early 2023.
        <br />
        <br />
        My passion is Web Development, Space technologies and Mobile
        Development. The bachelor program{" "}
        <PageLink
          color="blue.300"
          to="https://www.uni-saarland.de/en/study/programmes/bachelor/cybersecurity.html"
        >
          Cybersecurity
        </PageLink>{" "}
        made me aware for secure and bug-free code, which is why I wrote my
        bachelor thesis about generating automated software tests for Android
        applications.
        <br />
        <br />
        In the time between my bachelor&apos;s degree and the starting of the
        master&apos;s program I worked eight months in a scrum team for the
        German Airforce (Luftwaffe) as a Full-Stack developer. <br />
        Using modern agile software development concepts, I gathered experience
        with Continuous Integration and tools like{" "}
        <PageLink color="blue.300" to="https://www.atlassian.com/software/jira">
          Jira
        </PageLink>{" "}
        and{" "}
        <PageLink
          color="blue.300"
          to="https://www.atlassian.com/software/confluence"
        >
          Confluence
        </PageLink>
        .
        <br />
        <br />
        During my master studies I work as a Student Assistant at the chair for
        Dependable Systems and Software at Saarland University. <br />
        My task is to develop a Full-Stack Satellite Simulator using{" "}
        <PageLink color="blue.300" to="https://reactjs.org/">
          React
        </PageLink>{" "}
        and{" "}
        <PageLink color="blue.300" to="https://spring.io/">
          Spring Boot
        </PageLink>{" "}
        with{" "}
        <PageLink color="blue.300" to="https://www.orekit.org/">
          Orekit
        </PageLink>{" "}
        for space related computations.
      </Text>
      <Avatar size={120} radius={"md"} src="/user.jpg" />
    </Box>
  </Section>
);

const ItemList = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      "@media (min-width: 800px)": {
        alignContent: "flex-start",
      },
    }}
  >
    <Text
      sx={{
        width: "100%",
        textAlign: "center",
        fontWeight: "300",
        fontSize: "25px",
        paddingBottom: 2,
        "@media (min-width: 800px)": {
          textAlign: "left",
        },
      }}
    >
      {label}
    </Text>
    {children}
  </Box>
);

const CustomListItem = ({
  text,
  experience,
  href,
}: {
  text: string;
  experience: string;
  href: string;
}) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      "@media (min-width: 800px)": {
        justifyContent: "flex-start",
      },
    }}
  >
    <Anchor
      href={href}
      target="_blank"
      sx={{
        ":hover": { textDecoration: "none" },
      }}
    >
      <Box
        sx={(theme) => ({
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          textAlign: "left",
          justifyContent: "center",
          padding: "7px 0",
          borderRadius: 5,
          ":hover": {
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[4]
                : theme.colors.blue[2],
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.gray[9]
                : theme.colors.gray[1],
          },
        })}
      >
        <Text
          sx={(theme) => ({
            width: "30px",
            color:
              theme.colorScheme === "dark"
                ? theme.colors.blue[4]
                : theme.colors.blue[6],
          })}
        >
          <ChevronRightIcon />
        </Text>
        <Text
          sx={(theme) => ({
            width: "110px",
            fontWeight: "bold",
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[0]
                : theme.colors.gray[8],
          })}
        >
          {text}
        </Text>
        <Text
          sx={(theme) => ({
            width: "80px",
            fontWeight: "light",
            fontSize: "14px",
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[5]
                : theme.colors.gray[6],
          })}
        >
          {experience}
        </Text>
      </Box>
    </Anchor>
  </Box>
);

const Technology = () => (
  <Section title={"Technology."}>
    <Text
      sx={(theme) => ({
        textAlign: "center",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[5]
            : theme.colors.gray[8],
        "@media (min-width: 800px)": {
          textAlign: "left",
        },
      })}
    >
      The following overview shows the technologies I currently use and those I
      already gathered experience with:
    </Text>
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[0]
            : theme.colors.dark[6],
        gap: 25,
        "@media (min-width: 800px)": {
          flexDirection: "row",
        },
      })}
    >
      <ItemList label="Frameworks / Libraries:">
        <CustomListItem
          text="Spring Boot"
          experience="1 year +"
          href="https://spring.io"
        />
        <CustomListItem
          text="React.js"
          experience="1 year +"
          href="https://reactjs.org/"
        />
        <CustomListItem
          text="Next.js"
          experience="1/2 year +"
          href="https://nextjs.org/"
        />
        <CustomListItem
          text="Blitz.js"
          experience="Basics"
          href="https://blitzjs.com/"
        />
        <CustomListItem
          text="Prisma.io"
          experience="Basics"
          href="https://www.prisma.io/"
        />
      </ItemList>
      <ItemList label="Programming languages:">
        <CustomListItem
          text="Java"
          experience="2 year +"
          href="https://www.java.com/"
        />
        <CustomListItem
          text="Typescript"
          experience="1 year +"
          href="https://www.typescriptlang.org/"
        />
        <CustomListItem
          text="Python"
          experience="Common"
          href="https://www.python.org/"
        />
        <CustomListItem
          text="C#"
          experience="Basics"
          href="https://dotnet.microsoft.com/en-us/"
        />
        <CustomListItem
          text="C"
          experience="Basics"
          href="https://www.iso.org/standard/74528.html"
        />
      </ItemList>
      <ItemList label="Other Tools / Software:">
        <CustomListItem
          text="Atlassian Jira"
          experience="1 year"
          href="https://www.atlassian.com/software/jira"
        />
        <CustomListItem
          text="Atlassian Confluence"
          experience="1 year"
          href="https://www.atlassian.com/software/confluence"
        />
        <CustomListItem
          text="Git"
          experience="1 year+"
          href="https://git-scm.com/"
        />
        <CustomListItem
          text="Continuous Integration"
          experience="Basics"
          href="#"
        />
      </ItemList>
    </Box>
  </Section>
);

const SocialButton = ({
  icon,
  name,
  href,
}: {
  icon: string;
  name: string;
  href: string;
}) => (
  <Anchor
    aria-label={name}
    href={href}
    target="_blank"
    sx={(theme) => ({
      borderRadius: "10px",
      width: "150px",
      height: "150px",
      cursor: "pointer",
      ":hover": {
        textDecoration: "none",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.gray[9]
            : theme.colors.gray[2],
      },
    })}
  >
    <Stack align="center">
      <i className={icon} style={{ fontSize: 54 }} />
      <Text
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[5]
              : theme.colors.gray[8],
        })}
      >
        {name}
      </Text>
    </Stack>
  </Anchor>
);

const ContactMe = () => (
  <Section title={"Stay in contact."}>
    <Box
      sx={(theme) => ({
        textAlign: "left",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[5]
            : theme.colors.gray[8],
      })}
    >
      <Text
        sx={{
          textAlign: "center",
          marginBottom: 25,
          "@media (min-width: 800px)": {
            flexDirection: "row",
            textAlign: "left",
          },
        }}
      >
        Feel free to reach out to me on the following social platforms:
      </Text>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 25,
        }}
      >
        <SocialButton
          icon="bi bi-linkedin"
          name="Linkedin"
          href="https://www.linkedin.com/in/robin-ohs-b6b4051a1/?locale=en_US"
        />
        <SocialButton
          icon="bi bi-github"
          name="GitHub"
          href="https://github.com/Roboh97"
        />
        <SocialButton
          icon="bi bi-instagram"
          name="Instagram"
          href="https://www.instagram.com/robin.ohs/"
        />
        <SocialButton
          icon="bi bi-twitter"
          name="Twitter"
          href="https://twitter.com/roboh97"
        />
        <SocialButton
          icon="bi bi-stack-overflow"
          name="StackOverflow"
          href="https://stackoverflow.com/users/15174092/roboh97"
        />
      </Box>
    </Box>
  </Section>
);

const Home: NextPage = () => (
  <Layout title="Home">
    <Stack spacing={50}>
      <Intro />
      <Technology />
      <ContactMe />
    </Stack>
  </Layout>
);

export default Home;
