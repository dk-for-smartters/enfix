"use client";

import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

interface UserData {
  empName: string;
  empPhone: string;
  empEmail: string;
}

const initialUserData: UserData = {
  empName: "Dinesh Kriplani",
  empPhone: "+91 94289 20630",
  empEmail: "dinesh.kriplani20@smartters.in",
};

export default function PersonalDetailsTextFields() {
  const [userData, setUserData] = useState<UserData>(initialUserData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof UserData
  ) => {
    setUserData({
      ...userData,
      [field]: e.target.value,
    });
  };

  return (
    <Box sx={{ my: 3, width: "100%" }}>
      <TextField
        label="Name"
        variant="outlined"
        value={userData.empName}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "empName")}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <TextField
          type="tel"
          label="Phone"
          variant="outlined"
          value={userData.empPhone}
          color="warning"
          sx={{ mr: { sm: 2, xs: 0 }, width: { sm: "49.1%", xs: "100%" } }}
          onChange={(e) => handleInputChange(e, "empPhone")}
        />

        <TextField
          type="email"
          label="Email ID"
          variant="outlined"
          value={userData.empEmail}
          color="warning"
          sx={{ width: { sm: "49.1%", xs: "100%" } }}
          onChange={(e) => handleInputChange(e, "empEmail")}
        />
      </Box>
    </Box>
  );
}
