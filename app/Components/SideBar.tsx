"use client";

import * as React from "react";
import { styled, Theme, CSSObject, alpha } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
  CardMedia,
  Tooltip,
  Zoom,
} from "@mui/material";

import {
  KeyboardDoubleArrowLeft,
  Help,
  MoreVert,
  Notifications,
  Home,
  BadgeRounded,
  Settings,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "solid .5px #ccc",
  borderRadius: "5px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "41ch",
    },
    border: "solid .5 #ccc",
    borderRadius: "5px",
    fontSize: "12px",
  },
}));

export default function SideBar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //Active Link
  const pathName = usePathname();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ top: "3.2rem" }}
    >
      <MenuItem
        onClick={handleMenuClose}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <BadgeRounded sx={{ mr: 1.4 }} /> Edit Profile
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Settings sx={{ mr: 1.4 }} /> Settings
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ top: "2.3rem", display: { xs: "block", md: "none" } }}
    >
      <MenuItem>
        <Search sx={{ m: "0 !important" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for staff, machines, tasks etc."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </MenuItem>

      <MenuItem>
        <Badge
          badgeContent=" "
          variant="dot"
          color="error"
          sx={{
            "& span": { transform: "scale(1) translate(-41%, 41%)" },
          }}
        >
          <Notifications />
        </Badge>
        <Typography ml={1}>Notifications</Typography>
      </MenuItem>

      <MenuItem>
        <Help />
        <Typography ml={1}>Help</Typography>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <CardMedia
          component="img"
          src="/UserPic.png"
          alt=""
          style={{ width: "35px", height: "35px" }}
        />
        <Typography ml={1}>Profile</Typography>
      </MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ boxShadow: "none", bgcolor: "#fff", color: "#111" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 3,
              display: { xs: "none", sm: open ? "none" : "flex" },
              alignItems: "center",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/Logo.svg"
            alt=""
            height={1}
            width={1}
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#373737",
              marginRight: "14px",
              padding: "3px",
              borderRadius: "10px",
              display: open ? "none" : "block",
            }}
          />
          <Typography
            noWrap
            fontWeight={700}
            fontSize="14px"
            letterSpacing={0.5}
          >
            Wonderlaa Park
          </Typography>

          <Search sx={{ display: { md: "block", xs: "none" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for staff, machines, tasks etc."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Badge
                badgeContent=" "
                variant="dot"
                color="error"
                sx={{
                  "& span": { transform: "scale(1) translate(-32%, 32%)" },
                }}
              >
                <Notifications sx={{ fontSize: "19px" }} />
              </Badge>
              <Typography ml={1}>Notifications</Typography>
            </MenuItem>

            <MenuItem>
              <Help sx={{ fontSize: "19px" }} />
              <Typography ml={1}>Help</Typography>
            </MenuItem>

            <Button
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                p: "0 !important",
                minWidth: "auto !important",
                ml: { md: 1, xs: 0 },
              }}
            >
              <CardMedia
                component="img"
                src="/UserPic.png"
                alt=""
                style={{ width: "35px", height: "35px" }}
              />
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}

      <Drawer
        variant="permanent"
        open={open}
        sx={{ ".MuiPaper-root": { bgcolor: "#373737" } }}
      >
        <DrawerHeader sx={{ bgcolor: "#373737", px: 1.4 }}>
          {open && (
            <>
              <Box display="flex">
                <Image
                  src="/Logo.svg"
                  alt=""
                  width={1}
                  height={1}
                  style={{ width: "25px", height: "fit-content" }}
                />
                <Typography
                  ml={1}
                  fontWeight={700}
                  color="white"
                  fontSize="20px"
                >
                  ENFIX
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerClose}>
                <KeyboardDoubleArrowLeft sx={{ color: "#FFD12E" }} />
              </IconButton>
            </>
          )}
        </DrawerHeader>
        <List
          sx={{
            color: "#fff",
            "& svg": { color: "#fff" },
            ".MuiTypography-root": {
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: 0.5,
            },
            ".MuiListItem-root :hover": {
              color: "#FFD12E",
              "& svg": { color: "#FFD12E" },
              bgcolor: "rgba(251, 204, 37, 0.1)",
              ".MuiListItemIcon-root, .MuiListItemText-root, span, svg, a": {
                bgcolor: "unset",
              },
            },
            "& a": {
              display: "flex",
            },
            ".activeLink": {
              color: "#FFD12E",
              "& svg": { color: "#FFD12E" },
              bgcolor: "#FBCC2533",
              ".MuiListItemIcon-root, .MuiListItemText-root, span, svg, a": {
                bgcolor: "unset",
              },
            },
            fontWeight: 800,
          }}
        >
          {SideBarOptions.map((item, i) => {
            const isActive = pathName.endsWith(`${item.path}`);
            return (
              <ListItem disablePadding sx={{ display: "block" }} key={i}>
                <Link
                  href={`${item.path}`}
                  className={isActive ? "activeLink" : ""}
                >
                  <Tooltip
                    TransitionComponent={Zoom}
                    title={!open && item.title}
                    arrow
                    placement="right"
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        alignItems: "center",
                        px: 1.4,
                        width: "20px !important",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: "0 !important",
                          mr: open ? 1 : 0,
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F4F4F4" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

const SideBarOptions = [
  {
    icon: <Home />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <Home />,
    title: "Manage Staff",
    path: "/manage-staff",
  },
  {
    icon: <Home />,
    title: "Manage Machines",
    path: "/manage-machines",
  },
  {
    icon: <Home />,
    title: "Today's Schedules",
    path: "/todays-schedules",
  },
  {
    icon: <Home />,
    title: "Upcoming Schedules",
    path: "/upcomings-schedules",
  },
  {
    icon: <Home />,
    title: "Manage Inventory",
    path: "/manages-inventory",
  },
  {
    icon: <Home />,
    title: "Invoices",
    path: "/invoices",
  },
  {
    icon: <Home />,
    title: "Report",
    path: "/report",
  },
];
