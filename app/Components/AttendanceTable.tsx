"use client";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

interface Attendance {
  date: string;
  status: string;
  checkIn: string;
  checkOut: string;
  elapsedTime: string;
  avgWorkHr: string;
}

export default function AttendanceTable() {
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
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Check-In</TableCell>
          <TableCell>Check-Out</TableCell>
          <TableCell>Elapsed Time</TableCell>
          <TableCell>Avg. Working Hours</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {attendance?.length > 0 ? (
          attendance?.map((attend, i) => (
            <TableRow key={i}>
              <TableCell>{attend.date}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: attend.status.includes("Present")
                        ? "#50AB59"
                        : "#D54545",
                      border: `solid 1px ${
                        attend.status.includes("Present")
                          ? "#50AB59"
                          : "#D54545"
                      }`,
                      width: "fit-content",
                      p: "0 8px",
                      borderRadius: "5px",
                    }}
                  >
                    {attend.status}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{attend.checkIn}</TableCell>
              <TableCell>{attend.checkOut}</TableCell>
              <TableCell>{attend.elapsedTime}</TableCell>
              <TableCell>{attend.avgWorkHr}</TableCell>
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

const attendance: Attendance[] = [
  {
    date: "14.10.2024",
    status: "Present",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Present",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Present",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Present",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Absent",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Absent",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Absent",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Absent",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
  {
    date: "14.10.2024",
    status: "Absent",
    checkIn: "10.10AM",
    checkOut: "5.00PM",
    elapsedTime: "6.2Hrs",
    avgWorkHr: "3 Hrs",
  },
];
