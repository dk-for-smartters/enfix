"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ImgUploader from "@/app/Components/ImgUploader";
import Permissions from "./Permissions";
import { Close } from "@mui/icons-material";

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

export default function EditPersonalDetailsBtn() {
  const [open, setOpen] = useState(false);

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

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ textTransform: "capitalize" }}
        onClick={handleOpen}
      >
        Edit Details
      </Button>

      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{ sx: { width: "28vw" } }}
      >
        <Card
          sx={{
            p: 1.4,
          }}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            // API
            console.log("Profile Details Updated Successfully.");

            handleClose();
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 1,
              overflow: "hidden",
            }}
          >
            <Typography fontWeight={600}>Edit Personal Details</Typography>

            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          <Box sx={{ overflow: "auto", maxHeight: "82vh" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 1,
                width: "100%",
                overflow: "auto",
              }}
            >
              <ImgUploader />
            </Box>

            <Box sx={{ my: 3.2, width: "100%" }}>
              <TextField
                label="Name"
                variant="outlined"
                value={userData.empName}
                fullWidth
                color="warning"
                size="small"
                onChange={(e) => handleInputChange(e, "empName")}
              />

              <TextField
                type="tel"
                label="Phone"
                variant="outlined"
                value={userData.empPhone}
                color="warning"
                size="small"
                fullWidth
                onChange={(e) => handleInputChange(e, "empPhone")}
                sx={{ my: 3 }}
              />

              <TextField
                type="email"
                label="Email ID"
                variant="outlined"
                value={userData.empEmail}
                color="warning"
                size="small"
                fullWidth
                onChange={(e) => handleInputChange(e, "empEmail")}
              />
            </Box>

            <Permissions title="Set Access" />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="inherit"
              sx={{
                my: 2,
                bgcolor: "#373737",
                color: "#FFF",
                textTransform: "capitalize",
                ":hover": {
                  color: "#000",
                },
              }}
            >
              Save Details
            </Button>
          </Box>
        </Card>
      </Dialog>
    </Box>
  );
}
