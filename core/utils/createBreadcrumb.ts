import type BreadcrumbItem from "@type/BreadcrumbItem.type";

/**
 * Takes a raw path and creates an array of BreadcrumbItems for it.
 * @param rawPath the rawPath given from router.
 * @returns the created BreadcrumbItems for this path.
 */
const createBreadcrumb = (rawPath: string): BreadcrumbItem[] => {
  const path = clearPathFromFragment(rawPath);
  const paths = path === "/" ? [""] : path.split("/");
  return paths.map((path, index) => createItemForPath(paths, path, index));
};

const createItemForPath = (
  paths: string[],
  path: string,
  index: number
): BreadcrumbItem => ({
  name: path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1),
  url: paths.reduce((old, curr, i) => {
    if (i > index) return `${old}`;
    if (old === "/") return `/${curr}`;
    return `${old}/${curr}`;
  }, "/"),
});

/**
 * Clears a path from fragment.
 * @param path the path to clear
 * @returns the path without the fragment.
 */
const clearPathFromFragment = (path: string): string => {
  return path.split("#", 1)[0];
};

export default createBreadcrumb;
