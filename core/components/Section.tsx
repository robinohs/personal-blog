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
      marginBottom: -25,
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
    <Stack justify="center" align={float} sx={{ gap: 0, margin: "25px 0" }}>
      <Text
        component={"h1"}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[2]
              : theme.colors.dark[8],
          fontWeight: "bold",
          fontSize: "35px",
          margin: 0,
        })}
      >
        {title}
      </Text>
    </Stack>
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
        float={float ?? (isLarge ? "left" : "center")}
        subtitle={subtitle}
      />
      {subtitle && (
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
          {subtitle}
        </Text>
      )}
      {children}
    </Stack>
  );
};

export default Section;
