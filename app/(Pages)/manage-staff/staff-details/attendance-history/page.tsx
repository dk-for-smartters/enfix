import React from "react";
import { Box, Card } from "@mui/material";
import AttendanceTable from "@/app/Components/AttendanceTable";
import AttendanceHistoryHeader from "@/app/Components/AttendanceHistoryHeader";
import AttendanceHistoryBarChart from "@/app/Components/AttendanceHistoryBarChart";

export default function AttendanceHistory() {
  return (
    <Box sx={{ width: "-webkit-fill-available", ml: 3 }}>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <AttendanceHistoryHeader />

        <AttendanceTable />
      </Card>

      <AttendanceHistoryBarChart labels={labels} data={data} />
    </Box>
  );
}

const labels = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const data = [
  2.8, 3.7, 2.25, 1.25, 1.5, 1.75, 2.5, 1.5, 1.5, 1.6, 4.1, 2.5, 2.8, 2.4, 3.8,
  3.56, 2.3, 3.7, 1.9, 3.7, 1.8, 3.6, 2.55, 3.47, 1.75, 1.67, 3.42, 1.5, 1.22,
  1.1, 1.1,
];
