import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FC } from "react";
import type { ProjectItem as Project } from "~/types/Item";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="hover:border-accent/50 group border border-gray-800 p-6 transition-colors">
      <Link href={project.href} target="_blank">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="group-hover:text-accent text-2xl font-bold transition-colors">
            {project.title}
          </h3>
          {project.href !== "" ? (
            <ArrowUpRight className="group-hover:text-accent h-5 w-5 text-gray-400 transition-colors" />
          ) : (
            <></>
          )}
        </div>
      </Link>

      <p className="mb-6 text-gray-300">{project.description}</p>
      <div>
        <h3 className="mb-2 font-semibold">technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-gray-800/50 px-2 py-1 text-sm text-gray-300"
            >
              {tech.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
