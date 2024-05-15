"use client";

import React, { useState } from "react";
import {
  alpha,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import {
  DescriptionOutlined,
  KeyboardArrowDown,
  Refresh,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "solid .5px #ccc",
  borderRadius: "5px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "36ch",
    },
    border: "solid .5 #ccc",
    borderRadius: "5px",
    fontSize: "12px",
  },
}));

export default function ManageMachinesHeader() {
  const [machineType, setMachineType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMachineType(event.target.value);
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
        <Typography>All Machines</Typography>

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

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Type name to Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      <Box>
        <FormControl
          sx={{
            minWidth: 90,
            bgcolor: "#F4F4F4",
            border: "0 !important",
            mr: 1.4,
          }}
        >
          <Select
            value={machineType}
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
            <MenuItem value="">All Machines</MenuItem>
            <MenuItem value="Manager">Roller Coaster</MenuItem>
            <MenuItem value="Lead">Spin Tora</MenuItem>
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
