import Tech from "@type/Tech.type";
import Frameworks from "data/tech/frameworks.json";
import ProgLanguages from "data/tech/prog-languages.json";
import Tools from "data/tech/tools.json";

export const getAllTech = (): Tech[] => {
  return [Frameworks, ProgLanguages, Tools];
};
