import { Box, Container, Typography } from "@mui/material";
import DashBoardCard from "./Components/DashBoardCard";
import DashboardPieChart from "./Components/DashboardPieChart";
import DashboardAreaChart from "./Components/DashboardAreaChart";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box sx={{ bgcolor: "#fff", pt: 1.4 }}>
      <Container maxWidth="xl">
        <Box>
          <Typography fontWeight={600} fontSize="14px">
            Dashboard
          </Typography>
          <Typography variant="caption" color="GrayText" fontWeight={400}>
            Hello, Welcome Back! • {formattedDate}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { sm: "space-between", xs: "center" },
            alignItems: "center",
            flexWrap: { sm: "wrap", xs: "nowrap" },
          }}
        >
          {DashboardData.map((data, i) => (
            <DashBoardCard
              key={i}
              icon={data.icon}
              titleNum={data.titleNum}
              subtitle={data.subtitle}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mt: 5,
            width: "100%",
          }}
        >
          <DashboardPieChart />

          <DashboardAreaChart />
        </Box>
      </Container>
    </Box>
  );
}

const DashboardData = [
  {
    icon: "/Users.svg",
    titleNum: 246,
    subtitle: "Total Staff",
  },
  {
    icon: "/Bag.svg",
    titleNum: 18,
    subtitle: "Total Machines",
  },
  {
    icon: "/Group.svg",
    titleNum: 246,
    subtitle: "Today's Schedules",
  },
  {
    icon: "/Users.svg",
    titleNum: 246,
    subtitle: "Subscribed Machines",
  },
  {
    icon: "/Bag.svg",
    titleNum: 18,
    subtitle: "Machines Near Expiry",
  },
  {
    icon: "/Group.svg",
    titleNum: 246,
    subtitle: "Inventory Transactions",
  },
];
