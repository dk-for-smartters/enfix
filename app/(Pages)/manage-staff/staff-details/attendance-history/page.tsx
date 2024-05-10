import React from "react";
import { Card } from "@mui/material";
import AttendanceTable from "@/app/Components/AttendanceTable";
import AttendanceHistoryHeader from "@/app/Components/AttendanceHistoryHeader";

export default function AttendanceHistory() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
        minHeight: "100vh",
      }}
    >
      <AttendanceHistoryHeader />

      <AttendanceTable />
    </Card>
  );
}
