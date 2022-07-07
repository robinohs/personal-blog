import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  group: { marginBottom: 5, marginTop: theme.spacing.sm },
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    lineHeight: 1.5,
    marginTop: theme.spacing.sm,
  },
  listLeft: {
    minWidth: "100px",
  },
  listBade: {
    width: "120px",
  },
  image: {
    marginTop: theme.spacing.md,
  }
}));

export default useStyles;
