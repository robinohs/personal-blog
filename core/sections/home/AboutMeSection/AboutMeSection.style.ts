import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    // backgroundColor: theme.colorScheme === "dark" ? "#181818" : theme.colors.gray[2]
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
    "@media (min-width: 800px)": {
      textAlign: "left",
    },
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
  },
}));

export default useStyles;
