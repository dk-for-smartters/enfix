"use client";

import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Employee {
  id: number;
  image: string;
  name: string;
  email: string;
  status: string;
}

export default function StaffTable() {
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
          <TableCell>Image</TableCell>
          <TableCell>Employee Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>License</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {empData?.length > 0 ? (
          empData?.map((emp, i) => (
            <TableRow key={i}>
              <TableCell>{emp.id.toString().padStart(4, "0")}</TableCell>
              <TableCell>
                <CardMedia
                  component="img"
                  src={emp.image}
                  alt=""
                  sx={{ height: "50px", width: "50px" }}
                />
              </TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: emp.status === "Active" ? "#50AB59" : "#D54545",
                      border: `solid 1px ${
                        emp.status === "Active" ? "#50AB59" : "#D54545"
                      }`,
                      width: "fit-content",
                      p: "0 8px",
                      borderRadius: "5px",
                    }}
                  >
                    {emp.status}
                  </Typography>
                  {emp.status !== "Active" && (
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        textTransform: "capitalize",
                        bgcolor: "#50AB59",
                        p: "0 5px !important",
                        ml: 1.4,
                      }}
                    >
                      Renew <KeyboardArrowRight sx={{ mx: 1 }} />
                    </Button>
                  )}
                </Box>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    router.push(`/manage-staff/staff-details`);
                  }}
                  variant="contained"
                  color="inherit"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#FFD527",
                    p: "0 9px !important",
                  }}
                >
                  View Details
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

const empData: Employee[] = [
  {
    id: 1,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 2,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 3,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 4,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 5,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 6,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 7,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 8,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Deleting in 20 Days",
  },
  {
    id: 9,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Deleting in 20 Days",
  },
  {
    id: 10,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Expired Today",
  },
  {
    id: 11,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Expired Today",
  },
  {
    id: 12,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Expiring in 29 Days",
  },
  {
    id: 13,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Active",
  },
  {
    id: 14,
    image: "/emp.jpg",
    name: "Employee Name",
    email: "dk@dk.com",
    status: "Deleting in 20 Days",
  },
];
