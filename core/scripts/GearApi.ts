import path from "path";
import fs from "fs";
import matter from "gray-matter";

const GEAR_FILE = path.join(process.cwd(), "data/gear", "gear.md");

export const getGearData = (): string => {
  const data = fs.readFileSync(GEAR_FILE);
  const {content} = matter(data);
  return content;
}
