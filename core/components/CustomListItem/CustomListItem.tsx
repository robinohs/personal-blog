import { Anchor, Box, Text } from "@mantine/core";
import { DotFilledIcon } from "@modulz/radix-icons";
import useStyles from "./CustomListItem.style";

const CustomListItem = ({
  text,
  experience,
  href,
}: {
  text: string;
  experience: string;
  href: string;
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Anchor href={href} target="_blank" className={classes.anchor}>
        <Box className={classes.innerWrapper}>
          <Text className={classes.bullet}>
            <DotFilledIcon />
          </Text>
          <Text className={classes.name}>{text}</Text>
          <Text className={classes.experience}>{experience}</Text>
        </Box>
      </Anchor>
    </Box>
  );
};

export default CustomListItem;
