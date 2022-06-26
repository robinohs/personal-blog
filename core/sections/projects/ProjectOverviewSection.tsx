import PaginatedList from "@components/PaginatedList";
import ProjectCard from "@components/ProjectCard";
import Section from "@components/Section";
import Project from "@type/Project.type";
import React, { useState } from "react";

const PROJECTS_PER_PAGE = 5;

type Props = {
  projects: Project[];
};
const ProjectOverviewSection = ({ projects }: Props) => {
  return (
    <Section
      title="Projects."
      subtitle="The following list shows the projects I am currently working on or have worked on in the past."
    >
      <PaginatedList
        sx={{ marginTop: "25px" }}
        itemsPerPage={PROJECTS_PER_PAGE}
        items={projects}
      >
        {(project) => <ProjectCard project={project} />}
      </PaginatedList>
    </Section>
  );
};

export default ProjectOverviewSection;
