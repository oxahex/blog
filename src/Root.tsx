import React from "react";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return <>{children}</>;
};

export default Root;