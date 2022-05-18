import Section from "@components/Section";
import { TypographyStylesProvider } from "@mantine/core";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const GearSection = ({
  gearData,
}: {
  gearData: MDXRemoteSerializeResult<Record<string, unknown>>;
}) => {
  return (
    <Section
      title="Gear"
      subtitle="This is the gear and stuff I'm currently using for Coding, gaming and listening to music:"
    >
      <TypographyStylesProvider sx={{ fontSize: 17 }}>
        <MDXRemote {...gearData} />
      </TypographyStylesProvider>
    </Section>
  );
};

export default GearSection;
