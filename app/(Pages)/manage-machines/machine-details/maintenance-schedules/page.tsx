import React from "react";
import { Box, Card, Typography } from "@mui/material";
import MaintenanceScheduleTable from "@/app/Components/MaintenanceScheduleTable";
import AddNewScheduleBtn from "@/app/Components/AddNewScheduleBtn";

export default function MaintenanceSchedules() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1.4,
        }}
      >
        <Typography fontWeight={600} fontSize="14px">
          All Schedules
        </Typography>

        <AddNewScheduleBtn />
      </Box>

      <MaintenanceScheduleTable />
    </Card>
  );
}
