import React from "react";
import { Box, Container as MantineContainer } from "@mantine/core";
import useStyles from "./Container.style";

type Props = {
  disablePadding?: boolean;
  children?: React.ReactNode;
};

const Container = ({ disablePadding = false, children }: Props) => {
  const { classes } = useStyles();

  return (
    <Box sx={{ paddingTop: disablePadding ? 0 : 50, paddingBottom: disablePadding ? 0 : 50 }}>
      <MantineContainer className={classes.mainContainer}>{children}</MantineContainer>
    </Box>
  );
};

export default Container;
