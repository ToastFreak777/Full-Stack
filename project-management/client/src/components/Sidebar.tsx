import React, { useState } from "react";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";

// Icons
import {
  Notifications,
  AccountCircle,
  Apps,
  BarChart,
  Group,
  Description,
  Settings,
  Edit,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const TABS = {
  PROJECTS: <Apps />,
  STATISTICS: <BarChart />,
  USERS: <Group />,
  FILES: <Description />,
  SETTINGS: <Settings />,
};

const buttonStyle = {
  width: "100%",
  borderWidth: "2px",
  color: "rgba(255, 255, 255,0.8)",
  "&:hover": {
    backgroundColor: "rgba(0, 127, 255, 0.2)",
    borderWidth: "2px",
  },
  svg: {
    color: "rgba(255, 255, 255, 0.5)",
  },
};

const buttonActiveStyle = {
  width: "100%",
  borderWidth: "2px",
  color: "rgba(255, 255, 255,0.8)",
  backgroundColor: "rgba(0, 127, 255, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(0, 127, 255, 0.2)",
    borderWidth: "2px",
  },
  svg: {
    color: "rgba(255, 255, 255, 0.5)",
  },
};

const Sidebar = () => {
  const [tab, setTab] = useState("PROJECTS");

  return (
    <Box
      sx={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#383838",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <AccountCircle fontSize="large" />
          <IconButton sx={{ position: "relative" }}>
            <Notifications
              fontSize="large"
              sx={{
                color: "rgba(255,255,255, 0.3)",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                color: "yellow",
                top: -10,
                left: "70%",
              }}
            >
              0
            </Typography>
          </IconButton>
        </Stack>
        <Stack spacing={1.5}>
          {Object.keys(TABS).map((key) => (
            <Link to={`/${key.toLowerCase()}`} key={key}>
              <Button
                variant="outlined"
                sx={tab === key ? buttonActiveStyle : buttonStyle}
                startIcon={TABS[key]}
                onClick={() => setTab(key)}
              >
                {key}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
