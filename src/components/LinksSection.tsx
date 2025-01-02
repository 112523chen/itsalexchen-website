import Link from "next/link";
import type { FC } from "react";

const links = [
  { title: "email", href: "mailto:itsalexchen@gmail.com" },
  { title: "github", href: "https://github.com/112523chen" },
  { title: "linkedin", href: "https://www.linkedin.com/in/itsalexchen" },
];

const LinksSection: FC = () => {
  return (
    <section className="animate-fade-in-up">
      <h2 className="mb-6 flex items-center text-2xl font-bold">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-accent text-gray-400 transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
