import MagicIcon from "../assets/icons/magic-star.svg";
import BookNowForm from "../components/BookNowForm";
import PropertyCardsContainer from "../components/PropertyCardsContainer.jsx";
import PropertyFilter from "../components/PropertyFilter.jsx";
import { useState, useEffect } from "react";
import NoResultImg from "../assets/images/no-result.svg";
import Loader from "../reuseable-components/Loader.jsx";

const Properties = ({ properties }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [exactSearchTerm, setExactSearchTerm] = useState("");

  const [locationTerm, setLocationTerm] = useState("");
  const [propertyTerm, setPropertyTerm] = useState("");
  const [priceTerm, setPriceTerm] = useState("");
  const [sqrTerm, setSqrTerm] = useState("");
  const [buildYearTerm, setBuildYearTerm] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  let priceMin = 0;
  let priceMax = Infinity;
  let sqrMin = 500;
  let sqrMax = Infinity;
  let buildYear = 0;
  let buildYearMax = new Date().getFullYear();

  if (priceTerm.includes("-")) {
    const prices = priceTerm.split("-");
    priceMin = Number(prices[0]);
    priceMax = Number(prices[1]);
  }

  if (sqrTerm.includes("-")) {
    const prices = sqrTerm.split("-");
    sqrMin = Number(prices[0]);
    sqrMax = Number(prices[1]);
  }

  if (buildYearTerm.includes("-")) {
    const years = buildYearTerm.split("-");
    buildYear = Number(years[0]);
    buildYearMax = Number(years[1]);
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (locationTerm === "" ||
        property.location.toLowerCase() === locationTerm.toLowerCase()) &&
      (propertyTerm === "" ||
        property.type.toLowerCase() === propertyTerm.toLowerCase()) &&
      (priceTerm === "" ||
        (property.price >= priceMin && property.price <= priceMax)) &&
      (sqrTerm === "" ||
        (property.area >= sqrMin && property.area <= sqrMax)) &&
      (buildYearTerm === "" ||
        (property.buildYear >= buildYear &&
          property.buildYear <= buildYearMax)) &&
      (exactSearchTerm === "" ||
        property.title.toLowerCase().includes(exactSearchTerm.toLowerCase()) ||
        property.description
          .toLowerCase()
          .includes(exactSearchTerm.toLowerCase()))
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  });

  const handleSearchChange = () => {
    setExactSearchTerm(searchTerm);
    setBuildYearTerm("");
    setLocationTerm("");
    setPriceTerm("");
    setPropertyTerm("");
    setSqrTerm("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  if (isPageLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-13.5 lg:pt-18">
      <div>
        <div className="from-grey-60/10 to-grey-10 bg-linear-to-r px-4 py-16 lg:px-5 xl:px-28">
          <div>
            <h1 className="text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl">
              Find Your Dream Property
            </h1>
            <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey
            </p>
          </div>
        </div>

        {/* filter section */}
        <div>
          <PropertyFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationTerm={locationTerm}
            setLocationTerm={setLocationTerm}
            propertyTerm={propertyTerm}
            setPropertyTerm={setPropertyTerm}
            priceTerm={priceTerm}
            setPriceTerm={setPriceTerm}
            sqrTerm={sqrTerm}
            setSqrTerm={setSqrTerm}
            buildYearTerm={buildYearTerm}
            setBuildYearTerm={setBuildYearTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Property cards section starts here */}
      <div className="my-12 px-4 md:my-16 md:px-5 lg:my-24 xl:px-28">
        {/* section data */}
        <div>
          <div>
            <div className="flex items-center gap-1.5">
              <img className="size-5 lg:size-6" src={MagicIcon} alt="icon" />
              <img className="size-3 lg:size-4" src={MagicIcon} alt="icon" />
              <img
                className="size-1.5 lg:size-2.5"
                src={MagicIcon}
                alt="icon"
              />
            </div>
            <div>
              <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
                Discover a World of Possibilities
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  Our portfolio of properties is as diverse as your dreams.
                  Explore the following categories to find the perfect property
                  that resonates with your vision of home
                </p>
              </div>
            </div>

            {/* Property Cards will render here  */}
            <div className="my-12">
              {isLoading ? (
                <div className="flex h-64 items-center justify-center">
                  <Loader />
                </div>
              ) : filteredProperties.length === 0 ? (
                <div className="flex flex-col items-center gap-4">
                  <img
                    className="size-44 w-full object-contain"
                    src={NoResultImg}
                    alt="no-results"
                  />
                  <p className="text-grey-60 text-center">
                    No properties found matching the selected criteria.
                  </p>
                </div>
              ) : (
                <PropertyCardsContainer properties={filteredProperties} />
              )}
            </div>
          </div>
        </div>

        {/* section data 2  */}
        <div className="my-24">
          <div>
            <div>
              <div className="flex items-center gap-1.5">
                <img className="size-5 lg:size-6" src={MagicIcon} alt="icon" />
                <img className="size-3 lg:size-4" src={MagicIcon} alt="icon" />
                <img
                  className="size-1.5 lg:size-2.5"
                  src={MagicIcon}
                  alt="icon"
                />
              </div>
              <div>
                <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
                  Let's Make it Happen
                </h1>
                <div>
                  <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                    Ready to take the first step toward your dream property?
                    Fill out the form below, and our real estate wizards will
                    work their magic to find your perfect match. Don't wait;
                    let's embark on this exciting journey together.
                  </p>
                </div>
              </div>
            </div>

            {/* Property booking form */}
            <div className="my-12">
              <BookNowForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
