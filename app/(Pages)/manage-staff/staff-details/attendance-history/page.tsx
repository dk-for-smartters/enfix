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

      <AttendanceHistoryBarChart />
    </Box>
  );
}
