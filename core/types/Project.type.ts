export default interface Project {
  name: string;
  type: string;
  date: number;
  topics: string[];
  language: string;
  description: string;
  link: string;
  image: string | null;
}
