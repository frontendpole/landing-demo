import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen font-sans bg-white">
      {children}
    </div>
  );
};
