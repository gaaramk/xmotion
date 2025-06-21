import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          Got a question, feedback, or just want to say hi? Feel free to reach
          out via the form below or email us directly at{" "}
          <Link
            href="mailto:mohammedkamal07@proton.me"
            underline="hover"
            color="primary"
          >
            mohammedkamal07@proton.me
          </Link>
        </Typography>

        <Stack spacing={3}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField
            label="Your Email"
            variant="outlined"
            type="email"
            fullWidth
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            sx={{ alignSelf: "flex-start" }}
          >
            <a
              href="mailto:mohammedkamal07@proton.me"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Typography>Send</Typography>
            </a>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
