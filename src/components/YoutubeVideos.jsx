import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
const YoutubeVideos = ({ exercise }) => {
  const options = {
    headers: {
      "x-rapidapi-key": "0de8f6287amsh8067eea3546e92fp1bf827jsnf8cde74eaf77",
      "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["youtubeVideos", exercise.id],
    queryFn: async () => {
      const res = await axios.get(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}`,
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

  console.log(data.contents, "youtube");

  return (
    <Box p={"20px"}>
      <Typography variant="h3" mb={"33px"}>
        Watch{" "}
        <strong style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {exercise.name}
        </strong>{" "}
        Exercises Videos
      </Typography>

      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "50px" } }}
      >
        {data?.contents?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ width: "full", height: "180px" }}
            />

            <Typography variant="h5" mt={"11px"} color="#000">
              {item.video.title.slice(0, 30)}
            </Typography>

            <Typography variant="body1" color="#ff2625">
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default YoutubeVideos;
