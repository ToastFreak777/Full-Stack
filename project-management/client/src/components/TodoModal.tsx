import React, { useState } from "react";
import { Modal, Box, Button, TextField, Stack, MenuItem } from "@mui/material";
import { priority } from "../constants";
import AddIcon from "@mui/icons-material/Add";
import Tag from "./Tag";
import { createTodo } from "../utils/api";

type formData = {
  title: string;
  description: string;
  status: "ISSUED" | "PENDING" | "REVIEWING" | "COMPLETED";
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  tags: [];
};

export const TodoModal = ({ open, close, status }) => {
  const [tag, setTag] = useState("");
  const defaultState: formData = {
    title: "",
    description: "",
    status,
    priority: "LOW",
    tags: [],
  };

  const [formData, setFormData] = useState(defaultState);

  const handleClose = () => {
    console.log("closing");
    close();
  };

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addTag = () => {
    setFormData((prev) => ({ ...prev, tags: [...formData.tags, tag] }));
    setTag("");
  };

  const removeTag = (tag: string) => {
    const tags = formData.tags.filter((item) => item !== tag);
    setFormData((prev) => ({ ...prev, tags }));
  };

  const create = async () => {
    await createTodo(formData);
    setFormData(defaultState);
    handleClose();
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
            label="Title"
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
          <TextField
            id="priority"
            label="Priority"
            variant="outlined"
            name="priority"
            select
            value={formData.priority}
            onChange={handleChange}
          >
            {Object.keys(priority).map((key) => (
              <MenuItem key={key} value={key}>
                {priority[key]}
              </MenuItem>
            ))}
          </TextField>
          <Stack
            sx={{
              position: "relative",
              height: "min-content",
            }}
          >
            <TextField
              id="tags"
              label="Tags"
              name="tags"
              variant="outlined"
              value={tag}
              onChange={(e) => setTag(e.target.value.toUpperCase())}
            />
            <AddIcon
              color="success"
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
                cursor: "pointer",
              }}
              onClick={addTag}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
            justifyContent="center"
          >
            {formData.tags.map((tag: string) => (
              <Tag key={tag} tag={tag} removeTag={removeTag} />
            ))}
          </Stack>
          <Button
            variant="contained"
            color="success"
            sx={{ width: "50%", left: "25%" }}
            onClick={create}
          >
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TodoModal;
