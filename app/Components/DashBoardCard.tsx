import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  icon: string;
  titleNum: number;
  subtitle: string;
}

export default function DashBoardCard(props: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        border: "solid .5px #ccc",
        minWidth: "fit-content",
        borderRadius: "5px",
        width: { md: "32%", sm: "48%", xs: "100%" },
        p: 3,
        mt: 3.2,
      }}
    >
      <Avatar
        src={props.icon}
        alt=""
        sx={{ mr: 5, width: "55px", height: "55px" }}
      />
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          flexDirection: "column",
          fontWeight: 700,
          letterSpacing: 0.5,
        }}
      >
        {props.titleNum}
        <Typography
          component="span"
          color="GrayText"
          fontSize="14px"
          letterSpacing={0.5}
        >
          {props.subtitle}
        </Typography>
      </Typography>
    </Box>
  );
}
