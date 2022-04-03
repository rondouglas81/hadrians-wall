import React from "react";
import { Cohort } from "./cohort.component";

export const Cohorts = () => {
  return (
    <div className="cohorts">
      <Cohort side="left" />
      <Cohort side="center" />
      <Cohort side="right" />
    </div>
  );
};
