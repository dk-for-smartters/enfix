"use client";

import React from "react";
import { Card } from "@mui/material";
import SubscriptionTable from "@/app/Components/SubcriptionTable";
import SubscriptionHistoryHeader from "@/app/Components/SubscriptionHistoryHeader";

export default function SubscriptionHistory() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <SubscriptionHistoryHeader />

      <SubscriptionTable />
    </Card>
  );
}
