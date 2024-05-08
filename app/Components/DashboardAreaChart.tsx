"use client";

import React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  Typography,
} from "@mui/material";

export default function DashboardAreaChart() {
  const [duration, setDuration] = React.useState("Monthly");

  const handleChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 3.2,
        }}
      >
        <Typography fontWeight={700} fontSize={14}>
          Subscriptions
        </Typography>

        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value={duration}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Yearly">Yearly</MenuItem>
            <MenuItem value="Quarterly">Quarterly</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Slide in={true} direction="left" timeout={1000}>
        <LineChart
          width={500}
          height={300}
          series={[
            {
              data: uData,
              area: true,
              showMark: false,
              curve: "linear",
              color: "#FFD058",
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          grid={{
            horizontal: true,
            vertical: true,
          }}
          sx={{
            "& .MuiChartsGrid-line": {
              strokeDasharray: "2 2",
              strokeWidth: 0.5,
            },

            [`& .${lineElementClasses.root}`]: {
              display: "none",
            },
          }}
        />
      </Slide>
    </Box>
  );
}

const uData = [14, 10, 20, 9, 40, 20, 20, 30, 20, 30, 20, 40];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
