export default interface Project {
  name: string;
  type: string;
  date: number;
  topics: string[];
  language: string;
  description: string;
  link: string | null;
  webpage: string | null;
  documentation: string | null;
  image: string | null;
}
