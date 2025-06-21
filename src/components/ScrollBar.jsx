// ScrollBar.jsx
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ScrollBar = ({ data, onSelect }) => {
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Carousel
        arrows
        infinite
        autoPlaySpeed={3000}
        draggable
        swipeable
        keyBoardControl
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
      >
        {data.map((item, index) => (
          <Box
            key={item.id || index}
            onClick={() => onSelect(item)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#eee",
              borderRadius: "8px",
              margin: "10px",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                backgroundColor: "#ccc",
              },
            }}
          >
            <h1 style={{ textTransform: "capitalize" }}>{item}</h1>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ScrollBar;
