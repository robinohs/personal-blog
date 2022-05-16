import { Stack } from "@mantine/core";
import Layout from "@components/Layout";
import { AboutMeSection, ContactMeSection } from "@sections/home";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <Layout title="Home" enableBreadcrumb>
    <Stack spacing={50}>
      <AboutMeSection />
      <ContactMeSection />
    </Stack>
  </Layout>
);

export default Home;
