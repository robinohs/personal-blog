import Layout from "@components/Layout";
import { Stack } from "@mantine/core";
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
    <Stack spacing={50}>
      <TechnologySection techList={techList} />
      <GearSection gearData={mdxSource} />
    </Stack>
  </Layout>
);

export default Use;

export const getStaticProps = async () => {
  const techList = getAllTech();
  const mdxSource = await serialize(getGearData());
  return { props: { techList, mdxSource } };
};
