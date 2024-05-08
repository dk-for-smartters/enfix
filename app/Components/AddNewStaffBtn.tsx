"use client";

import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function AddNewStaffBtn() {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        textTransform: "full-size-kana",
        bgcolor: "#373737",
        color: "#fff",
        ":hover": { color: "#000" },
      }}
    >
      <Add fontSize="small" sx={{ mr: 1 }} /> Add New Staff
    </Button>
  );
}
