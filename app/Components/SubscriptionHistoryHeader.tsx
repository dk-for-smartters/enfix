import { DescriptionOutlined, Refresh } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SubscriptionHistoryHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2.3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>All Transactions</Typography>

        <Button
          variant="contained"
          color="inherit"
          sx={{
            bgcolor: "#FBC213",
            minWidth: "fit-content",
            p: "2px 5px !important",
            borderRadius: "10px",
            ml: 1.4,
            height: "fit-content",
          }}
        >
          <Refresh sx={{ fontSize: "18px" }} />
        </Button>
      </Box>

      <Button
        variant="outlined"
        color="inherit"
        size="large"
        sx={{ p: "6.4px 10px !important", textTransform: "capitalize" }}
      >
        <DescriptionOutlined sx={{ mr: 1 }} /> Export
      </Button>
    </Box>
  );
}
