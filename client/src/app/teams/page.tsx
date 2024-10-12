"use client";
import { useGetTeamsQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Header from "@/components/Project/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/utils/utilityFunctions";
import Image from "next/image";

const CustomToolbar = () => (
  <GridToolbarContainer className="toolbar flex gap-2">
    <GridToolbarFilterButton />
    <GridToolbarExport />
  </GridToolbarContainer>
);

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  {
    field: "productOwnerUsername",
    headerName: "Product Owner",
    width: 200,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-between">
        <span>{params.value}</span>
        <div className="h-9 w-9">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${params.row.productOwnerImageUrl}`}
            alt={params.row.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    field: "projectManagerUsername",
    headerName: "Project Manager",
    width: 200,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-between">
        <span>{params.value}</span>
        <div className="h-9 w-9">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${params.row.projectManagerImageUrl}`}
            alt={params.row.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
];

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !teams) return <div>Error fetching teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
          pagination
          slots={{
            toolbar: CustomToolbar,
          }}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Teams;
