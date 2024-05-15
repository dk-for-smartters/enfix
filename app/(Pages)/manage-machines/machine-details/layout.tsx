import type { Metadata } from "next";
import { Box, Container } from "@mui/material";
import MachineDetailsHeader from "@/app/Components/MachineDetailsHeader";
import MachinesDetailsSideBar from "@/app/Components/MachineDetailsSideBar";

export const metadata: Metadata = {
  title: "Enfix: Machine Details",
};

export default function MachineDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MachineDetailsHeader />
      <Box sx={{ bgcolor: "#F4F4F4" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
            <MachinesDetailsSideBar />

            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
}
