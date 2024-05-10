import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function ManageInventory() {
  return (
    <>
      <Box sx={{ bgcolor: "#fff", py: 1.8 }}>
        <Container maxWidth="xl">
          <Typography>Manage Inventory</Typography>
        </Container>
      </Box>
    </>
  );
}
