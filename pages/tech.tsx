import Layout from "components/Layout";
import { GearSection, TechnologySection } from "core/sections/technology";
import type { NextPage } from "next";

const Use: NextPage = () => (
  <Layout title="Use" enableBreadcrumb>
    <TechnologySection />
    <GearSection />
  </Layout>
);

export default Use;
