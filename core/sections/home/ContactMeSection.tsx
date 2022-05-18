import Section from "@components/Section";
import SocialButton from "@components/SocialButton";
import { Box } from "@mantine/core";
import React from "react";
import useStyles from "./ContactMeSection.style";

const ContactMeSection = () => {
  const { classes } = useStyles();
  return (
    <Section
      title="Stay in contact."
      subtitle="Feel free to reach out to me on the following social platforms:"
    >
      <Box className={classes.wrapper}>
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
};

export default ContactMeSection;
