import { Box, Container, Stack } from "@mantine/core";
import Head from "next/head";
import React from "react";
import createTitle from "utils/createTitle";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
        backgroundColor:
          theme.colorScheme === "dark"
            ? "#111212;"
            : "#111212;",
        color:
          theme.colorScheme === "dark"
            ? "white"
            : "black",
        width: "100%",
        minHeight: "100vh",
      })}
    >
      <Container sx={{ maxWidth: "48rem" }}>
        <Stack>
          <Navbar />
          {enableBreadcrumb && <Breadcrumb />}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              flexDirection: "column",
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
