import Layout from "@components/Layout";
import { getAllProjects } from "@scripts/ProjectApi";
import { ProjectOverviewSection } from "@sections/projects";
import Project from "@type/Project.type";
import React from "react";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <Layout title="Projects" enableBreadcrumb>
      <ProjectOverviewSection projects={projects} />
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects: Project[] = getAllProjects();

  return { props: { projects } };
};
