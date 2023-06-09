import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mainWrapper: {
    // background: "rgba(17,17,17)",
    // backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
    background: "linear-gradient(40deg, rgba(17, 17, 17, 1) 0 %, rgba(35, 35, 35, 1) 50 %)",
    // backgroundColor: theme.colorScheme === "dark" ? "#2d2e32;" : "#FBFBFB;",
    width: "100%",
    minHeight: "100vh",
  },
  main: { flexGrow: 1, flexDirection: "column" },
}));

export default useStyles;
