import { Text } from "@mantine/core";
import readingTimeCalculation from "core/scripts/ReadingTimeCalculation";

type Props = {
  text: string;
};

const ReadingTimeIndicator = ({ text }: Props) => (
  <Text color="dimmed">{`${readingTimeCalculation(text)} minutes to read`}</Text>
);

export default ReadingTimeIndicator;
