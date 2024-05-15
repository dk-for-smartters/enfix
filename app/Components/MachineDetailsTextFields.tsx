"use client";

import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

interface MachineData {
  machineName: string;
  machineSize: string;
  machineModel: string;
  manufacturer: string;
  manufacturerPhone: string;
  manufacturerEmail: string;
}

const initialData: MachineData = {
  machineName: "Roller Coaster 1",
  manufacturer: "Rollin",
  machineSize: "Super",
  machineModel: "SGD3445",
  manufacturerPhone: "+91 94289 20630",
  manufacturerEmail: "rollin@smartters.in",
};

export default function MachineDetailsTextFields() {
  const [machineData, setMachineData] = useState<MachineData>(initialData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MachineData
  ) => {
    setMachineData({
      ...machineData,
      [field]: e.target.value,
    });
  };

  return (
    <Box sx={{ my: 3, width: "100%" }}>
      <TextField
        label="Name of the Machine"
        variant="outlined"
        value={machineData.machineName}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "machineName")}
      />

      <TextField
        label="Machine Size"
        variant="outlined"
        value={machineData.machineSize}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "machineSize")}
        sx={{ mt: 3 }}
      />

      <TextField
        label="Manufacturer"
        variant="outlined"
        value={machineData.manufacturer}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "manufacturer")}
        sx={{ mt: 3 }}
      />

      <TextField
        label="Model Name"
        variant="outlined"
        value={machineData.machineModel}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "machineModel")}
        sx={{ mt: 3 }}
      />

      <TextField
        label="Manufacturer Phone No."
        type="tel"
        variant="outlined"
        value={machineData.manufacturerPhone}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "manufacturerPhone")}
        sx={{ mt: 3 }}
      />

      <TextField
        label="Manufacturer Email ID"
        type="email"
        variant="outlined"
        value={machineData.manufacturerEmail}
        fullWidth
        color="warning"
        onChange={(e) => handleInputChange(e, "manufacturerEmail")}
        sx={{ mt: 3 }}
      />
    </Box>
  );
}
