import React from "react";
import { Box, Card, Typography } from "@mui/material";
import AssignedJobsDropDown from "@/app/Components/AssigedJobsDropDown";
import JobsTable from "@/app/Components/JobsTable";

export default function AssignedJobs() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        minHeight: "100vh",
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
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
