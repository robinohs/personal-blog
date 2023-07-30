import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  anchor: {
    borderRadius: "10px",
    width: "120px",
    height: "120px",
    cursor: "pointer",
    transition: 'transform 200ms ease',
    ":hover": {
      transform: 'scale(1.1)',
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
    fontSize: 45,
    height: 45,
  },
  label: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
  },
}));

export default useStyles;
