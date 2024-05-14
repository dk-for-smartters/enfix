"use client";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function SubscriptionStep() {
  const [subscriptionPlan, setSubscriptionPlan] = useState("6 Months");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        {["3 Months", "6 Months", "12 Months"].map((plan, i) => (
          <Button
            key={plan + i}
            variant="outlined"
            color={subscriptionPlan === plan ? "success" : "inherit"}
            onClick={() => setSubscriptionPlan(plan)}
            sx={{
              textTransform: "capitalize",
              mx: 1,
              height: "140px",
              width: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              p: "0 !important",
              pt: "23px !important  ",
              position: "relative",
              border:
                subscriptionPlan === plan
                  ? "2px solid #50AB59 !important"
                  : "2px solid #E4E4E4 !important",
              bgcolor: subscriptionPlan === plan ? "#E8FFEA" : "transparent",
            }}
          >
            <Typography variant="caption" fontWeight={400} color="#363740">
              {plan}
            </Typography>
            <Typography variant="h5" fontWeight={700} color="#363740">
              ₹ 246
            </Typography>
            <Box
              sx={{
                bgcolor: subscriptionPlan === plan ? "#50AB59" : "#E4E4E4",
                color: subscriptionPlan === plan ? "#FFF" : "#000",
                width: "100%",
                position: "absolute",
                bottom: 0,
                py: 1.4,
              }}
            >
              {subscriptionPlan === plan ? "Selected" : "Select"}
            </Box>
          </Button>
        ))}
      </Box>

      <FormControl fullWidth color="warning" sx={{ mt: 5, mb: 1 }}>
        <InputLabel id="payment-method-label">Select Payment Type</InputLabel>
        <Select
          labelId="payment-method-label"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          label="Select Payment Type"
        >
          <MenuItem value="UPI">UPI</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card">Debit Card</MenuItem>
          <MenuItem value="Net Banking">Net Banking</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
