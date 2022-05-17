import ColorSchemeButton from "@components/ColorSchemeButton";
import { Box, Burger, Container, Group, Stack } from "@mantine/core";
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
      {opened ? (
        <Container className={classes.hideLargerThanSm}>
          <Stack spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </Stack>
        </Container>
      ) : null}
    </Box>
  );
};

export default Navbar;
