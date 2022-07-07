import FilterList from "@components/FilterList";
import PaginatedList from "@components/PaginatedList";
import ProjectCard from "@components/ProjectCard";
import SearchableList from "@components/SearchableList";
import Section from "@components/Section";
import { Box } from "@mantine/core";
import Project from "@type/Project.type";
import createSearch from "@utils/createSearch";

const PROJECTS_PER_PAGE = 5;

type Props = {
  projects: Project[];
};
const ProjectOverviewSection = ({ projects }: Props) => {
  return (
    <Section title="Projects.">
      <FilterList filterFor={["type", "language"]} items={projects}>
        {(filterItems) => (
          <Box sx={{ marginTop: "25px" }}>
            <SearchableList
              searchFilter={createSearch(["name", "topics", "type"])}
              items={filterItems}
            >
              {(searchFilterItems) => (
                <PaginatedList
                  sx={{ marginTop: "25px" }}
                  itemsPerPage={PROJECTS_PER_PAGE}
                  items={searchFilterItems}
                >
                  {(project) => (
                    <ProjectCard key={project.name} project={project} />
                  )}
                </PaginatedList>
              )}
            </SearchableList>
          </Box>
        )}
      </FilterList>
    </Section>
  );
};

export default ProjectOverviewSection;
