import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  button: {
    cursor: "pointer"
  },
  brand: {
    fontSize: 26,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  firstName: {
    color: theme.colorScheme === "dark" ? "white" : "black",
  },
  lastName: {
  }
}));

export default useStyles;
