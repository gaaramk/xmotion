import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Details from "../components/Details";
import YoutubeVideos from "../components/YoutubeVideos";
import { Box } from "@mui/material";
import Loading from "../components/Loading";

const ExercisesDetails = () => {
  const { id } = useParams();

  const options = {
    headers: {
      "x-rapidapi-key": "0de8f6287amsh8067eea3546e92fp1bf827jsnf8cde74eaf77",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exerciseDetails", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  console.log(data);

  return (
    <Box>
      <Details exercise={data} />
      <YoutubeVideos exercise={data} />
    </Box>
  );
};

export default ExercisesDetails;
