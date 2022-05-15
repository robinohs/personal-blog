import { Box, Text } from "@mantine/core";
import useStyles from "./ItemList.style";

const ItemList = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Text className={classes.text}>{label}</Text>
      {children}
    </Box>
  );
};

export default ItemList;
