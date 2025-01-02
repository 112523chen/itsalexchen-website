import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavBar from "~/components/NavBar";

export const metadata: Metadata = {
  title: "Alex Chen",
  description: "Alex Chen's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} min-h-screen font-mono antialiased`}
    >
      <body>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
