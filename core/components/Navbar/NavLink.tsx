import { Button } from "@mantine/core";
import NextLink from "next/link";
import LinkType from "./Link.type";
import useStyles from "./Navbar.style";

const NavLink = ({ link }: { link: LinkType }) => {
  const { classes } = useStyles();

  return (
    <NextLink href={link.to || "#"} passHref>
      <Button
        variant="subtle"
        color="gray"
        component="a"
        className={classes.navLink}
      >
        {link.name}
      </Button>
    </NextLink>
  );
};

export default NavLink;
