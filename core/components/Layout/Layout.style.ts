import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mainWrapper: {
    backgroundColor: theme.colorScheme === "dark" ? "#111212;" : "#FBFBFB;",
    width: "100%",
    minHeight: "100vh",
  },
  mainContainer: { maxWidth: "48rem", width: "100%" },
  main: { flexGrow: 1, flexDirection: "column", marginTop: "25px" },
}));

export default useStyles;
