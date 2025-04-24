export type TPortpolioSkill = {
  name: string;
  icon: string;
  blogLink: string;
};

export type TPortpolioProject = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubLink?: string;
  demoLink?: string;
};
