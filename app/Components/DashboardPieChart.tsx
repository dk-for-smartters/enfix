"use client";

import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function DashboardPieChart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "36%",
      }}
    >
      <Typography fontWeight={700} fontSize={14} sx={{ mb: 3.2 }}>
        Today&apos;s Schedules
      </Typography>

      <PieChart
        sx={{ display: "flex", flexDirection: "column" }}
        series={[
          {
            data: [
              { id: 0, value: 7, label: `Pending Schedules: ${7}` },
              { id: 0, value: 7, label: `Ongoing Schedules: ${7}` },
              { id: 0, value: 7, label: `Completed Schedules: ${7}` },
            ],
            innerRadius: 50,
            outerRadius: 90,
            endAngle: -360,
            cx: 86,
          },
        ]}
        // slotProps={{
        //   legend: {
        //     position: { horizontal: "middle", vertical: "bottom" },
        //     direction: "row",
        //   },
        // }}
        height={180}
        colors={["#FFF3CD", "#FFD12E", "#CCA416"]}
      />
    </Box>
  );
}
