import TimeLineEntry from "@type/TimeLineEntry.type";
import EducationalCareer from "data/timeline/educational-career.json";
import ProfessionalCareer from "data/timeline/professional-career.json";

const getEducationalCareer = () => EducationalCareer as TimeLineEntry[];
const getProfessionalCareer = () => ProfessionalCareer as TimeLineEntry[];

export { getEducationalCareer, getProfessionalCareer };
