import { Button, Stack, Typography } from "@mui/material";
import { Bike, CircleGauge, Dumbbell } from "lucide-react";

const Details = ({ exercise }) => {
  const icons = [
    {
      icon: <Bike />,
      name: exercise.bodyPart,
    },
    {
      icon: <Dumbbell />,
      name: exercise.target,
    },
    {
      icon: <CircleGauge />,
      name: exercise.equipment,
    },
  ];

  return (
    <>
      <Stack gap={"60px"} sx={{ flexDirection: { lg: "row" }, p: "20px" }}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className="detail-image"
        />

        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h4">{exercise.name}</Typography>

          <Typography variant="body1">
            <strong>{exercise.name}</strong> is one of the best exercises to
            loose weight and build muscles and target your{" "}
            <strong>{exercise.target}</strong>
          </Typography>

          {icons.map((icon) => (
            <Stack direction={"row"} gap={"15px"} alignItems={"center"}>
              <Button sx={{ width: "100px", height: "56px" }}>
                {icon.icon}
              </Button>

              <Typography variant="h6">{icon.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Details;
