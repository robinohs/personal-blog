import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    backgroundColor: theme.colorScheme === "dark" ? "#131313" : theme.colors.gray[2]
  },
}));

export default useStyles;
