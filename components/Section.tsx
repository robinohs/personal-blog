import { Box, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const Title = ({
  subtitle,
  title,
  float,
}: {
  subtitle?: string;
  title: string;
  float: "left" | "center" | "right";
}) => (
  <Box
    sx={(theme) => ({
      display: "flex",
      alignItems: "center",
      ":before":
        float === "center" || float === "right"
          ? {
              content: '""',
              borderBottom: "1px solid",
              borderColor: theme.colorScheme === "dark" ? "#323232" : "#e0e0e0",
              flexGrow: 1,
              marginRight: 35,
            }
          : {},
      ":after":
        float === "center" || float === "left"
          ? {
              content: '""',
              borderBottom: "1px solid",
              borderColor: theme.colorScheme === "dark" ? "#323232" : "#e0e0e0",
              flexGrow: 1,
              marginLeft: 35,
            }
          : {},
    })}
  >
    <Text
      component={"h1"}
      sx={(theme) => ({
        color: theme.colorScheme === "dark" ? "white" : "black",
        fontWeight: "700",
        fontSize: "35px",
      })}
    >
      {title}
    </Text>
    {subtitle && (
      <Text
        component={"h2"}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? "rgba(255, 255, 255, 0.7)"
              : "#595959",
          fontWeight: "light",
          fontSize: "20px",
        })}
      >
        {subtitle}
      </Text>
    )}
  </Box>
);

const Section = ({
  title,
  subtitle,
  children,
  float,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  float?: "left" | "center" | "right";
}) => {
  const isLarge = useMediaQuery("(min-width: 800px)", true);

  return (
    <Stack>
      <Title
        title={title}
        float={float ?? isLarge ? "left" : "center"}
        subtitle={subtitle}
      />
      {children}
    </Stack>
  );
};

export default Section;
