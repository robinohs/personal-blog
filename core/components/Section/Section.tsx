import { Box, Stack, Sx, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "./Section.style";
import Container from "@components/Container";

const Title = ({ title, float }: { title: string; float: "left" | "center" | "right" }) => {
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

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  float?: "left" | "center" | "right";
  sx?: Sx;
  children?: React.ReactNode;
};
const Section = ({ id, title, subtitle, float, sx, children }: Props) => {
  const { classes } = useStyles();
  const isLarge = useMediaQuery("(min-width: 800px)", true);

  return (
    <Container sx={sx}>
      <Stack id={id}>
        <Title title={title} float={float ?? (isLarge ? "left" : "center")} />
        {subtitle && <Text className={classes.subtext}>{subtitle}</Text>}
        {children}
      </Stack>
    </Container>
  );
};

export default Section;
