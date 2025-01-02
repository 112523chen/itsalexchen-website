import type { FC } from "react";

const HealthPage: FC = () => {
  // check if browser or server has requested the page
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    console.log("Where did you come from?");
  }

  return <div>200 OK</div>;
};

export default HealthPage;
