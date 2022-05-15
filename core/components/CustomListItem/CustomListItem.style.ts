import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    "@media (min-width: 800px)": {
      justifyContent: "flex-start",
    },
  },
  anchor: {
    ":hover": { textDecoration: "none" },
  },
  innerWrapper: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "center",
    padding: "7px 0",
    borderRadius: 5,
    ":hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[4]
          : theme.colors.blue[2],
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[9]
          : theme.colors.gray[1],
    },
  },
  bullet: {
    width: "30px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[4]
        : theme.colors.blue[6],
  },
  name: {
    width: "110px",
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.gray[8],
  },
  experience: {
    width: "80px",
    fontWeight: 300,
    fontSize: "14px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[6],
  },
}));

export default useStyles;
