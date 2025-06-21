// hooks/useExercisesData.js
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const options = {
  headers: {
    "x-rapidapi-key": "0de8f6287amsh8067eea3546e92fp1bf827jsnf8cde74eaf77",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

const useExercisesData = () => {
  const [search, setSearch] = useState("");

  // Get all exercises
  const {
    data: allExercises = [],
    isLoading: isExercisesLoading,
    isError: isExercisesError,
    error: exercisesError,
  } = useQuery({
    queryKey: ["allExercises"],
    queryFn: async () => {
      const res = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      return res.data;
    },
  });

  // Get body parts list
  const {
    data: bodyParts = [],
    isLoading: isBodyPartsLoading,
    isError: isBodyPartsError,
    error: bodyPartsError,
  } = useQuery({
    queryKey: ["bodyPartList"],
    queryFn: async () => {
      const res = await axios.get(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      return res.data;
    },
  });

  return {
    search,
    setSearch,
    allExercises,
    bodyParts,
    isExercisesLoading,
    isExercisesError,
    exercisesError,
    isBodyPartsLoading,
    isBodyPartsError,
    bodyPartsError,
  };
};

export default useExercisesData;
