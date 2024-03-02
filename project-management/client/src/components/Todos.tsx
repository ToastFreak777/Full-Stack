import React, { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import TodoModal from "./TodoModal";

const Todos = ({ tasks, title, status }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(tasks);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(64, 64, 70, 0.3)",
          border: "1px solid black",
          borderRadius: "5px",
          width: "100%",
          height: "450px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderBottom: "1px solid grey", p: ".2em  1em" }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Typography variant="h5">{title}</Typography>
            <Typography
              color="white"
              sx={{
                backgroundColor: "grey",
                borderRadius: "10px",
                width: 22,
                height: 22,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              0
            </Typography>
          </Stack>
          <IconButton
            aria-label="add todo"
            sx={{ "&:hover": { backgroundColor: "grey", color: "white" } }}
            onClick={() => setShowModal(true)}
          >
            <AddIcon />
          </IconButton>
        </Stack>
        <Stack>
          {tasks.map((task) => (
            <Typography key={task.id}>{task.attributes.title}</Typography>
          ))}
        </Stack>
      </Box>
      <TodoModal
        open={showModal}
        close={() => setShowModal(false)}
        status={status}
      />
    </>
  );
};

export default Todos;
