import React from "react";
import useStyles from "./Brand.style";
import { Group, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";

const Brand = () => {
  const { classes } = useStyles();
  return (
    <UnstyledButton className={classes.button} component={Link} href="#">
      <Group spacing={5} className={classes.brand}>
        <Text className={classes.firstName}>Robin</Text>
        <Text className={classes.lastName}>Ohs</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Brand;
