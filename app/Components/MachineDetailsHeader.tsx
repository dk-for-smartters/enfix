"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBack, NavigateNext } from "@mui/icons-material";
import InitialLettersAvatar from "./InitialLettersAvtar";

export default function MachineDetailsHeader() {
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
                Machine Details
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
            {enable ? "Enable Machine" : "Disable Machine"}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: "fit-contnent",
            }}
          >
            <InitialLettersAvatar name={machineInfo.machineName} />
            <Box sx={{ ml: 3 }}>
              <Typography fontWeight={600} fontSize="16px" lineHeight="25.2px">
                {machineInfo.machineName}
              </Typography>
              <Typography fontWeight={400} fontSize="12px" lineHeight="22.4px">
                {machineInfo.model}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", width: "max-content", ml: 5 }}>
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
              <Box>
                <Typography
                  fontWeight={400}
                  fontSize="12px"
                  lineHeight="23px"
                  color="#656565"
                >
                  Machine Status
                </Typography>
                <Typography fontWeight={600} fontSize="16px" lineHeight="25px">
                  {machineInfo.status}
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
  <Link key="2" href="/manage-machines">
    Manage Machines
  </Link>,
  <Link key="3" href="/manage-machines/machine-details">
    Machine Details
  </Link>,
];

const machineInfo: {
  machineName: string;
  model: string;
  status: string;
} = {
  machineName: "Roller Coaster",
  model: "Minolta, Jaguar-345",
  status: "Subscribed, 29 Days Remaining",
};
