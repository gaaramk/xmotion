import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ScrollBar from "./ScrollBar";
import Exercises from "./Exercises";
import useExercisesData from "../hooks/useExercisesData";
import { useState } from "react";

const SearchExercises = () => {
  const [filteredExercise, setFilteredExercises] = useState([]);
  const { search, setSearch, bodyParts, allExercises } = useExercisesData();

  const speedSearch = (input) => {
    const query = input.toLowerCase();
    setSearch(query);

    if (!query || allExercises.length === 0) {
      setFilteredExercises([]);
      return;
    }

    const filtered = allExercises.filter((exercise) =>
      (exercise.name + exercise.target + exercise.equipment + exercise.bodyPart)
        .toLowerCase()
        .includes(query)
    );

    setFilteredExercises(filtered);
  };

  const filterByBodyPart = (bodyPart) => {
    if (bodyPart === "all") {
      setFilteredExercises([]);
      setSearch("");
      return;
    }

    const filtered = allExercises.filter(
      (exercise) => exercise.bodyPart.toLowerCase() === bodyPart.toLowerCase()
    );

    setFilteredExercises(filtered);
    setSearch(bodyPart);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Exercises you <br /> should know
      </Typography>

      <Box
        position="relative"
        mb="72px"
        sx={{ width: { xs: "100%" } }}
        textAlign="center"
      >
        <TextField
          type="text"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => speedSearch(e.target.value)}
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { md: "700px", xs: "250px" },
            backgroundColor: "#fff",
          }}
        />
      </Box>

      <Box sx={{ width: "100%", p: "20px" }}>
        <ScrollBar data={["all", ...bodyParts]} onSelect={filterByBodyPart} />
      </Box>

      <Box sx={{ width: "100%", p: "20px" }}>
        <Exercises exercises={search ? filteredExercise : allExercises} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
