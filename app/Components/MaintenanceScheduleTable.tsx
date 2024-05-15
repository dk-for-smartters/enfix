"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Schedules {
  id: number;
  name: string;
  frequency: string;
  upcomingDate: string;
}

export default function MaintenanceScheduleTable() {
  const router = useRouter();

  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow
          sx={{
            ".MuiTableCell-root": { bgcolor: "#373737", color: "#fff" },
          }}
        >
          <TableCell>ID</TableCell>
          <TableCell>Schedule Name</TableCell>
          <TableCell>Frequency</TableCell>
          <TableCell>Upcoming Date</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {schedules?.length > 0 ? (
          schedules?.map((schedule, i) => (
            <TableRow key={i}>
              <TableCell>{schedule.id.toString().padStart(4, "0")}</TableCell>
              <TableCell>{schedule.name}</TableCell>
              <TableCell>{schedule.frequency}</TableCell>
              <TableCell>{schedule.upcomingDate}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#373737",
                    color: "#FFF",
                    p: "0 9px !important",
                    ":hover": { bgcolor: "#000" },
                  }}
                >
                  View
                </Button>

                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#FFD527",
                    p: "0 9px !important",
                    ":hover": { bgcolor: "#FFCD00" },
                    mx: 1.4,
                  }}
                >
                  Edit
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    textTransform: "capitalize",
                    p: "0 9px !important",
                    ":hover": { bgcolor: "#D54545", color: "#FFF" },
                  }}
                >
                  Delete
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
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 2,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 3,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 4,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 5,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 6,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 7,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 8,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
  {
    id: 9,
    name: "Regular Maintenance Work",
    frequency: "Weekly : Sat & Sun",
    upcomingDate: "14.10.2024",
  },
];
