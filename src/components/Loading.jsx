import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography mt={2} fontWeight="bold" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
