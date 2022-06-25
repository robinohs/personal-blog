import Project from "@type/Project.type";
import fs from "fs";
import { sync } from "glob";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "data/projects");

export const getAllProjects = (): Project[] => {
  const paths = sync("*.json", { cwd: PROJECTS_DIR });
  return paths.map(loadProject).sort((projectA, projectB) => {
    if (projectA.date > projectB.date) return -1;
    if (projectA.date < projectB.date) return 1;
    return 0;
  });
};

const loadProject = (fileName: string): Project => {
  const projectPath = path.join(PROJECTS_DIR, fileName);
  const source = fs.readFileSync(projectPath).toString("utf-8");
  return JSON.parse(source);
};
