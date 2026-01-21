import { ArrowUpRight } from "lucide-react";

const HeroSectionTemplate = ({ heroData }) => {
  const { heading, description, cardsData } = heroData;

  return (
    <div>
      <div>
        <div className="from-grey-60/10 to-grey-10 bg-linear-to-r px-4 py-16 lg:px-5 xl:px-28">
          <div>
            <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl">
              {heading}
            </h1>
            <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <div className="border-grey-10 mt-8 rounded-xl border-4 md:mt-0 md:rounded-none md:border-none">
            <div className="border-grey-15 rounded-lg border-2 p-3 md:rounded-none">
              <div className="relative grid grid-cols-2 grid-rows-2 gap-3 rounded-lg md:grid-cols-4 md:grid-rows-1">
                {cardsData.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="bg-grey-10 border-grey-15 relative flex flex-col items-center justify-center gap-4 rounded-md border p-4"
                    >
                      <ArrowUpRight className="top text-grey-30 absolute top-2.5 right-2.5 size-7 stroke-1" />
                      <img
                        className="8 size-16 object-cover lg:size-18"
                        src={item?.icon}
                        alt="home-icon"
                      />
                      <span className="text-center text-sm text-white lg:text-base xl:text-lg">
                        {item?.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTemplate;
