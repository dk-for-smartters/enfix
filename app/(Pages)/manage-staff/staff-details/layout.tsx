import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import StaffDetailsHeader from "@/app/Components/StaffDetailsHeader";
import StaffDetailsSideBar from "@/app/Components/StaffDetailsSideBar";

export const metadata: Metadata = {
  title: "Enfix: Staff Details",
};

export default function StaffDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StaffDetailsHeader />
      <Box sx={{ bgcolor: "#F4F4F4" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
            <StaffDetailsSideBar />
            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
}
