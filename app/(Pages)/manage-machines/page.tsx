import React from "react";
import Link from "next/link";
import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import MachineTable from "@/app/Components/MachineTable";
import AddNewMachineBtn from "@/app/Components/AddMachineBtn";
import ManageMachinesHeader from "@/app/Components/ManageMachinesHeader";

export default function ManageMachines() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography fontWeight={600} fontSize="14px">
                Manage Machines
              </Typography>

              <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ fontSize: 10, ".MuiBreadcrumbs-separator": { mx: 0 } }}
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>

            <AddNewMachineBtn />
          </Box>
        </Container>
      </Box>

      <Box sx={{ my: 2.3 }}>
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: "#fff", borderRadius: 1.4 }}>
            <ManageMachinesHeader />

            <MachineTable />
          </Box>
        </Container>
      </Box>
    </>
  );
}

const breadcrumbs = [
  <Link key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link key="2" color="inherit" href="/manage-machines">
    Manage Machines
  </Link>,
];
