"use client";

import React, { useEffect, useRef } from "react";
import { Card, Typography } from "@mui/material";
import { axisClasses, BarChart } from "@mui/x-charts";

export default function AttendanceHistoryBarChart() {
  const tickPlacement = "middle";
  const tickLabelPlacement = "middle";

  return (
    <Card
      sx={{
        boxShadow: "none",
        width: "100%",
        borderRadius: "10px",
        mt: 3,
        p: 1.4,
        height: "40vh",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "22.4px",
        }}
      >
        Hours Worked
      </Typography>

      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "day",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </Card>
  );
}

const dataset = [
  {
    hours: 2.8,
    day: 1,
  },
  {
    hours: 3.7,
    day: 2,
  },
  {
    hours: 2.25,
    day: 3,
  },
  {
    hours: 1.25,
    day: 4,
  },
  {
    hours: 1.5,
    day: 5,
  },
  {
    hours: 1.75,
    day: 6,
  },
  {
    hours: 2.5,
    day: 7,
  },
  {
    hours: 1.5,
    day: 8,
  },
  {
    hours: 1.5,
    day: 9,
  },
  {
    hours: 1.6,
    day: 10,
  },
  {
    hours: 4.1,
    day: 11,
  },
  {
    hours: 2.5,
    day: 12,
  },
  {
    hours: 2.8,
    day: 13,
  },
  {
    hours: 2.4,
    day: 14,
  },
  {
    hours: 3.8,
    day: 15,
  },
  {
    hours: 3.56,
    day: 16,
  },
  {
    hours: 2.3,
    day: 17,
  },
  {
    hours: 3.7,
    day: 18,
  },
  {
    hours: 1.9,
    day: 19,
  },
  {
    hours: 3.7,
    day: 20,
  },
  {
    hours: 1.8,
    day: 21,
  },
  {
    hours: 3.6,
    day: 22,
  },
  {
    hours: 2.55,
    day: 23,
  },
  {
    hours: 3.47,

    day: 24,
  },
  {
    hours: 1.75,
    day: 25,
  },
  {
    hours: 1.67,
    day: 26,
  },
  {
    hours: 3.42,
    day: 27,
  },
  {
    hours: 1.5,
    day: 28,
  },
  {
    hours: 1.22,
    day: 29,
  },
  {
    hours: 1.1,
    day: 30,
  },
  {
    hours: 1.1,
    day: 31,
  },
];

const valueFormatter = (value: number | null) => `Worked ${value} Hrs`;

const chartSetting = {
  series: [{ dataKey: "hours", valueFormatter }],
  height: 275,
  colors: ["#FFD058"],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};
