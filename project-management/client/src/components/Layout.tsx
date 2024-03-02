import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

import { Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default Layout;
