const InfoCard = ({ value, label, style }) => {
  return (
    <div
      className={`border-grey-15 bg-grey-10 h-full rounded-md border px-1.5 py-3.5 md:py-4 ${style ? style : ""} lg:col-span-1 lg:py-5`}
    >
      <div>
        <h1 className="text-center text-[1.8rem] font-medium text-white md:text-2xl md:text-[2rem] lg:text-[2.2rem]">
          {value}
        </h1>
        <p className="text-grey-60 mt-2 text-center text-sm md:mt-3 lg:text-base xl:text-lg">
          {label}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
