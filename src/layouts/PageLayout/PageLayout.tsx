import React, { ReactElement } from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import "./PageLayout.css";

interface IPageLayout {
  children: ReactElement | ReactElement[];
}

export const PageLayout = ({ children }: IPageLayout) => {
  return (
    <div className="relative w-full h-screen overflow-auto flex flex-row flex-wrap box-border bg-white text-black">
      <PageHeader />
      {/* Content */}
      <div className="bg-white w-full weird-behav">{children}</div>
    </div>
  );
};
