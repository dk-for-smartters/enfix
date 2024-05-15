"use client";

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";
import { usePathname } from "next/navigation";

export default function MachinesDetailsSideBar() {
  const pathName = usePathname();

  return (
    <Box
      sx={{
        minWidth: "max-content",
        maxHeight: "80vh",
        bgcolor: "#fff",
        borderRadius: "10px",
      }}
    >
      <List
        sx={{
          color: "#464646",
          "& svg": { color: "#000" },
          ".MuiListItem-root :hover": {
            ".MuiTypography-root": { color: "#000" },
            bgcolor: "rgba(251, 204, 37, 0.1)",
            ".MuiListItemIcon-root, .MuiListItemText-root, span, svg, a, p": {
              bgcolor: "unset",
            },
          },
          "& a": {
            display: "flex",
          },
          ".activeLink": {
            ".MuiTypography-root": { color: "#000" },
            bgcolor: "#FBCC2533",
            ".MuiListItemIcon-root, .MuiListItemText-root, span, svg, a,p": {
              bgcolor: "unset",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "22.4px",
            ml: 1.4,
            my: 1.4,
            color: "#000",
          }}
        >
          Information
        </Typography>
        {SideBarOptions.map((item, i) => {
          const isActive = pathName.endsWith(`${item.path}`);
          return (
            <ListItem disablePadding sx={{ display: "block" }} key={i}>
              <Link
                href={`${item.path}`}
                className={isActive ? "activeLink" : ""}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 1.4,
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "22.4px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 400,
                          lineHeight: "16.8px",
                          color: "#626262",
                        }}
                      >
                        {item.subTitle}
                      </Typography>
                    }
                  />
                  <ListItemIcon
                    sx={{
                      minWidth: "0 !important",
                      justifyContent: "center",
                      ml: 5,
                    }}
                  >
                    <ChevronRight />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

const SideBarOptions = [
  {
    title: "Machine Details",
    subTitle: "Machine Name & Details",
    path: "/manage-machines/machine-details",
  },
  {
    title: "Maintenance Schedules",
    subTitle: "Check Maintenance Schedules",
    path: "/manage-machines/machine-details/maintenance-schedules",
  },
  {
    title: "All Files",
    subTitle: "All Required Documents",
    path: "/manage-machines/machine-details/all-files",
  },
  {
    title: "Subscription History",
    subTitle: "View History of Subscriptions",
    path: "/manage-machines/machine-details/subscription-history",
  },
  {
    title: "Geofencing",
    subTitle: "Locate Your Machine",
    path: "/manage-machines/machine-details/geofencing",
  },
  {
    title: "Log",
    subTitle: "Logs of Machines",
    path: "/manage-machines/machine-details/log",
  },
];
