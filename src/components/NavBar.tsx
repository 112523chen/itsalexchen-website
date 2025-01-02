"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// main function component with arrow function
const NavBar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "b":
          router.push("/blog");
          break;
        case "p":
          router.push("/projects");
          break;
      }
    };

    window.addEventListener("keypress", handleKeypress);

    return () => {
      window.removeEventListener("keypress", handleKeypress);
    };
  }, [router]);

  return (
    <nav className="mb-12 flex items-center justify-between text-sm">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="hover:text-accent transition-colors duration-200"
        >
          [h] home
        </Link>
        <Link
          href="/projects"
          className="hover:text-accent transition-colors duration-200"
        >
          [p] projects
        </Link>
        <Link
          href="/blog"
          className="hover:text-accent transition-colors duration-200"
        >
          [b] blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
