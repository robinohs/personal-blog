import { Anchor, Box, Text } from "@mantine/core";
import { ChevronRightIcon } from "@modulz/radix-icons";
import Section from "../../components/Section";

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

const TechnologySection = () => (
  <Section
    title={"Technology."}
    subtitle="The following overview shows the technologies I currently use and those I already gathered experience with:"
  >
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

export default TechnologySection;
