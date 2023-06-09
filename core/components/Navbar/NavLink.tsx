import { Button } from "@mantine/core";
import Link from "next/link";
import LinkType from "./Link.type";
import useStyles from "./Navbar.style";

const NavLink = ({ link }: { link: LinkType }) => {
  const { classes } = useStyles();

  return (
    <Button href={link.to || "#"} scroll={false} variant="subtle" component={Link} className={classes.navLink}>
      {link.name}
    </Button>
  );
};

export default NavLink;
