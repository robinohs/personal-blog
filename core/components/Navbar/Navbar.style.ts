import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.dark[4],
    marginLeft: "-18px",
    ":hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },
  },
  navbarWrapper: {
    padding: "15px 0",
    width: "100%",
    transition: "all",
  },
  navbarGroupWrapper: {
    width: "100%",
    height: "75px",
  },
  hideLargerThanSm: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: "none"
    }
  },
  hideSmallerThanSm: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none"
    }
  }
}));

export default useStyles;
