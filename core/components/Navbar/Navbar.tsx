import ColorSchemeButton from "@components/ColorSchemeButton";
import { Box, Group } from "@mantine/core";
import Links from "./Links";
import useStyles from "./Navbar.style";
import NavLink from "./NavLink";
import Container from "@components/Container";
import Brand from "@components/Brand";

const Navbar = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Container disablePadding>
        <Box component="nav" className={classes.navbarWrapper}>
          <Group position="apart" className={classes.navbarGroupWrapper}>
            <Brand />
            <Group>
              {Links.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
              <ColorSchemeButton />
            </Group>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
