import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      p="1.25rem 1rem"
      flex="1 1 100%"
      justifyContent="space-between"
      backgroundColor={theme.palette.background.alt}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {increase}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default StatBox;
