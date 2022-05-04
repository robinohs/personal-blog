import { List, Space, Text, Title } from "@mantine/core";
import Section from "core/components/Section";

const Subheading = ({ title }: { title: string }) => (
  <>
    <Space h="xl" />
    <Title order={2}>{title}</Title>
    <Space h="xs" />
  </>
);

const ComputerStuff = () => (
  <>
    <Subheading title="PC" />
    <List>
      <List.Item>CPU: Intel Core i5-10600k</List.Item>
      <List.Item>GPU: NVIDIA GTX 1060 6GB</List.Item>
      <List.Item>Laptop: HP 15s i5-1135G7 16GB</List.Item>
    </List>
  </>
);

const CodingStuff = () => (
  <>
    <Subheading title="Coding" />
    <List>
      <List.Item>Editor: VSCode + IntelliJ IDEA</List.Item>
      <List.Item>&lt;3 languages: Java/Kotlin + Typescript</List.Item>
    </List>
  </>
);

const SoftwareStuff = () => (
  <>
    <Subheading title="Software" />
    <List>
      <List.Item>Bitwarden</List.Item>
      <List.Item>Photoshop</List.Item>
    </List>
  </>
);

const OtherStuff = () => (
  <>
    <Subheading title="Other" />
    <List>
      <List.Item>AirPods Pro</List.Item>
      <List.Item>iPhone XS</List.Item>
    </List>
  </>
);

const GearSection = () => {
  return (
    <Section
      title="Gear"
      subtitle="This is the gear and stuff I'm currently using for Coding, gaming and listening to music:"
    >
      <Text
        sx={(theme) => ({
          textAlign: "center",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[4]
              : theme.colors.gray[8],
          "@media (min-width: 800px)": {
            textAlign: "left",
          },
        })}
      >
        <ComputerStuff />
        <CodingStuff />
        <SoftwareStuff />
        <OtherStuff />
      </Text>
    </Section>
  );
};

export default GearSection;
