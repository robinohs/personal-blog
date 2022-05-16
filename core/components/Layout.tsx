import { Box, Container, Stack } from "@mantine/core";
import Head from "next/head";
import createTitle from "@utils/createTitle";
import Breadcrumb from "@components/Breadcrumb";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

type Props = {
  enableBreadcrumb?: boolean;
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ enableBreadcrumb = false, title, children }: Props) => (
  <>
    <Head>
      <title>{createTitle(title)}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Stack
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? "#111212;" : "#FBFBFB;",
        width: "100%",
        minHeight: "100vh",
      })}
    >
      <Container sx={{ maxWidth: "48rem", width: "100%" }}>
        <Stack sx={{ width: "100%" }}>
          <Navbar />
          {enableBreadcrumb && <Breadcrumb />}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              marginTop: "25px",
            }}
          >
            {children}
          </Box>
          <Footer />
        </Stack>
      </Container>
    </Stack>
  </>
);

export default Layout;
