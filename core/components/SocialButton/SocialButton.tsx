import { Anchor, Stack, Text } from "@mantine/core";
import useStyles from "./SocialButton.style";

const SocialButton = ({
  icon,
  name,
  href,
}: {
  icon: string;
  name: string;
  href: string;
}) => {
  const { classes } = useStyles();
  return (
    <Anchor
      aria-label={name}
      href={href}
      target="_blank"
      className={classes.anchor}
    >
      <Stack align="center" justify="space-around" className={classes.wrapper}>
        <i className={`${icon} ${classes.icon}`} />
        <Text className={classes.label}>{name}</Text>
      </Stack>
    </Anchor>
  );
};

export default SocialButton;
