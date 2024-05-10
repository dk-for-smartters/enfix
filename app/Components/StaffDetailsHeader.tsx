"use client";

import { ArrowBack, NavigateNext } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import InitialLettersAvatar from "./InitialLettersAvtar";

export default function StaffDetailsHeader() {
  const [enable, setEnable] = useState(false);

  return (
    <Box sx={{ bgcolor: "#fff", py: 2 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ mr: 1 }}>
              <ArrowBack sx={{ color: "#000" }} />
            </IconButton>
            <Box>
              <Typography fontWeight={600} fontSize="14px">
                Staff Details
              </Typography>

              <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                aria-label="breadcrumb"
                sx={{
                  fontSize: 10,
                  ".MuiBreadcrumbs-separator": { mx: 0 },
                }}
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>
          </Box>

          <Button
            onClick={() => {
              setEnable(!enable);
            }}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              bgcolor: enable ? "#50AB59" : "#D54545",
              ":hover": { bgcolor: enable ? "#50AB40" : "#D54" },
            }}
          >
            {enable ? "Enable Employee" : "Disable Staff"}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: "fit-contnent",
            }}
          >
            <InitialLettersAvatar name={staffInfo.empName} />
            <Box sx={{ ml: 3 }}>
              <Typography fontWeight={600} fontSize="16px" lineHeight="25.2px">
                {staffInfo.empName}
              </Typography>
              <Typography fontWeight={400} fontSize="12px" lineHeight="22.4px">
                {staffInfo.empEmail}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", width: "79%", justifyContent: "right" }}>
            <Box
              sx={{
                p: 2,
                borderRadius: "5px",
                border: "solid #E0E0E0 1px",
                display: "flex",
                mr: 2,
                minWidth: "fit-content",
              }}
            >
              <CardMedia
                component="img"
                src="/Box.svg"
                alt=""
                sx={{ height: 46, width: 44, mr: 2 }}
              />
              <Box>
                <Typography
                  fontWeight={400}
                  fontSize="12px"
                  lineHeight="22.4px"
                  color="#656565"
                >
                  Status
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="25.2px"
                >
                  {staffInfo.status}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: "5px",
                border: "solid #E0E0E0 1px",
                display: "flex",
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                src="/Box.svg"
                alt=""
                sx={{ height: 46, width: 44, mr: 2 }}
              />
              <Box>
                <Typography
                  fontWeight={400}
                  fontSize="12px"
                  lineHeight="22.4px"
                  color="#656565"
                >
                  Completed Schedules
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize="16px"
                  lineHeight="25.2px"
                >
                  {staffInfo.completedSchedules}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const breadcrumbs = [
  <Link key="1" href="/">
    Home
  </Link>,
  <Link key="2" href="/manage-staff">
    Manage Staff
  </Link>,
  <Link key="3" href="/manage-staff/staff-details">
    Staff Details
  </Link>,
];

const staffInfo: {
  empName: string;
  empEmail: string;
  status: string;
  completedSchedules: number;
} = {
  empName: "Dinesh Kriplani",
  empEmail: "dk@dk.com",
  status: "Subscribed, Expiring in 20 Days",
  completedSchedules: 10,
};
