import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Box, Container, Stack } from "@mantine/core";
import createTitle from "@utils/createTitle";
import Head from "next/head";
import useStyles from "./Layout.style";

type Props = {
  enableBreadcrumb?: boolean;
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ enableBreadcrumb = false, title, children }: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{createTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack className={classes.mainWrapper}>
        <Container className={classes.mainContainer}>
          <Stack>
            <Navbar />
            {enableBreadcrumb && <Breadcrumb />}
            <Box component="main" className={classes.main}>
              {children}
            </Box>
            <Footer />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Layout;
