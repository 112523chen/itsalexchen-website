import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FC } from "react";
import type { Item } from "~/types/Item";

type SectionProps = {
  title: string;
  items: Item[];
  callForActionHref?: string;
  callForActionText?: string;
};

const CertSection: FC<SectionProps> = ({
  title,
  items,
  callForActionHref,
  callForActionText,
}: SectionProps) => {
  return (
    <section className="animate-fade-in-up mb-16">
      <h3 className="mb-3 flex items-center text-2xl font-bold">
        <span className="text-accent mr-2">*</span> {title}
      </h3>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="group">
            <Link href={item.href} target="_blank">
              <h3 className="group-hover:text-accent text-l mb-1 text-gray-600 underline transition-colors duration-200">
                {item.title}
              </h3>
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

export default CertSection;
