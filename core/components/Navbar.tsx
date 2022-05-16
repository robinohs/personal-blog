import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  MediaQuery,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextLink from "next/link";
import ColorSchemeButton from "@components/ColorSchemeButton";

type LinkType = { to: string; name: string };
const Links: LinkType[] = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Tech",
    to: "/tech",
  },
  {
    name: "Blog",
    to: "/blog",
  },
];

const NavLink = ({ link }: { link: LinkType }) => (
  <NextLink href={link.to || "#"} passHref>
    <Button
      variant="subtle"
      color="gray"
      component="a"
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[4]
            : theme.colors.dark[4],
        marginLeft: "-18px",
        ":hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
        },
      })}
    >
      {link.name}
    </Button>
  </NextLink>
);

const Navbar = () => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <Box
      component="nav"
      sx={{
        padding: "15px 0",
        width: "100%",
        transition: "all",
      }}
    >
      <Group position="apart" sx={{ width: "100%", height: "75px" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            size={"md"}
            aria-label={"Open Menu"}
            onClick={handlers.toggle}
            opened={opened}
          />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group>
            {Links.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </Group>
        </MediaQuery>
        <ColorSchemeButton />
      </Group>
      {opened ? (
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Container sx={{ maxWidth: "48rem" }}>
            <Stack spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
            </Stack>
          </Container>
        </MediaQuery>
      ) : null}
    </Box>
  );
};

export default Navbar;
