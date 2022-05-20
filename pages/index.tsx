import Layout from "@components/Layout";
import { Stack } from "@mantine/core";
import {
  getEducationalCareer,
  getProfessionalCareer,
} from "@scripts/TimeLineApi";
import {
  AboutMeSection,
  ContactMeSection,
  TimeLineSection,
} from "@sections/home";
import type TimeLineEntry from "@type/TimeLineEntry.type";
import type { NextPage } from "next";

type Props = {
  educationalCareer: TimeLineEntry[];
  professionalCareer: TimeLineEntry[];
};
const Home: NextPage<Props> = ({
  educationalCareer,
  professionalCareer,
}: Props) => (
  <Layout title="Home" enableBreadcrumb>
    <Stack spacing={50}>
      <AboutMeSection />
      <TimeLineSection
        educationalCareer={educationalCareer}
        professionalCareer={professionalCareer}
      />
      <ContactMeSection />
    </Stack>
  </Layout>
);

export default Home;

export const getStaticProps = async () => {
  const educationalCareer = getEducationalCareer();
  const professionalCareer = getProfessionalCareer();
  return { props: { educationalCareer, professionalCareer } };
};
