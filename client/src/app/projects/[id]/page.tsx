"use client";
import ProjectHeader from "@/components/Project/ProjectHeader";
import React, { useState } from "react";

type Props = { params: { id: string } };

function Project({ params }: Props) {
  const { id } = params;
  const [activateTab, setActivateTab] = useState("Board");
  const [isModalOpenForNewTask, setModalOpenForNewTask] = useState(false);
  return <ProjectHeader {...{ activateTab, setActivateTab }} />;
}

export default Project;
