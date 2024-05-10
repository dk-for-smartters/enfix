import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function UpcomingSchedules() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Typography>Upcoming Schedule</Typography>
        </Container>
      </Box>
    </>
  );
}
