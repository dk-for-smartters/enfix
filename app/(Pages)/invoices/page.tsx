import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Invoices() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Typography>Invoices</Typography>
        </Container>
      </Box>
    </>
  );
}
