import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
