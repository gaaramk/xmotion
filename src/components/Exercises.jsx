import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { useState } from "react";

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 3;

  const lastExercisePage = currentPage * exercisesPerPage;
  const firstExercisePage = lastExercisePage - exercisesPerPage;
  const currentExercises = exercises.slice(firstExercisePage, lastExercisePage);

  const paginate = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        flexWrap={"wrap"}
        justifyContent={"center"}
        direction={"row"}
        sx={{ gap: { lg: "100px", xs: "50px" } }}
      >
        {currentExercises?.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt={"100px"} alignItems={"center"}>
        <Pagination
          defaultPage={1}
          count={Math.ceil(exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Exercises;
