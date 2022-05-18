import Layout from "@components/Layout";
import { getGearData } from "@scripts/GearApi";
import { getAllTech } from "@scripts/TechApi";
import { GearSection, TechnologySection } from "@sections/technology";
import Tech from "@type/Tech.type";
import type { NextPage } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Props = {
  techList: Tech[];
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
};
const Use: NextPage<Props> = ({ techList, mdxSource }: Props) => (
  <Layout title="Tech" enableBreadcrumb>
    <TechnologySection techList={techList} />
    <GearSection gearData={mdxSource} />
  </Layout>
);

export default Use;

export const getStaticProps = async () => {
  const techList = getAllTech();
  const gearData = getGearData();
  const mdxSource = await serialize(gearData);
  return { props: { techList, mdxSource } };
};
