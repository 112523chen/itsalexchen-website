import { MapPin, Laptop } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="animate-fade-in mb-4 text-4xl font-bold">
        <span className="inline-block">Alex Chen</span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          New York, NY
        </div>
        <div className="flex items-center gap-2">
          <Laptop className="h-4 w-4" />
          AWS Certified Data Engineer with 2+ years of experience
        </div>
      </div>
      <p className="animate-fade-in-up leading-relaxed">
        I&apos;m a data engineer & CUNY alum. I love solving problems in the
        data space and building cool things. I enjoy learning new things and
        seeing how they can be applied to real-world problems. If you need
        someone with the skills and curiosity to tackle your data problems, give
        me a shout at{" "}
        <a
          href="mailto:itsalexchen@gmail.com"
          className="text-accent underline hover:text-blue-300"
        >
          itsalexchen@gmail.com
        </a>
      </p>
    </header>
  );
};

export default Header;
