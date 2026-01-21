import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const HorizontalSlider = ({ propertyDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numImages = 8;
  const maxIndex = numImages - 2;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calculate number of pagination dots
  const dotCount = maxIndex + 1;

  return (
    <div className="bg-grey-10 mx-auto my-12 flex w-full flex-col items-center rounded-lg p-3 md:p-4 lg:p-6">
      {/* Thumbnails */}
      <div className="bg-grey-08 border-grey-15 flex h-16 w-full justify-center rounded-md border shadow-2xs lg:h-auto">
        <div className="scrollbar-hide flex gap-x-1.5 overflow-x-scroll rounded-lg p-1.5 transition-transform duration-400 ease-in-out md:justify-center md:overflow-auto lg:gap-x-3 lg:p-3">
          {propertyDetails.anotherImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={`max-h-18 cursor-pointer rounded-md object-cover shadow-md ${
                index >= currentIndex && index <= currentIndex + 1
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Images Slider */}
      <div className="mt-6 flex h-[12rem] w-full overflow-hidden md:h-[18rem] lg:h-[26rem]">
        <div
          className="flex h-full gap-x-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {propertyDetails.anotherImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="h-full w-full flex-none rounded-md object-cover shadow-lg lg:w-1/2"
            />
          ))}
        </div>
      </div>

      {/* Navigation and Pagination */}
      <div className="bg-grey-08 border-grey-15 mt-6 inline-flex items-center justify-center gap-x-6 rounded-full border p-2 text-white">
        <button
          onClick={prevSlide}
          className="border-grey-15 hover:bg-purple-60 flex size-9 cursor-pointer items-center justify-center rounded-full border text-2xl shadow-2xs transition-all lg:size-12"
        >
          <ArrowLeft className="size-5 lg:size-7" />
        </button>
        <div className="flex items-center gap-x-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <div
              key={i}
              className={`h-0.5 w-5 rounded-full transition-colors duration-200 lg:h-1 lg:w-8 ${i === currentIndex ? "bg-purple-60" : "bg-white"}`}
            ></div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="border-grey-15 hover:bg-purple-60 flex size-9 cursor-pointer items-center justify-center rounded-full border text-2xl shadow-2xs transition-all lg:size-12"
        >
          <ArrowRight className="size-5 lg:size-7" />
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
