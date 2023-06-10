import React from "react";
import { Box, Container as MantineContainer, Sx } from "@mantine/core";
import useStyles from "./Container.style";

type Props = {
  disablePadding?: boolean;
  children?: React.ReactNode;
  sx?: Sx;
};
const Container = ({ disablePadding = false, sx, children }: Props) => {
  const { classes } = useStyles();

  return (
    <Box sx={{ paddingTop: disablePadding ? 0 : 50, paddingBottom: disablePadding ? 0 : 50 }}>
      <MantineContainer className={classes.mainContainer} sx={[{ padding: disablePadding ? 0 : 50 }, sx]}>
        {children}
      </MantineContainer>
    </Box>
  );
};

export default Container;
