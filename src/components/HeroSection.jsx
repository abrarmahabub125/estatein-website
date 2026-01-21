import Vector from ".././assets//images/vector-line.svg";
import Building from "../assets/images/building.svg";
import DreamImage from "../assets/images/dream-image.svg";
import HomeIcon from "../assets/icons/home-icon.svg";
import FlatsIcon from "../assets/icons/flats-icon.svg";
import PropertyIcon from "../assets/icons/property-icon.svg";
import SunIcon from "../assets/icons/sun-icon.svg";
import { ArrowUpRight } from "lucide-react";
import InfoCard from "../cards/InfoCard.jsx";
import HomeSectionTemplate from "../reuseable-components/HomeSectionTemplate.jsx";

import { Link } from "react-router-dom";

const HeroSection = ({ multipleSectionData }) => {
  return (
    <main>
      {/* Hero section start  */}
      <section className="pt-18 md:pt-14">
        <div>
          <div>
            <div className="flex flex-col-reverse items-center px-4 md:flex-row md:justify-between md:gap-12 md:px-0">
              {/* Information container  */}
              <div className="mt-16 md:mt-0 md:px-5 xl:px-28 xl:py-28">
                <div>
                  <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl">
                    Discover Your Dream Property with Estatein
                  </h1>
                  <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                    Your journey to finding the perfect property begins here.
                    Explore our listings to find the home that matches your
                    dreams.
                  </p>
                  <div className="mt-8 grid grid-rows-2 gap-4 md:max-w-96 md:grid-cols-2 md:grid-rows-1">
                    <Link>
                      <button className="border-grey-15 w-full cursor-pointer rounded-md border py-2 text-sm text-white lg:text-base">
                        Learn More
                      </button>
                    </Link>
                    <Link to="/properties">
                      <button className="bg-purple-60 w-full cursor-pointer rounded-md py-2 text-sm text-white lg:text-base">
                        Browse Properties
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-3 lg:grid-rows-1">
                  <InfoCard value="200+" label="Happy Customers" />
                  <InfoCard value="10k" label="Properties For Clients" />
                  <InfoCard
                    value="16+"
                    label="Years of Experience"
                    style="col-span-2"
                  />
                </div>
              </div>

              {/* image container  */}
              <div className="h-72 w-full rounded-xl bg-white md:h-[35rem] md:min-h-full md:w-[40rem] md:rounded-none xl:h-[44rem] xl:w-[52rem]">
                <div className="bg-grey-15 border-grey-15 relative h-full w-full rounded-lg border md:rounded-none">
                  <div className="absolute -bottom-24 left-0 z-10 h-24 w-24 translate-y-[-50%] rounded-full md:bottom-1/2 md:-left-13 xl:h-28 xl:w-28">
                    <img
                      className="h-full w-full object-cover"
                      src={DreamImage}
                      alt="dream-image"
                    />
                  </div>

                  <div className="relative h-full w-full">
                    <img
                      className="h-full w-full rounded-md object-cover object-bottom-left"
                      src={Vector}
                      alt="vector-line"
                    />
                    <img
                      className="absolute top-0 left-0 h-full w-full rounded-md object-cover"
                      src={Building}
                      alt="building-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-0">
            <div className="border-grey-10 mt-8 rounded-xl border-4 md:mt-0 md:rounded-none md:border-none">
              <div className="border-grey-15 rounded-lg border-2 p-3 md:rounded-none">
                <div className="relative grid grid-cols-2 grid-rows-2 gap-3 rounded-lg md:grid-cols-4 md:grid-rows-1">
                  <div className="bg-grey-10 border-grey-15 relative flex flex-col items-center justify-center gap-4 rounded-md border p-4">
                    <ArrowUpRight className="top text-grey-30 absolute top-2.5 right-2.5 size-7 stroke-1" />
                    <img
                      className="8 size-16 object-cover lg:size-18"
                      src={HomeIcon}
                      alt="home-icon"
                    />
                    <span className="text-center text-sm text-white lg:text-base xl:text-lg">
                      Find Your Dream Home
                    </span>
                  </div>

                  <div className="bg-grey-10 border-grey-15 relative flex flex-col items-center justify-center gap-4 rounded-md border p-4">
                    <ArrowUpRight className="top text-grey-30 absolute top-2.5 right-2.5 size-7 stroke-1" />
                    <img
                      className="size-16 object-cover lg:size-18"
                      src={PropertyIcon}
                      alt="home-icon"
                    />
                    <span className="text-center text-sm text-white lg:text-base xl:text-lg">
                      Unlock Property Value
                    </span>
                  </div>

                  <div className="bg-grey-10 border-grey-15 relative flex flex-col items-center justify-center gap-4 rounded-md border p-4">
                    <ArrowUpRight className="top text-grey-30 absolute top-2.5 right-2.5 size-7 stroke-1" />
                    <img
                      className="size-16 object-cover lg:size-18"
                      src={FlatsIcon}
                      alt="home-icon"
                    />
                    <span className="text-center text-sm text-white lg:text-base xl:text-lg">
                      Effortless Property Management
                    </span>
                  </div>

                  <div className="bg-grey-10 border-grey-15 relative flex flex-col items-center justify-center gap-4 rounded-md border p-4">
                    <ArrowUpRight className="top text-grey-30 absolute top-2.5 right-2.5 size-7 stroke-1" />
                    <img
                      className="size-16 object-cover lg:size-18"
                      src={SunIcon}
                      alt="home-icon"
                    />
                    <span className="text-center text-sm text-white lg:text-base xl:text-lg">
                      Smart Investments, Informed Decisions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end  */}

      {/* Property section start */}

      <section>
        {multipleSectionData.map((section, idx) => {
          return (
            <HomeSectionTemplate
              key={idx}
              sectionData={section}
              renderCard={section.renderCard}
            />
          );
        })}
      </section>
      {/* Property section end */}
    </main>
  );
};

export default HeroSection;
