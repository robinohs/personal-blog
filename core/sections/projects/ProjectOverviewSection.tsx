import FilterList from "@components/FilterList";
import PaginatedList from "@components/PaginatedList";
import ProjectCard from "@components/ProjectCard";
import SearchableList from "@components/SearchableList";
import Section from "@components/Section";
import { Box } from "@mantine/core";
import Project from "@type/Project.type";
import createSearch from "@utils/createSearch";
import useStyles from "./ProjectOverviewSection.style";

const PROJECTS_PER_PAGE = 5;

type Props = {
  projects: Project[];
};
const ProjectOverviewSection = ({ projects }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Section id="projects" title="Projects." subtitle="At the moment, I’m working on these projects:" sx={(theme) => ({ backgroundColor: theme.colorScheme === "dark" ? "#1e1e1e" : "white" })}>
        <FilterList filterFor={["type", "language"]} items={projects}>
          {(filterItems) => (
            <Box sx={{ marginTop: "25px" }}>
              <SearchableList searchFilter={createSearch(["name", "topics", "type"])} items={filterItems}>
                {(searchFilterItems) => (
                  <PaginatedList sx={{ marginTop: "25px" }} itemsPerPage={PROJECTS_PER_PAGE} items={searchFilterItems}>
                    {(project) => <ProjectCard key={project.name} project={project} />}
                  </PaginatedList>
                )}
              </SearchableList>
            </Box>
          )}
        </FilterList>
      </Section>
    </Box>
  );
};

export default ProjectOverviewSection;
