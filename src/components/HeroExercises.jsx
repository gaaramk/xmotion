import { Box, Button, Stack, Typography } from "@mui/material";
import banner from "../assets/banner.jpg";

const HeroExercises = () => {
  return (
    <Box
      sx={{ mt:{ lg: "212px", xs: "70px" }, m: "0 50px" }}
      position={"relative"}
      p={"20px"}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={4}
      >
        <Stack spacing={2} sx={{ maxWidth: "500px" }}>
          <Typography color="#00695c" fontWeight={600} fontSize="32px">
            fitness is a lifestyle
          </Typography>

          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: "45px", xs: "35px" } }}
          >
            Millions of people are <br /> building their fitness
          </Typography>

          <Typography sx={{ fontSize: { lg: "22px", xs: "35px" } }}>
            check out the most effective exercises
          </Typography>

          <Button
            sx={{
              backgroundColor: "#00695c",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px 20px",
              margin: "20px 0",
            }}
            href="#exercises"
          >
            Explore Exercises
          </Button>
        </Stack>

        <img src={banner} alt="banner" style={{maxWidth:"600px"}} />
      </Stack>
    </Box>
  );
};

export default HeroExercises;
