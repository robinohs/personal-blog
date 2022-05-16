import Tech from "@type/Tech.type";
import Layout from "core/components/Layout";
import { getAllTech } from "core/scripts/TechApi";
import { GearSection, TechnologySection } from "core/sections/technology";
import type { NextPage } from "next";

type Props = {
  techList: Tech[];
};
const Use: NextPage<Props> = ({ techList }: Props) => (
  <Layout title="Tech" enableBreadcrumb>
    <TechnologySection techList={techList} />
    <GearSection />
  </Layout>
);

export default Use;

export const getStaticProps = async () => {
  const techList = getAllTech();
  return { props: { techList } };
};
