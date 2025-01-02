import type { FC } from "react";

const CurrentStep: FC = () => {
  return (
    <section className="animate-fade-in-up mb-16">
      <div className="mb-5">
        <h3 className="mb-3 flex items-center text-2xl font-bold">
          <span className="text-accent mr-2">*</span> what i&apos;m working on
        </h3>
        <p className="text-gray-500">Last updated on 2025-01-01</p>
      </div>
      <p>
        Currently I&apos;m continuing to develop my knowledge and skills in
        Azure cloud services and how to build scalable and cost-effective data
        solutions multi-cloud environments. I&apos;m also working on a few side
        projects that I&apos;m excited to share soon!
      </p>
    </section>
  );
};

export default CurrentStep;