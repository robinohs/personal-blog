import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    // backgroundColor: theme.colorScheme === "dark" ? "#181818" : theme.colors.gray[2]
  },
  timelineWrapper: {
    "@media (max-width: 800px)": {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  timeline: {
    "@media (max-width: 800px)": {
      width: "300px",
    },
  },
}));

export default useStyles;
