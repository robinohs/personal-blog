import Section from "@components/Section";
import { Stack, Text, Timeline, Title } from "@mantine/core";
import type TimeLineEntry from "@type/TimeLineEntry.type";
import React from "react";
import useStyles from "./TimeLineSection.style";

type Props = {
  educationalCareer: TimeLineEntry[];
  professionalCareer: TimeLineEntry[];
};
const TimeLineSection = ({ educationalCareer, professionalCareer }: Props) => {
  const { classes } = useStyles();

  return (
    <Section
      title="Timeline"
      subtitle="The following two timelines visualize both my professional and educational career."
    >
      <Stack spacing="xl" className={classes.timelineWrapper}>
        <Title mt={12} order={3}>
          Educational career
        </Title>
        <Timeline
          active={2}
          bulletSize={14}
          lineWidth={2}
          className={classes.timeline}
        >
          {educationalCareer.map((entry) => (
            <Timeline.Item key={entry.title} title={entry.title}>
              <Text color="dimmed" size="sm">
                <div dangerouslySetInnerHTML={{ __html: entry.subtext }} />
              </Text>
              <Text size="xs" mt={4}>
                {entry.date}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
      <Stack spacing="xl" className={classes.timelineWrapper}>
        <Title mt={12} order={3}>
          Professional career
        </Title>
        <Timeline
          active={1}
          bulletSize={14}
          lineWidth={2}
          className={classes.timeline}
        >
          {professionalCareer.map((entry) => (
            <Timeline.Item key={entry.title} title={entry.title}>
              <Text color="dimmed" size="sm">
                <div dangerouslySetInnerHTML={{ __html: entry.subtext }} />
              </Text>
              <Text size="xs" mt={4}>
                {entry.date}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Section>
  );
};

export default TimeLineSection;
