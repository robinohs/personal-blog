import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    // backgroundColor: theme.colorScheme === "dark" ? "#1e1e1e" : theme.colors.gray[2]
  },
  wrapper: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column-reverse",
    gap: 25,
    "@media (min-width: 800px)": {
      display: "relative",
      justifyItems: "space-between",
      alignItems: "flex-start",
      flexDirection: "row",
    },
  },
  text: {
    textAlign: "center",
    color: theme.colorScheme === "dark"
      ? theme.colors.dark[1]
      : theme.colors.dark[6],
    "@media (min-width: 800px)": {
      textAlign: "left",
    },
  },
}));

export default useStyles;
