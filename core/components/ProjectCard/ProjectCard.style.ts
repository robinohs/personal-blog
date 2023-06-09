import { createStyles, getStylesRef, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(280),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },
  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    backgroundPosition: "center",
    transition: 'transform 500ms ease',
  },
  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .95) 90%)',
  },
  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  title: {
    color: theme.white,
    marginBottom: rem(5),
  },
  author: {
    color: theme.colors.dark[2],
  },
  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },
  group: { marginBottom: 5, marginTop: theme.spacing.sm },
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[4],
    lineHeight: 1.5,
  },
  listLeft: {
    minWidth: "120px",
  },
  listBade: {
    width: "120px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[4],
  },
}));

export default useStyles;
