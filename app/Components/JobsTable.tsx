"use client";

import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Schedules {
  id: number;
  name: string;
  machineName: string;
  status: string;
}

export default function JobsTable() {
  const router = useRouter();

  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            bgcolor: "#373737",
            color: "#fff",
            ".MuiTableCell-root": { bgcolor: "unset", color: "unset" },
          }}
        >
          <TableCell>Schedule ID</TableCell>
          <TableCell>Schedule Name</TableCell>
          <TableCell>Machine Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {schedules?.length > 0 ? (
          schedules?.map((job, i) => (
            <TableRow key={i}>
              <TableCell>{job.id.toString().padStart(4, "0")}</TableCell>
              <TableCell>{job.name}</TableCell>
              <TableCell>{job.machineName}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: job.status.includes("Ongoing")
                        ? "#50AB59"
                        : "#D54545",
                      border: `solid 1px ${
                        job.status.includes("Ongoing") ? "#50AB59" : "#D54545"
                      }`,
                      width: "fit-content",
                      p: "0 8px",
                      borderRadius: "5px",
                    }}
                  >
                    {job.status}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    router.push(`/todays-schedules`);
                  }}
                  variant="contained"
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#FFD527",
                    p: "0 9px !important",
                  }}
                >
                  Go To Job
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
              No Data Available For Now.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const schedules: Schedules[] = [
  {
    id: 1,
    name: "Regular Maintenance Work",
    machineName: "Roller Coaster 1",
    status: `Ongoing: 1 Day`,
  },
  {
    id: 2,
    name: "Regular Maintenance Work",
    machineName: "Roller Coaster 1",
    status: `Ongoing: 1 Day`,
  },
  {
    id: 3,
    name: "Regular Maintenance Work",
    machineName: "Roller Coaster 1",
    status: `Ongoing: 1 Day`,
  },
  {
    id: 4,
    name: "Regular Maintenance Work",
    machineName: "Roller Coaster 1",
    status: "Pending",
  },
  {
    id: 5,
    name: "Regular Maintenance Work",
    machineName: "Roller Coaster 1",
    status: "Pending",
  },
];
