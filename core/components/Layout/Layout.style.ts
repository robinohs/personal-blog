import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mainWrapper: {
    // background: theme.fn.linearGradient(40, "rgba(17, 17, 17, 0)", "rgba(35, 35, 35, 0.85)"),
    backgroundColor: theme.colorScheme === "dark" ? "#121212;" : "#F9F5F6;",
    width: "100%",
    minHeight: "100vh",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[8],
  },
  main: { flexGrow: 1, flexDirection: "column" },
}));

export default useStyles;
