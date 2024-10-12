import React from "react";
import { Priority } from "@/state/api";
import ReusablePriorityPage from "@/components/Priority/ReusablePriorityPage";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default Urgent;