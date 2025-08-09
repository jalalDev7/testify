import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ color: "black" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "black" }}>{subtitle}</Typography>
    </Box>
  );
};

export default SectionHeader;
