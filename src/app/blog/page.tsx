import type { FC } from "react";

const BlogPage: FC = () => {
  return (
    <section className="animate-fade-in-up mb-16">
      <h1 className="animate-fade-in mb-8 text-4xl font-bold">
        <span className="text-accent mr-2">*</span>
        <span className="inline-block">blog</span>
      </h1>

      <div className="mt-11 flex items-center justify-center">
        <div className="flex flex-col space-y-6 text-center align-middle">
          <p className="text-gray-400">
            I&apos;m still working on this page. Check back soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
