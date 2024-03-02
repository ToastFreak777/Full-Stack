import React, { useState } from "react";
import { Modal, Box, Button, TextField, Stack, MenuItem } from "@mui/material";
import { priority } from "../constants";
import { createProject } from "../utils/api";

const defaultState = {
  title: "",
  description: "",
  owner: null,
  contributers: [],
};

const ProjectModal = ({ open, close, reRender }) => {
  const [formData, setFormData] = useState(defaultState);

  const handleClose = () => {
    close();
  };

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {
    await createProject(formData);
    setFormData(defaultState);
    handleClose();
    reRender();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid black",
          backgroundColor: "white",
          p: 2,
          width: "600px",
          height: "max-content",
        }}
      >
        <Stack spacing={2}>
          <TextField
            id="title"
            label="Project Name"
            name="title"
            variant="standard"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            id="description"
            label="Description"
            name="description"
            variant="outlined"
            multiline
            value={formData.description}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ width: "50%", left: "25%" }}
            onClick={handleClick}
          >
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
