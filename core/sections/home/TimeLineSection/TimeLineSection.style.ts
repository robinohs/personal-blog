import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    // backgroundColor: theme.colorScheme === "dark" ? "#151518" : theme.colors.gray[2]
  },
  timelineWrapper: {
    "@media (max-width: 800px)": {
      justifyContent: "center",
      alignItems: "center",
    },
    color: theme.colorScheme === "dark" ? theme.colors.gray[2] : theme.colors.dark[8],
  },
  timeline: {
    "@media (max-width: 800px)": {
      width: "300px",
    },
  },
}));

export default useStyles;
