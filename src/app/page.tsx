import Header from "~/components/Header";
import LinksSection from "~/components/LinksSection";
import Section from "~/components/Section";
import CertSection from "~/components/CertSection";
import CurrentStep from "~/components/CurrentStep";
import type { FC } from "react";
import type { Item, WorkItem } from "~/types/Item";

const careerItems: WorkItem[] = [
  {
    title: "Project Analyst II",
    company: "Metropolitan Transportation Authority",
    duration: "Mar 2025 ~  ",
    href: "https://new.mta.info/about/",
    description:
      "Leading data engineering efforts within MTA Construction & Development to modernize analytical support for capital projects and department operations",
  },
  {
    title: "Tech Fellow",
    company: "Metropolitan Transportation Authority",
    duration: "June 2023 - Dec 2024",
    href: "https://new.mta.info/about/",
    description:
      "Spearheaded the development and implementation of scalable and cost-effective data solutions in a hybrid cloud environment to simplify transit operations",
  },
  {
    title: "Software Engineer",
    company: "Develop for Good",
    duration: "Apr 2023 - Aug 2023",
    href: "https://www.developforgood.org/",
    description:
      "Collaborated with a team of developers to build a data pipeline to simplify and reduce operational costs for a non-profit",
  },
  {
    title: "Energy Technology Intern",
    company: "The City University of New York",
    duration: "Jul 2022 - Aug 2022",
    href: "https://www1.cuny.edu/sites/sustainable/",
    description:
      "Developed automation tools to simplify operational workflows to support data-driven decision making for CUNY's sustainability initiatives",
  },
  {
    title: "Operations & Data Intern",
    company: "The Urban Assembly",
    duration: "Mar 2022 - May 2022",
    href: "#",
    description:
      "Analyzed records across 3 departments, providing actionable insights to optimize resource allocation for individual schools",
  },
];

const projectItems: Item[] = [
  {
    title: "Tubro",
    href: "",
    description:
      "cli tool that simplifies developer workflows using AI agents built using Rust",
  },
  {
    title: "NYC Taxi Trip Data Pipeline",
    href: "https://github.com/112523chen/nyc_taxi_data_pipeline",
    description:
      "Developed a data pipeline that processes and analyzes NYC taxi trip data from 2019 using Databricks, Apache Spark, and Delta Lake",
  },
];

const certItems: Item[] = [
  {
    title: "AWS Certified Data Engineer - Associate",
    href: "https://www.credly.com/badges/6ff6e701-ce22-42fb-98dd-bdb30a92feeb/public_url",
    description: "",
  },
];

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <CurrentStep />
      <Section title="experiences" items={careerItems} />
      <CertSection title="certifications" items={certItems} />
      <Section
        title="projects"
        items={projectItems}
        callForActionHref="/projects"
        callForActionText="all projects"
      />
      <LinksSection />
    </>
  );
};

export default HomePage;
