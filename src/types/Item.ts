export type Item = {
  title: string;
  href: string;
  description: string;
};

export type WorkItem = Item & {
  company: string;
  duration: string;
};

export type ProjectItem = Item & {
  technologies: string[];
  achievements?: string[];
};
