import type { FC } from "react";

const HealthPage: FC = () => {
  // check if browser or server has requested the page
  const isBrowser = typeof window !== "undefined";

  return <div>200 OK {isBrowser ? "Client" : "Server"}</div>;
};

export default HealthPage;
