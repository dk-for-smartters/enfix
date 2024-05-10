"use client";

import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import {
  DescriptionOutlined,
  KeyboardArrowDown,
  Refresh,
} from "@mui/icons-material";

export default function ManageStaffHeader() {
  const [month, setMonth] = React.useState("January");
  const [dateFrom, setDateFrom] = React.useState("__-__-____");
  const [dateTo, setDateTo] = React.useState("__-__-____");

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2.3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Attendance History</Typography>

        <Button
          variant="contained"
          color="inherit"
          sx={{
            bgcolor: "#FBC213",
            minWidth: "fit-content",
            p: "2px 5px !important",
            borderRadius: "10px",
            ml: 1.4,
            height: "fit-content",
          }}
        >
          <Refresh sx={{ fontSize: "18px" }} />
        </Button>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Date From"
            type="date"
            color="warning"
            value={dateFrom}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDateFrom(event.target.value);
            }}
          />

          <TextField
            label="Date To"
            type="date"
            color="warning"
            value={dateTo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDateTo(event.target.value);
            }}
            sx={{ ml: 1.4 }}
          />
        </Box>

        <FormControl
          sx={{
            minWidth: 90,
            bgcolor: "#F4F4F4",
            border: "0 !important",
            mx: 2,
          }}
        >
          <Select
            value={month}
            onChange={handleChange}
            color="warning"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={DownArrow}
            sx={{
              ".MuiSelect-select": {
                pr: "0 !important",
                py: "16px !important",
              },
            }}
          >
            <MenuItem value="">Overall</MenuItem>
            <MenuItem value="January">January</MenuItem>
            <MenuItem value="February">February</MenuItem>
            <MenuItem value="March">March</MenuItem>
            <MenuItem value="April">April</MenuItem>
            <MenuItem value="May">May</MenuItem>
            <MenuItem value="May">May</MenuItem>
            <MenuItem value="June">June</MenuItem>
            <MenuItem value="July">July</MenuItem>
            <MenuItem value="August">August</MenuItem>
            <MenuItem value="September">September</MenuItem>
            <MenuItem value="October">October</MenuItem>
            <MenuItem value="November">November</MenuItem>
            <MenuItem value="December">December</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="inherit"
          size="large"
          sx={{ p: "6.4px 10px !important", textTransform: "capitalize" }}
        >
          <DescriptionOutlined sx={{ mr: 1 }} /> Export
        </Button>
      </Box>
    </Box>
  );
}

function DownArrow() {
  return (
    <InputAdornment position="end" sx={{ mr: 1 }}>
      <KeyboardArrowDown sx={{ color: "#000" }} />
    </InputAdornment>
  );
}
