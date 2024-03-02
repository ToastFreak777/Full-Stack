import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import ProjectModal from "../../components/ProjectModal";
import { makeRequest } from "../../utils/api";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Project Name", width: 130 },
  { field: "createdAt", headerName: "Date Created", width: 130 },
  { field: "updatedAt", headerName: "Last Updated", width: 160 },
  {
    field: "age",
    headerName: "Age",
    width: 90,
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params: GridValueGetterParams) => {
      const projectAge = Math.floor(
        Math.abs(new Date(params.row.createdAt) - new Date()) / 86400000
      );
      return `${projectAge} days `;
    },
  },
  { field: "contributors", headerName: "Contributors", width: 130 },
  {
    field: "owner",
    headerName: "Owner",
    width: 100,
  },
];

const createRows = (data) => {
  let rows = [];
  data.forEach((item) => {
    let row = {
      id: item.id,
      ...item.attributes,
      createdAt: new Date(item.attributes.createdAt).toLocaleDateString(),
      updatedAt: new Date(item.attributes.updatedAt).toLocaleString(),
      owner: item.attributes.owner.data.attributes.username,
      contributors: item.attributes.contributors.data.length
        ? item.attributes.contributors.data
        : "None",
    };
    rows.push(row);
  });
  return rows;
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState(useLoaderData());

  const navigate = useNavigate();

  const handleClick: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    navigate(`/projects/${params.row.id}`);
  };

  const fetchProjects = async () => {
    const {
      data: { data },
    } = await makeRequest.get("/projects");
    setProjects(data);
  };

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={createRows(projects)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowClick={handleClick}
        sx={{ ".MuiDataGrid-row": { cursor: "pointer" } }}
      />
      <IconButton
        color="success"
        aria-label="add project"
        component="label"
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setShowModal(true)}
      >
        <AddCircle fontSize="large" />
      </IconButton>
      <ProjectModal
        open={showModal}
        close={() => setShowModal(false)}
        reRender={fetchProjects}
      />
    </div>
  );
};

export default Projects;

export const loader = async () => {
  const {
    data: { data },
  } = await makeRequest.get("/projects?populate=*");
  return data;
};
