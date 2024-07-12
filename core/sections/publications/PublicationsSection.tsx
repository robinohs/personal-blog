import FilterList from "@components/FilterList";
import PaginatedList from "@components/PaginatedList";
import SearchableList from "@components/SearchableList";
import Section from "@components/Section";
import { Box } from "@mantine/core";
import Publications from "@type/Publication.type";
import createSearch from "@utils/createSearch";
import useStyles from "./PublicationsSection.style";
import PublicationCard from "@components/PublicationCard/PublicationCard";

type Props = {
  publications: Publications[];
};
const PublicationsSection = ({ publications }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Section id="publications" title="Publications." subtitle="I was honored with the opportunity to co-publish with different authors. An overview of our works is given below:" sx={(theme) => ({ backgroundColor: theme.colorScheme === "dark" ? "#1e1e1e" : "white" })}>
        <FilterList filterFor={["year"]} items={publications}>
          {(filterItems) => (
            <Box sx={{ marginTop: "25px" }}>
              <SearchableList searchFilter={createSearch(["title", "authors"])} items={filterItems}>
                {(searchFilterItems) => (
                  <PaginatedList sx={{ marginTop: "25px" }} itemsPerPage={500} items={searchFilterItems}>
                    {(publication) => <PublicationCard key={publication.title} publication={publication} />}
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

export default PublicationsSection;
