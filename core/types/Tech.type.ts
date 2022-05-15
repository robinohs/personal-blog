export default interface Tech {
  title: string;
  entries: TechEntry[];
}

export interface TechEntry {
  name: string;
  experience: string;
  href: string;
}
