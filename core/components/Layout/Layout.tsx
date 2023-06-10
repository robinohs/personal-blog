import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Affix, Box, Button, Container, Stack, Transition, rem } from "@mantine/core";
import createTitle from "@utils/createTitle";
import Head from "next/head";
import useStyles from "./Layout.style";
import { ArrowUpIcon } from "@modulz/radix-icons";
import { useWindowScroll } from "@mantine/hooks";

type Props = {
  enableBreadcrumb?: boolean;
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ enableBreadcrumb = false, title, children }: Props) => {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Head>
        <title>{createTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box id="bg">
        <Stack className={classes.mainWrapper} spacing={0}>
          <Navbar />
          {enableBreadcrumb && <Breadcrumb />}
          <Box component="main" className={classes.main}>
            {children}
          </Box>
          <Footer />
        </Stack>
      </Box>
      <Affix position={{ bottom: rem(50), right: rem(50) }}>
        <Transition transition="slide-up" mounted={scroll.y > 550}>
          {(transitionStyles) => (
            <Button leftIcon={<ArrowUpIcon />} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              Go Top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default Layout;
