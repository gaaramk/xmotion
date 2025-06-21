"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f9f9f9"
      px={2}
    >
      <Typography variant="h1" fontWeight="bold" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ px: 4, py: 1.5 }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
