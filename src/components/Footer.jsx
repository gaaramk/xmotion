import {
  Box,
  Container,
  Typography,
  Divider,
  Link,
  Stack,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#f0f0f0",
        py: 4,
        mt: 10,
      }}
      position="relative"
      bottom={-25}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          XMotion
        </Typography>

        <Typography variant="body2" sx={{ maxWidth: 500, color: "#bbb" }}>
          XMotion is a fitness app that helps you reach your fitness goals.
        </Typography>

        <Divider sx={{ my: 3, borderColor: "#444" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" sx={{ color: "#888" }}>
            © {new Date().getFullYear()} XMotion. Crafted by{" "}
            <Box component="span" fontWeight="bold" color="primary.main">
              <Link
                to={"https://github.com/gaaramk"}
                target="_blank"
                underline="hover"
                sx={{ color: "primary.main", cursor: "pointer" }}
              >
                Mohamed Kamal El-Dien
              </Link>
            </Box>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link href="#" underline="hover" sx={{ color: "#aaa" }}>
              Privacy
            </Link>
            <Link href="#" underline="hover" sx={{ color: "#aaa" }}>
              Terms
            </Link>
            <Link href="#" underline="hover" sx={{ color: "#aaa" }}>
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
