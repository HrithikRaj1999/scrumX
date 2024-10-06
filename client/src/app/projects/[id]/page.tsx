"use client";
import Boardview from "@/components/Project/BoardView/BoardView";
import ModalNewProject from "@/components/Project/CreateNewProject/ModalNewProject";
import ListView from "@/components/Project/ListView/ListView";
import ProjectHeader from "@/components/Project/ProjectHeader";
import TableView from "@/components/Project/TableView/TableView";
import TimelineView from "@/components/Project/TimelineView/TimelineView";
import ModalNewTask from "@/components/Task/ModalNewTask";
import React, { useState } from "react";

type Props = { params: { id: string } };

function Project({ params }: Props) {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalOpenForNewTask, setModalOpenForNewTask] = useState(false);
  const [isModalOpenForNewProject, SetIsModalOpenForNewProject] = useState(false);
  const ACTIVE_TAB_COMPONENT: { [key: string]: () => any } = {
    Board: () => <Boardview {...{ params, setModalOpenForNewTask }} />,
    Timeline: () => <TimelineView {...{ id, setModalOpenForNewTask }} />,
    Table: () => <TableView {...{ id, setModalOpenForNewTask }} />,
    List: () => <ListView {...{ id, setModalOpenForNewTask }} />,
  };
  const ActiveComponent = ACTIVE_TAB_COMPONENT[activeTab];
  return (
    <div>
      <ProjectHeader {...{ activeTab, setActiveTab,setModalOpenForNewTask }} />
      <ActiveComponent />
      <ModalNewProject
        isOpen={isModalOpenForNewProject}
        onClose={() => SetIsModalOpenForNewProject(false)}
      />
       <ModalNewTask
        isOpen={isModalOpenForNewTask}
        onClose={() => setModalOpenForNewTask(false)}
        id={id}
      />
    </div>
  );
}

export default Project;
