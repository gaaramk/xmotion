"use client";

import React from "react";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8, minHeight: "100vh", bgcolor: "#fdfdfd" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          About XMotion
        </Typography>

        <Divider sx={{ my: 2, borderColor: "#ccc" }} />

        <Stack spacing={3}>
          <Typography
            variant="body1"
            sx={{ color: "#555", fontSize: "1.1rem" }}
          >
            XMotion is a dynamic fitness platform designed to push your physical
            limits and help you discover the power of movement. Whether you're a
            beginner or an experienced athlete, our exercises are crafted to
            challenge, motivate, and elevate your training.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#555", fontSize: "1.1rem" }}
          >
            This project was built with 💚 by{" "}
            <strong>Mohamed Kamal El-Dien</strong>, a passionate front-end
            developer focused on clean UI and performance. You can connect with
            me anytime through the contact page or on LinkedIn and GitHub.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
