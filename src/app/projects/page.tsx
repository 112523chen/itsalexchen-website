import type { FC } from "react";
import ProjectCard from "~/components/ProjectCard";
import type { ProjectItem } from "~/types/Item";

const projectItems: ProjectItem[] = [
  {
    title: "NYC Taxi Trip Data Pipeline",
    href: "https://github.com/112523chen/nyc_taxi_data_pipeline",
    description: "data pipeline that processes and analyzes NYC taxi trip data",
    technologies: [
      "Databricks",
      "Apache Spark",
      "Delta Lake",
      "Python",
      "SQL",
      "PySpark",
    ],
  },
  {
    title: "Wikipedia Information Retrieval System",
    href: "https://github.com/112523chen/wikipedia-search-engine-web-app",
    description:
      "Developed a Wikipedia information retrieval system and demo web app",
    technologies: ["Python", "NLTK", "Docker", "Streamlit", "Flask", "Ollama"],
  },
  {
    title: "Job Application Tracker",
    href: "https://github.com/112523chen/Job-Application-Tracker-Web-App",
    description:
      "Develop a full-stack web app allowing users to track job applications",
    technologies: [
      "Postgres",
      "Express",
      "React",
      "Node",
      "TypeScript",
      "Styled-Components",
      "SQL",
      "Github Actions",
    ],
  },
  {
    title: "Personal Website",
    href: "https://112523chen.github.io/PortfolioWebsite3.1/",
    description: "Created a website to highlight projects and person brand",
    technologies: [
      "React",
      "TypeScript",
      "Jest",
      "Styled-Components",
      "Github Actions",
    ],
  },
  {
    title: "Finding Features About New Galaxies with ML",
    href: "https://github.com/112523chen/ML-Galaxy-Project",
    description:
      "Trained serval supervised machine learning models to predict 4 features of galaxy from a spectra of the same galaxy",
    technologies: ["Python", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn"],
  },
];

const ProjectPage: FC = () => {
  return (
    <>
      <h1 className="animate-fade-in mb-8 text-4xl font-bold">
        <span className="text-accent mr-2">*</span>
        <span className="inline-block">projects</span>
      </h1>

      <p className="mb-12 text-gray-400">
        Here is the catalog of projects that i&apos;ve worked on. It spans a
        wide range of technologies and tools from data engineering/science to
        full-stack web development.
      </p>

      <div className="space-y-12">
        {projectItems.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
