import CustomListItem from "@components/CustomListItem";
import ItemList from "@components/ItemList";
import Section from "@components/Section";
import { Box } from "@mantine/core";
import type Tech from "@type/Tech.type";
import useStyles from "./TechnologySection.style";

const TechnologySection = ({ techList }: { techList: Tech[] }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Section id="technology" title={"Technology."} subtitle="The following overview shows the technologies I currently use and those I already gathered experience with:">
        <Box
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[6],
            gap: 25,
            "@media (min-width: 800px)": {
              flexDirection: "row",
            },
          })}
        >
          {techList.map((tech) => (
            <ItemList key={tech.title} label={tech.title}>
              {tech.entries.map((entry) => (
                <CustomListItem key={entry.name} text={entry.name} experience={entry.experience} href={entry.href} />
              ))}
            </ItemList>
          ))}
        </Box>
      </Section>
    </Box>
  );
};

export default TechnologySection;
