import PageLink from "@components/PageLink";
import { Badge, Button, Card, Center, Group, Space, Stack, Text } from "@mantine/core";
import Publication from "@type/Publication.type";
import useStyles from "./PublicationCard.style";

const PublicationCard = ({ publication }: { publication: Publication }) => {
  const { classes } = useStyles();
  return (
    <Card>
      <Stack spacing={2}>
        <Text fs="italic" fw="bolder" fz={18}>
          {publication.title} [{publication.year}]
        </Text>
        <Space h="xs" />
        <Text fz={16}>{publication.authors}</Text>
        <Text fw="bolder">{publication.conference}</Text>
        <Space h="md" />
        <Group>
          {publication.link && <PageLink href={publication.link}>Link</PageLink>}
          {publication.conferenceLink && <PageLink href={publication.conferenceLink}>Website</PageLink>}
        </Group>
      </Stack>
    </Card>
  );
};

export default PublicationCard;
