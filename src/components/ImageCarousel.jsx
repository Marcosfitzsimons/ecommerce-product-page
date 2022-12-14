import React from "react";
import { useState } from "react";
import "animate.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ImageThumbnail from "./ImageThumbnail";

const ImageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(1);

  const increaseIndex = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevValue) => prevValue + 1);
    }
  };

  const decreaseIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevValue) => prevValue - 1);
    }
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].image})`,
  };

  return (
    <section className="image-carousel-container h-full relative flex items-center z-10">
      <div className="left-arrow absolute left-2 rounded-full bg-white p-1 lg:hidden">
        <MdKeyboardArrowLeft
          className="text-3xl cursor-pointer"
          onClick={decreaseIndex}
        />
      </div>
      <div className="md:rounded-2xl" style={slideStyles}></div>
      <div className="right-arrow absolute right-2 rounded-full bg-white p-1 lg:hidden">
        <MdKeyboardArrowRight
          className="text-3xl cursor-pointer"
          onClick={increaseIndex}
        />
      </div>
      <div className="hidden lg:flex absolute bottom-[-7.7rem] left-0 justify-between w-full">
        {slides.map((slide) => {
          return (
            <ImageThumbnail
              key={slide.id}
              slide={slide}
              setCurrentIndex={setCurrentIndex}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ImageCarousel;
