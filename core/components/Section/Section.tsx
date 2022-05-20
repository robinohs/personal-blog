import { Box, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "./Section.style";

const Title = ({
  title,
  float,
}: {
  title: string;
  float: "left" | "center" | "right";
}) => {
  const { classes } = useStyles();

  return (
    <Box
      className={`${classes.wrapper}
        ${(float === "center" || float === "right") && classes.wrapperBefore}
        ${(float === "center" || float === "left") && classes.wrapperAfter}`}
    >
      <Text component={"h1"} className={classes.title}>
        {title}
      </Text>
    </Box>
  );
};

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
  const { classes } = useStyles();
  const isLarge = useMediaQuery("(min-width: 800px)", true);

  return (
    <Stack>
      <Title title={title} float={float ?? (isLarge ? "left" : "center")} />
      {subtitle && <Text className={classes.subtext}>{subtitle}</Text>}
      {children}
    </Stack>
  );
};

export default Section;
