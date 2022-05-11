import { Text } from "@mantine/core";
import readingTimeCalculation from "@util/readingTimeCalculation";

type Props = {
  text: string;
};

const ReadingTimeIndicator = ({ text }: Props) => (
  <Text color="dimmed">{`${readingTimeCalculation(text)} minutes to read`}</Text>
);

export default ReadingTimeIndicator;
