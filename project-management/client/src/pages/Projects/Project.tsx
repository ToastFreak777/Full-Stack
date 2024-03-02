import React, { useState } from "react";

import { Box, Grid } from "@mui/material";
import Todos from "../../components/Todos";

import { useLoaderData } from "react-router-dom";

import { makeRequest } from "../../utils/api";

const Project = () => {
  const tasks = useLoaderData();

  return (
    <Box sx={{ p: 4, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Todos
            tasks={tasks.filter((task) => task.attributes.status === "ISSUED")}
            title="To Do"
            status="ISSUED"
          />
        </Grid>
        <Grid item xs={6}>
          <Todos
            tasks={tasks.filter((task) => task.attributes.status === "PENDING")}
            title="In Progress"
            status="PENDING"
          />
        </Grid>
        <Grid item xs={6}>
          <Todos
            tasks={tasks.filter(
              (task) => task.attributes.status === "REVIEWING"
            )}
            title="Review"
            status="REVIEWING"
          />
        </Grid>
        <Grid item xs={6}>
          <Todos
            tasks={tasks.filter(
              (task) => task.attributes.status === "COMPLETED"
            )}
            title="Completed"
            status="COMPLETED"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;

export const loader = async () => {
  const {
    data: { data },
  } = await makeRequest.get("/todos");
  return data;
};
