import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {

  return (
    <Link
      to={`/exercisesDetails/${exercise.id}`}
      style={{
        textDecoration: "none",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={exercise.gifUrl}
        alt=""
        loading="lazy"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <Stack direction={"row"} justifyContent={"center"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#00695c",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
 
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#00695c",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack>

      <Typography
        sx={{ fontSize: { lg: "24px", xs: "20px" }, mt: "11px", color: "#000" }}
        fontWeight={600}
        textTransform={"capitalize"}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
