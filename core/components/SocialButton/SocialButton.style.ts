import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  anchor: {
    borderRadius: "10px",
    width: "150px",
    height: "150px",
    cursor: "pointer",
    ":hover": {
      textDecoration: "none",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[9]
          : theme.colors.gray[2],
    },
  },
  wrapper: {
    height: "100%",
  },
  icon: {
    fontSize: 54,
    height: 54,
  },
  label: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
  },
}));

export default useStyles;
