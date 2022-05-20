import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: "35px",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 25,
    textAlign: "left",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[8],
  },
}));

export default useStyles;
