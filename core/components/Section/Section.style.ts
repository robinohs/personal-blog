import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    margin: "25px 0 -5px 0",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperBefore: {
    ":before": {
      content: '""',
      borderBottom: "1px solid",
      borderColor: theme.colorScheme === "dark" ? "#323232" : "#e0e0e0",
      flexGrow: 1,
      marginRight: 35,
    },
  },
  wrapperAfter: {
    ":after": {
      content: '""',
      borderBottom: "1px solid",
      borderColor: theme.colorScheme === "dark" ? "#323232" : "#e0e0e0",
      flexGrow: 1,
      marginLeft: 35,
    },
  },
  title: {
    color:
      theme.colorScheme === "dark"
        ? "white"
        : theme.colors.dark[8],
    fontWeight: "bold",
    fontSize: "25px",
    letterSpacing: 3,
    margin: 0,
    textTransform: "uppercase"
  },
  subtext: {
    textAlign: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.dark[6],
    "@media (min-width: 800px)": {
      textAlign: "left",
    },
  },
}));

export default useStyles;
