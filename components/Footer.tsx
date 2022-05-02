import { Box, Stack, Text, UnstyledButton } from "@mantine/core";
import { NextLink } from "@mantine/next";
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

const ListItem = ({
  title,
  href,
  isBlank = false,
}: {
  title: string;
  href: string;
  isBlank?: boolean;
}) => (
  <NextLink target={isBlank ? "_blank" : "_self"} href={href}>
    <UnstyledButton
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[6]
            : theme.colors.dark[3],
        ":hover": {
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[5]
              : theme.colors.dark[4],
        },
      })}
    >
      {title}
    </UnstyledButton>
  </NextLink>
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
          <ListItem title="Use" href={"/use"} />
          <ListItem title="Legal" href={"/legal"} />
        </Stack>
        <Stack align={"center"} spacing="xs">
          <ListHeader>Social Media</ListHeader>
          <ListItem
            isBlank
            title="Linkedin"
            href={
              "https://www.linkedin.com/in/robin-ohs-b6b4051a1/?locale=en_US"
            }
          />
          <ListItem
            isBlank
            title="GitHub"
            href={"https://github.com/Roboh97"}
          />
          <ListItem
            isBlank
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
