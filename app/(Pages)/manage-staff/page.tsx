import AddNewStaffBtn from "@/app/Components/AddNewStaffBtn";
import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ManageStaffHeader from "../../Components/ManageStaffHeader";
import StaffTable from "@/app/Components/StaffTable";

export default function ManageStaff() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography fontWeight={600} fontSize="14px">
                Manage Staff
              </Typography>

              <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ fontSize: 10, ".MuiBreadcrumbs-separator": { mx: 0 } }}
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Box>

            <AddNewStaffBtn />
          </Box>
        </Container>
      </Box>
      <Box sx={{ my: 2.3 }}>
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: "#fff", borderRadius: 1.4 }}>
            <ManageStaffHeader />

            <StaffTable />
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
  <Link key="2" color="inherit" href="/manage-staff">
    Manage Staff
  </Link>,
];
