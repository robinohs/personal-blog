import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    backgroundColor: theme.colorScheme === "dark" ? "#0a0a0a" : theme.colors.gray[2]
  },
}));

export default useStyles;
