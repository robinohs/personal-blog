import Layout from "@components/Layout";
import { Stack } from "@mantine/core";
import { getAllProjects } from "@scripts/ProjectApi";
import { getAllTech } from "@scripts/TechApi";
import { getEducationalCareer, getProfessionalCareer } from "@scripts/TimeLineApi";
import { AboutMeSection, ContactMeSection, TimeLineSection } from "@sections/home";
import { ProjectOverviewSection } from "@sections/projects";
import { TechnologySection } from "@sections/technology";
import Project from "@type/Project.type";
import Tech from "@type/Tech.type";
import type TimeLineEntry from "@type/TimeLineEntry.type";
import type { NextPage } from "next";

type Props = {
  educationalCareer: TimeLineEntry[];
  professionalCareer: TimeLineEntry[];
  projects: Project[];
  techList: Tech[];
};
const Home: NextPage<Props> = ({ educationalCareer, professionalCareer, projects, techList }: Props) => (
  <Layout title="">
    <Stack spacing={0}>
      <AboutMeSection />
      <TimeLineSection educationalCareer={educationalCareer} professionalCareer={professionalCareer} />
      <TechnologySection techList={techList} />
      <ProjectOverviewSection projects={projects} />
      <ContactMeSection />
    </Stack>
  </Layout>
);

export default Home;

export const getStaticProps = async () => {
  const educationalCareer = getEducationalCareer();
  const professionalCareer = getProfessionalCareer();
  const projects: Project[] = getAllProjects();
  const techList = getAllTech();
  return { props: { educationalCareer, professionalCareer, projects, techList } };
};
