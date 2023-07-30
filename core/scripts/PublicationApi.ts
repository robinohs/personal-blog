import Publication from "@type/Publication.type";
import Publications from "data/publications/publications.json";

export const getAllPublications = (): Publication[] => {
  return Publications;
};
