"use client";

import React from "react";
import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function AssigedJobsDropDown() {
  const [jobs, setJobs] = React.useState("Today's");

  const handleChange = (event: SelectChangeEvent) => {
    setJobs(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 90,
        bgcolor: "#F4F4F4",
        border: "0 !important",
      }}
    >
      <Select
        value={jobs}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={DownArrow}
        sx={{
          ".MuiSelect-select": {
            pr: "0 !important",
            py: "9.5px !important",
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Today's">Today&apos;s</MenuItem>
        <MenuItem value="Tomorrow's">Tomorrow&apos;s</MenuItem>
        <MenuItem value="Upcoming">Upcoming</MenuItem>
      </Select>
    </FormControl>
  );
}

function DownArrow() {
  return (
    <InputAdornment position="end" sx={{ mr: 1 }}>
      <KeyboardArrowDown sx={{ color: "#000" }} />
    </InputAdornment>
  );
}
