import ColorSchemeButton from "@components/ColorSchemeButton";
import {
  Box,
  Burger,
  Container,
  Group,
  Stack,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Links from "./Links";
import useStyles from "./Navbar.style";
import NavLink from "./NavLink";

const Navbar = () => {
  const { classes } = useStyles();
  const [opened, handlers] = useDisclosure(false);

  return (
    <Box component="nav" className={classes.navbarWrapper}>
      <Group position="apart" className={classes.navbarGroupWrapper}>
        <Burger
          className={classes.hideLargerThanSm}
          size={"md"}
          aria-label={"Open Menu"}
          onClick={handlers.toggle}
          opened={opened}
        />
        <Group className={classes.hideSmallerThanSm}>
          {Links.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </Group>
        <ColorSchemeButton />
      </Group>
      <Transition
        mounted={opened}
        transition="fade"
        duration={250}
        timingFunction="ease"
      >
        {(styles) => (
          <Container className={classes.hideLargerThanSm} style={{ ...styles }}>
            <Stack spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
            </Stack>
          </Container>
        )}
      </Transition>
    </Box>
  );
};

export default Navbar;
