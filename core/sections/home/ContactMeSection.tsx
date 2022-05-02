import { Anchor, Box, Stack, Text } from "@mantine/core";
import Section from "components/Section";
import React from "react";

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

const ContactMeSection = () => (
  <Section
    title="Stay in contact."
    subtitle="Feel free to reach out to me on the following social platforms:"
  >
    <Box
      sx={(theme) => ({
        marginTop: "35px",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 25,
        textAlign: "left",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[5]
            : theme.colors.gray[8],
      })}
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
  </Section>
);

export default ContactMeSection;
