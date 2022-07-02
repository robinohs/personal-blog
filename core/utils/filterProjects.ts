import Fuse from "fuse.js";
import type Project from "@type/Project.type";

const filterProjects = (query: string, projects: Project[]): Project[] => {
  if (query === "") return projects;

  const fuse = new Fuse(projects, {
    fieldNormWeight: 0,
    includeScore: true,
    keys: ["name", "language", "topics"],
  });

  return fuse
    .search(query)
    .filter((item) => (item.score ?? 1) < 0.01)
    .sort((a, b) => {
      const aScore = a.score ?? 0;
      const bScore = b.score ?? 0;
      if (aScore > bScore) return 1;
      if (aScore < bScore) return -1;
      return 0;
    })
    .map((item) => item.item);
};

export default filterProjects;
