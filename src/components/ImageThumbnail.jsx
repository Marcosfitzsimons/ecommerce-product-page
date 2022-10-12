import React from "react";

const ImageThumbnail = ({ setCurrentIndex, slide, active, setActive }) => {
  const handleActive = () => {
    setActive(slide.id);
    setCurrentIndex(slide.id - 1);
  };

  return (
    <div
      className={`${
        active === slide.id && "border-2 border-orange-500"
      } h-24 aspect-square cursor-pointer rounded-xl`}
      onClick={handleActive}
    >
      <img
        src={slide.imageThumbnail}
        alt="shoes with background orange"
        className={`${active === slide.id && "opacity-30"} rounded-lg`}
      />
    </div>
  );
};

export default ImageThumbnail;
