import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data , sectionName}) => {
  const [activeIndex,setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = (() => {
    console.log("prev clicked   "+activeIndex);
    setActiveIndex(activeIndex - 1);
  });
  const slideNext = (() => {
    console.log(" next clicked   "+activeIndex)
    setActiveIndex(activeIndex + 1);

  });

  const syncActiveIndex = ({ item }) => setActiveIndex(item);


  // const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard  product={item} />);
  const items = (Array.isArray(data))?(data.slice(0, 10).map((item) => <HomeSectionCard  product={item} />)):[];
  return (
    <div className=" border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-5  && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "darkblue" }}
            />
          </Button>
        )}
        {activeIndex !== 0  &&  (<Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

























/*
      import React, { useRef } from "react";
      import AliceCarousel from "react-alice-carousel";
      import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
      import { Button } from "@mui/material";
      import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
      import { mens_kurta } from "../../../Data/mens_kurta";

      const HomeSectionCarousel = () => {
        const carouselRef = useRef(null);

        const responsive = {
          0: { items: 1 },
          720: { items: 2 },
          1024: { items: 5 },
        };

        const slidePrev = () => {
          if (carouselRef.current) {
            carouselRef.current.slidePrev();
          }
        };

        const slideNext = () => {
          if (carouselRef.current) {
            carouselRef.current.slideNext();
          }
        };

        const items = mens_kurta.map((item, index) => (
          <HomeSectionCard key={index} product={item} />
        ));

        return (
          <div className="border">
            <div className="relative p-5 border">
              <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                ref={carouselRef}
              />
              <Button
                variant="contained"
                className="z-50 bg-white"
                onClick={slidePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  bgcolor: "white",
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
                aria-label="previous"
              >
                <KeyboardArrowLeftIcon sx={{ color: "black" }} />
              </Button>

              <Button
                variant="contained"
                className="z-50 bg-white"
                onClick={slideNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%) rotate(180deg)",
                  bgcolor: "white",
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
                aria-label="next"
              >
                <KeyboardArrowLeftIcon sx={{ color: "darkblue" }} />
              </Button>
            </div>
          </div>
        );
      };

      export default HomeSectionCarousel;
*/
