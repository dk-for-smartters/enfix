import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function TodaysSchedules() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Typography>Today&apos;s Schedule</Typography>
        </Container>
      </Box>
    </>
  );
}
