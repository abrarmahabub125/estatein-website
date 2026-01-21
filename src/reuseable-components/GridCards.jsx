const GridCards = ({ title, description, imgSrc, bgColor }) => {
  return (
    <div className="h-full">
      <div className="h-full">
        {/* card */}
        <div
          className={`${bgColor} border-grey-15 h-full rounded-lg border p-6`}
        >
          <div className="flex items-center gap-3">
            <img className="size-12 lg:size-14" src={imgSrc} alt="icon" />
            <h3 className="text-lg font-medium text-white lg:text-xl">
              {title}
            </h3>
          </div>
          <p className="text-grey-60 mt-4 text-sm lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
