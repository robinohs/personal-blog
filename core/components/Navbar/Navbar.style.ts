import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  outerBox: {
    // backgroundColor: theme.colorScheme === "dark" ? "#181818" : theme.colors.gray[2]
  },
  navLink: {
    textTransform: "uppercase",
    fontWeight: 400,
    letterSpacing: 2,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.dark[4],
    ":hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },
  },
  navbarWrapper: {
    width: "100%",
    transition: "all",
    paddingTop: 25,
    paddingBottom: 15,
  },
  navbarGroupWrapper: {
    width: "100%",
    height: "75px",
  },
}));

export default useStyles;
