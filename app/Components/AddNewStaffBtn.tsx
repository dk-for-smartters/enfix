"use client";

import {
  Add,
  CheckCircle,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import ImgUploader from "./ImgUploader";
import Permissions from "./Permissions";
import SubscriptionStep from "./SubscriptionStep";

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

export default function AddNewStaffBtn() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [activeStep, setActiveStep] = useState(0);
  const [password, setPassword] = useState("smartter");
  const [confirmPassword, setConfirmPassword] = useState("smartter");
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState("");
  const [autoSubscribe, setAutoSubscribe] = useState(true);
  const [renew, setRenew] = useState(true);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof UserData
  ) => {
    setUserData({
      ...userData,
      [field]: e.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log("step: ", activeStep);
  };

  const handleClose = () => {
    setActiveStep(0);
    setOpen(false);
    if (!autoSubscribe) {
      setRenew(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    if (renew) {
      setActiveStep(1);
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="inherit"
        sx={{
          textTransform: "capitalize",
          bgcolor: "#373737",
          color: "#fff",
          ":hover": { color: "#000" },
        }}
        onClick={handleOpen}
      >
        <Add fontSize="small" sx={{ mr: 1 }} /> Add New Staff
      </Button>

      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: { md: "32vw", sm: "90vw", xs: "98vw" } },
        }}
      >
        <Card
          sx={{
            p: 1.4,
          }}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            // API

            let errors: string[] = [];

            if (password.length <= 5 && confirmPassword.length <= 5) {
              errors.push(
                "Password & Confirm password must be longer than 5 characters."
              );
            }

            if (password !== confirmPassword) {
              errors.push("Passwords do not match.");
            }

            if (errors.length > 0) {
              setError(errors.join(" "));
            } else {
              console.log("Passwords Matched.");
              handleNext();
              setError("");
            }

            if (activeStep === steps.length) {
              handleClose();
            }
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              overflow: "hidden",
            }}
          >
            <Typography fontWeight={600}>
              {activeStep === 3
                ? "Success"
                : activeStep === 2
                ? "Payment Gateway"
                : renew
                ? "Renew Subscription"
                : "Add New Staff"}
            </Typography>

            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          {activeStep < 2 && (
            <Box sx={{ pb: 1 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step, i) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};

                  return (
                    <Step key={i} {...stepProps}>
                      <StepLabel {...labelProps}>
                        <Typography>{step.title}</Typography>
                        <Typography variant="caption">
                          {step.subtitle}
                        </Typography>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
          )}

          <Box sx={{ overflow: "auto", maxHeight: "64vh" }}>
            {activeStep === 0 && (
              <>
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

                  <FormControl
                    sx={{ my: 3 }}
                    variant="outlined"
                    color="warning"
                    size="small"
                    fullWidth
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={viewPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setViewPassword(!viewPassword)}
                            edge="end"
                          >
                            {viewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    color="warning"
                    size="small"
                    fullWidth
                    error={!!error}
                  >
                    <InputLabel htmlFor="outlined-adornment-confirm-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-confirm-password"
                      type={viewPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={() => setViewPassword(!viewPassword)}
                            edge="end"
                          >
                            {viewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                    {error && <FormHelperText>{error}</FormHelperText>}
                  </FormControl>
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
                  Add Staff
                </Button>
              </>
            )}

            {activeStep === 1 && !autoSubscribe && (
              <>
                <SubscriptionStep />

                <Button
                  fullWidth
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
                  onClick={handleNext}
                >
                  Go To Payment
                </Button>
              </>
            )}

            {activeStep === 1 && autoSubscribe && (
              <>
                <Box
                  sx={{
                    bgcolor: "#FFF0B3",
                    textAlign: "center",
                    mt: 2.3,
                    py: 2,
                    px: { md: 8, xs: 2 },
                  }}
                >
                  <Typography>
                    License automatically added from your remaining subscription
                    amount.
                  </Typography>
                </Box>

                <Button
                  fullWidth
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
                  onClick={() => {
                    setActiveStep(3);
                    setAutoSubscribe(false);
                  }}
                >
                  Add Employee
                </Button>
              </>
            )}

            {activeStep === 2 && (
              <CardMedia
                component="img"
                src="/Payment_Gateway.svg"
                alt=""
                sx={{ width: "100%" }}
                onClick={handleNext}
              />
            )}

            {activeStep === 3 && (
              <>
                <Box textAlign="center">
                  <CheckCircle
                    color="success"
                    sx={{ fontSize: "78px", mb: 1.4 }}
                  />

                  <Typography fontWeight={700} lineHeight="28px">
                    {renew ? "Subscription Activated" : "Added Successfully"}
                  </Typography>
                  <Typography variant="caption" lineHeight="22.4px">
                    {renew
                      ? "Subscription Successfully Renewed"
                      : "Staff Added Successfully"}
                  </Typography>
                </Box>
                <Button
                  fullWidth
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
                  onClick={handleClose}
                >
                  Close
                </Button>
              </>
            )}
          </Box>
        </Card>
      </Dialog>
    </Box>
  );
}

const steps = [
  { title: "Step 1", subtitle: "Details" },
  { title: "Step 2", subtitle: "Subscription" },
];
