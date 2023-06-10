import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "@media (min-width: 800px)": {
      alignContent: "flex-start",
    },
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: 1,
    textTransform: "uppercase",
    paddingBottom: 2,
    "@media (min-width: 800px)": {
      textAlign: "left",
    },
  },
});

export default useStyles;
