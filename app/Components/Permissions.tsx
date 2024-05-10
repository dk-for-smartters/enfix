"use client";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

export default function Permissions({ title }: { title?: string }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize="14px">
        {title ? title : "Permission Access"}
      </Typography>

      <Box sx={{ mt: 1, display: { md: "flex", xs: "block" } }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Admin"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Customers"
            disabled
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Machines"
            disabled
          />
        </FormGroup>

        <FormGroup sx={{ ml: { md: 1.4, xs: 0 } }}>
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Admin"
            disabled
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Customers"
            disabled
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Manage Machines"
            disabled
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
