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
        ? theme.colors.gray[2]
        : theme.colors.dark[8],
    fontWeight: "bold",
    fontSize: "35px",
    margin: 0,
  },
  subtext: {
    textAlign: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
    "@media (min-width: 800px)": {
      textAlign: "left",
    },
  },
}));

export default useStyles;
