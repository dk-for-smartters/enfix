import React from "react";
import { Box, Card, Typography } from "@mui/material";
import AssignedJobsDropDown from "@/app/Components/AssigedJobsDropDown";
import JobsTable from "@/app/Components/JobsTable";

export default function AssignedJobs() {
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
          Assigned Jobs
        </Typography>

        <AssignedJobsDropDown />
      </Box>

      <JobsTable />
    </Card>
  );
}
