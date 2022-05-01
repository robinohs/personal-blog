import { Box, Container, Stack } from "@mantine/core";
import Head from "next/head";
import React from "react";
import { DarkTheme, LightTheme } from "theme/theme";
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
            ? DarkTheme.BG_COLOR
            : LightTheme.BG_COLOR,
        color:
          theme.colorScheme === "dark"
            ? DarkTheme.MAIN_COLOR
            : LightTheme.MAIN_COLOR,
        width: "100%",
        minHeight: "100vh",
      })}
    >
      <Container sx={{ maxWidth: "48rem" }}>
        <Stack spacing="xl">
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
