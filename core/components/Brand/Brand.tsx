import React from "react";
import useStyles from "./Brand.style";
import { Group, Text } from "@mantine/core";

const Brand = () => {
  const { classes } = useStyles();
  return (
    <Group spacing={5} className={classes.brand}>
      <Text className={classes.firstName}>Robin</Text>
      <Text className={classes.lastName}>Ohs</Text>
    </Group>
  );
};

export default Brand;
