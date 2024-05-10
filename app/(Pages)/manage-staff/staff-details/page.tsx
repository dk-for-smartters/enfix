import React from "react";
import { Box, Card, Typography } from "@mui/material";
import ImgUploader from "@/app/Components/ImgUploader";
import PersonalDetailsTextFields from "@/app/Components/PersonalDetailsTextFields";
import Permissions from "@/app/Components/Permissions";
import EditPersonalDetailsBtn from "@/app/Components/EditPersonalDetailsBtn";

export default function StaffDetails() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        p: 1.4,
        width: "-webkit-fill-available",
        ml: 3,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600}>Personal Details</Typography>

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
        <ImgUploader />
      </Box>

      <PersonalDetailsTextFields />

      <Permissions />
    </Card>
  );
}
