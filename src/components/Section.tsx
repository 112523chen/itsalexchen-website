import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FC } from "react";
import type { Item, WorkItem } from "~/types/Item";

type SectionProps = {
  title: string;
  items: Item[] | WorkItem[];
  callForActionHref?: string;
  callForActionText?: string;
};

const isWorkItem = (item: Item | WorkItem): item is WorkItem => {
  return (item as WorkItem).company !== undefined;
};

const Section: FC<SectionProps> = ({
  title,
  items,
  callForActionHref,
  callForActionText,
}: SectionProps) => {
  return (
    <section className="animate-fade-in-up mb-16">
      <h3 className="mb-6 flex items-center text-2xl font-bold">
        <span className="text-accent mr-2">*</span> {title}
      </h3>
      <div className="space-y-8">
        {items.map((item, index) => (
          // define if item is of type Item or WorkItem
          <div key={index} className="group">
            <Link href={item.href} target="_blank">
              <h3 className="group-hover:text-accent mb-1 text-xl font-semibold transition-colors duration-200">
                {title === "projects"
                  ? `${item.title}`
                  : `${isWorkItem(item) ? item.company : item.title}`}
              </h3>
              <p className="mb-2 text-sm text-gray-600">
                {title === "experiences" && isWorkItem(item)
                  ? `${item.title} (${item.duration})`
                  : ""}
              </p>
              <p className="text-gray-500">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
      {callForActionHref && callForActionText && (
        <Link
          href={callForActionHref}
          className="text-accent group mt-6 inline-flex items-center gap-1 hover:underline"
        >
          {callForActionText}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      )}
    </section>
  );
};

export default Section;
