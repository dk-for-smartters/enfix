import { Box, Typography } from "@mui/material";
import { format } from "path";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Box>
        <Typography fontWeight={800}>Dashboard</Typography>
        <Typography variant="caption">
          Hello, Welcome Back! • {formattedDate}
        </Typography>
      </Box>
    </>
  );
}
