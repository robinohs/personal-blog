import { Box, Stack, Text } from "@mantine/core";
import PageLink from "../PageLink";
import useStyles from "./Footer.style";

// const ListHeader = ({ children }: { children: ReactNode }) => (
//   <Text
//     sx={(theme) => ({
//       fontWeight: "bold",
//       color: theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.dark[4],
//     })}
//   >
//     {children}
//   </Text>
// );

// const ListItem = ({ title, href, isBlank = false }: { title: string; href: string; isBlank?: boolean }) => (
//   <Link target={isBlank ? "_blank" : "_self"} href={href}>
//     <UnstyledButton
//       sx={(theme) => ({
//         color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.dark[3],
//         ":hover": {
//           color: theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.dark[4],
//         },
//       })}
//     >
//       {title}
//     </UnstyledButton>
//   </Link>
// );

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox} component="footer">
      <Stack>
        {/* <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignContent: "space-around",
                gap: 4,
              }}
            >
              <Stack align={"center"} spacing="xs">
                <ListHeader>Other links</ListHeader>
                <ListItem title="Home" href={"/"} />
                <ListItem title="Tech" href={"/tech"} />
                <ListItem title="Legal" href={"/legal"} />
              </Stack>
              <Stack align={"center"} spacing="xs">
                <ListHeader>Social Media</ListHeader>
                <ListItem
                  isBlank
                  title="Linkedin"
                  href={
                    "https://www.linkedin.com/in/robin-ohs-b6b4051a1/?locale=en_US"
                  }
                />
                <ListItem
                  isBlank
                  title="GitHub"
                  href={"https://github.com/Roboh97"}
                />
                <ListItem
                  isBlank
                  title="Instagram"
                  href={"https://www.instagram.com/robin.ohs/"}
                />
              </Stack>
            </Box> */}
        <Box>
          <Text
            color="dimmed"
            sx={{
              fontWeight: 300,
              textAlign: "center",
              marginTop: 35,
            }}
          >
            Checkout this code on{" "}
            <PageLink openInNewTab href="https://github.com/Roboh97/personal-blog">
              GitHub.
            </PageLink>
          </Text>
        </Box>
        <Box sx={{ paddingBottom: "55px" }}>
          <Text
            color="dimmed"
            sx={{
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            Copyright © 2023 Robin Ohs
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
