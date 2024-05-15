import React from "react";
import { Box, Card, Typography } from "@mui/material";
import ImgUploader from "@/app/Components/ImgUploader";
import EditPersonalDetailsBtn from "@/app/Components/EditPersonalDetailsBtn";
import MachineDetailsTextFields from "@/app/Components/MachineDetailsTextFields";

export default function MachineDetails() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        p: 1.4,
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600}>Machine Details</Typography>

        <EditPersonalDetailsBtn />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
          width: "100%",
        }}
      >
        <ImgUploader
          borderRadius="5px"
          caption="Click or Drag on this box to upload image of item"
        />
      </Box>

      <MachineDetailsTextFields />
    </Card>
  );
}
