import { Anchor, Box, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text
    sx={(theme) => ({
      fontWeight: "700",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.colors.dark[4],
    })}
  >
    {children}
  </Text>
);

const ListItem = ({ title, href }: { title: string; href: string }) => (
  <Anchor
    href={href}
    target={"_blank"}
    sx={(theme) => ({
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.dark[3],
    })}
  >
    {title}
  </Anchor>
);

const Footer = () => (
  <footer>
    <Stack sx={{ marginTop: "4rem" }}>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
          gap: 4,
        })}
      >
        <Stack align={"center"} spacing="xs">
          <ListHeader>Other links</ListHeader>
          <ListItem title="Home" href={"/"} />
          <ListItem title="Uses" href={"/uses"} />
          <ListItem title="Legal" href={"/legal"} />
        </Stack>
        <Stack align={"center"} spacing="xs">
          <ListHeader>Social Media</ListHeader>
          <ListItem
            title="Linkedin"
            href={
              "https://www.linkedin.com/in/robin-ohs-b6b4051a1/?locale=en_US"
            }
          />
          <ListItem title="GitHub" href={"https://github.com/Roboh97"} />
          <ListItem
            title="Instagram"
            href={"https://www.instagram.com/robin.ohs/"}
          />
        </Stack>
      </Box>
      <Box sx={{ paddingBottom: "25px" }}>
        <Text
          sx={(theme) => ({
            fontWeight: "light",
            textAlign: "center",
            marginTop: 45,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.gray[7]
                : theme.colors.dark[4],
          })}
        >
          Copyright © 2022 Robin Ohs
        </Text>
      </Box>
    </Stack>
  </footer>
);

export default Footer;
