import {
  Search,
  ChevronDown,
  MapPin,
  HousePlus,
  CreditCard,
  Scaling,
  Calendar,
} from "lucide-react";

const PropertyFilter = ({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
  propertyTerm,
  setPropertyTerm,
  priceTerm,
  setPriceTerm,
  sqrTerm,
  setSqrTerm,
  buildYearTerm,
  setBuildYearTerm,
  handleSearchChange,
}) => {
  return (
    <div>
      {/* Filter component will go here */}
      <div className="mt-10 flex flex-col items-center px-4 md:-mt-8">
        <div className="bg-grey-10 md:rounded-0 mb-4 w-full max-w-lg rounded-md p-1.5 md:mb-0 md:rounded-none md:rounded-tl-lg md:rounded-tr-lg">
          <div className="bg-grey-08 flex h-full items-center justify-between gap-4 rounded-md p-1">
            <input
              className="placeholder:text-grey-60 h-full w-full border-none bg-transparent px-4 py-2 text-sm text-white outline-none md:text-base"
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === "") {
                  handleSearchChange();
                }
              }}
              placeholder="Search For A Property"
            />
            <button
              disabled={!searchTerm}
              onClick={handleSearchChange}
              className="bg-purple-60 hover:bg-purple-60/90 flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm whitespace-nowrap text-white outline-0 transition-colors md:text-base"
            >
              <Search className="size-4" />
              Find Property
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <form className="bg-grey-10 grid w-full grid-rows-5 gap-2 rounded-lg p-1.5 md:grid-cols-5 md:grid-rows-1 lg:max-w-7xl">
            {/* filters */}
            <div className="bg-grey-08 border-grey-10 flex w-full items-center justify-between rounded-md border px-4 py-2">
              <div className="flex w-full items-center gap-2">
                <MapPin className="text-grey-60 size-5 md:size-6 xl:size-7" />
                <select
                  value={locationTerm}
                  onChange={(e) => {
                    setLocationTerm(e.target.value);
                  }}
                  className="border-grey-08 bg-grey-08 w-full appearance-none border px-2 py-1 text-sm text-white outline-0 md:text-base xl:text-lg"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Location
                  </option>

                  <option value="new_york_usa" className="text-sm lg:text-base">
                    New York, USA
                  </option>
                  <option
                    value="los_angeles_usa"
                    className="text-sm lg:text-base"
                  >
                    Los Angeles, USA
                  </option>
                  <option
                    value="san_francisco_usa"
                    className="text-sm lg:text-base"
                  >
                    San Francisco, USA
                  </option>
                  <option value="chicago_usa" className="text-sm lg:text-base">
                    Chicago, USA
                  </option>
                  <option value="miami_usa" className="text-sm lg:text-base">
                    Miami, USA
                  </option>

                  <option
                    value="toronto_canada"
                    className="text-sm lg:text-base"
                  >
                    Toronto, Canada
                  </option>
                  <option
                    value="vancouver_canada"
                    className="text-sm lg:text-base"
                  >
                    Vancouver, Canada
                  </option>

                  <option value="london_uk" className="text-sm lg:text-base">
                    London, UK
                  </option>
                  <option
                    value="manchester_uk"
                    className="text-sm lg:text-base"
                  >
                    Manchester, UK
                  </option>

                  <option value="dubai_uae" className="text-sm lg:text-base">
                    Dubai, UAE
                  </option>
                </select>
              </div>
              <ChevronDown className="text-grey-60 size-4 md:size-5 xl:size-6" />
            </div>

            {/* filters */}
            <div className="bg-grey-08 border-grey-10 flex w-full items-center justify-between rounded-md border px-4 py-2">
              <div className="flex w-full items-center gap-2">
                <HousePlus className="text-grey-60 size-5 md:size-6 xl:size-7" />
                <select
                  value={propertyTerm}
                  onChange={(e) => setPropertyTerm(e.target.value)}
                  className="border-grey-08 bg-grey-08 w-full appearance-none border px-2 py-1 text-sm text-white outline-0 md:text-base xl:text-lg"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Property Type
                  </option>

                  <option value="apartment" className="text-sm lg:text-base">
                    Apartment
                  </option>
                  <option
                    value="luxury apartment"
                    className="text-sm lg:text-base"
                  >
                    Luxury Apartment
                  </option>
                  <option
                    value="studio apartment"
                    className="text-sm lg:text-base"
                  >
                    Studio Apartment
                  </option>
                  <option value="duplex home" className="text-sm lg:text-base">
                    Duplex Home
                  </option>
                  <option value="penthouse" className="text-sm lg:text-base">
                    Penthouse
                  </option>
                  <option value="villa" className="text-sm lg:text-base">
                    Villa
                  </option>
                  <option value="townhouse" className="text-sm lg:text-base">
                    Townhouse
                  </option>
                  <option value="office space" className="text-sm lg:text-base">
                    Office Space
                  </option>

                  <option value="warehouse" className="text-sm lg:text-base">
                    Warehouse
                  </option>

                  <option value="land plot" className="text-sm lg:text-base">
                    Land / Plot
                  </option>
                  <option value="farmhouse" className="text-sm lg:text-base">
                    Farmhouse
                  </option>
                  <option
                    value="single family home"
                    className="text-sm lg:text-base"
                  >
                    Single Family Home
                  </option>
                </select>
              </div>
              <ChevronDown className="text-grey-60 size-4 md:size-5 xl:size-6" />
            </div>

            {/* filters */}
            <div className="bg-grey-08 border-grey-10 flex w-full items-center justify-between rounded-md border px-4 py-2">
              <div className="flex w-full items-center gap-2">
                <CreditCard className="text-grey-60 size-5 md:size-6 xl:size-7" />
                <select
                  value={priceTerm}
                  onChange={(e) => setPriceTerm(e.target.value)}
                  className="border-grey-08 bg-grey-08 w-full appearance-none border px-2 py-1 text-sm text-white outline-0 md:text-base xl:text-lg"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Budget
                  </option>

                  <option value="0-50000" className="text-sm lg:text-base">
                    Under $50,000
                  </option>
                  <option value="50000-100000" className="text-sm lg:text-base">
                    $50,000 – $100,000
                  </option>
                  <option
                    value="100000-200000"
                    className="text-sm lg:text-base"
                  >
                    $100,000 – $200,000
                  </option>
                  <option
                    value="200000-300000"
                    className="text-sm lg:text-base"
                  >
                    $200,000 – $300,000
                  </option>
                  <option
                    value="300000-500000"
                    className="text-sm lg:text-base"
                  >
                    $300,000 – $500,000
                  </option>

                  <option
                    value="500000-750000"
                    className="text-sm lg:text-base"
                  >
                    $500,000 – $750,000
                  </option>
                  <option
                    value="750000-1000000"
                    className="text-sm lg:text-base"
                  >
                    $750,000 – $1,000,000
                  </option>

                  <option
                    value="1000000-2000000"
                    className="text-sm lg:text-base"
                  >
                    $1,000,000 – $2,000,000
                  </option>
                  <option value="2000000+" className="text-sm lg:text-base">
                    $2,000,000+
                  </option>
                </select>
              </div>
              <ChevronDown className="text-grey-60 size-4 md:size-5 xl:size-6" />
            </div>

            {/* filters */}
            <div className="bg-grey-08 border-grey-10 flex w-full items-center justify-between rounded-md border px-4 py-2">
              <div className="flex w-full items-center gap-2">
                <Scaling className="text-grey-60 size-5 md:size-6 xl:size-7" />
                <select
                  value={sqrTerm}
                  onChange={(e) => setSqrTerm(e.target.value)}
                  className="border-grey-08 bg-grey-08 w-full appearance-none border px-2 py-1 text-sm text-white outline-0 md:text-base xl:text-lg"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Property Size
                  </option>

                  <option value="0-500" className="text-sm lg:text-base">
                    Up to 500 sq ft
                  </option>
                  <option value="500-800" className="text-sm lg:text-base">
                    500 – 800 sq ft
                  </option>
                  <option value="800-1000" className="text-sm lg:text-base">
                    800 – 1,000 sq ft
                  </option>
                  <option value="1000-1200" className="text-sm lg:text-base">
                    1,000 – 1,200 sq ft
                  </option>
                  <option value="1200-1500" className="text-sm lg:text-base">
                    1,200 – 1,500 sq ft
                  </option>

                  <option value="1500-2000" className="text-sm lg:text-base">
                    1,500 – 2,000 sq ft
                  </option>
                  <option value="2000-3000" className="text-sm lg:text-base">
                    2,000 – 3,000 sq ft
                  </option>
                  <option value="3000+" className="text-sm lg:text-base">
                    3,000+ sq ft
                  </option>
                </select>
              </div>
              <ChevronDown className="text-grey-60 size-4 md:size-5 xl:size-6" />
            </div>

            {/* filters */}
            <div className="bg-grey-08 border-grey-10 flex w-full items-center justify-between rounded-md border px-4 py-2">
              <div className="flex w-full items-center gap-2">
                <Calendar className="text-grey-60 size-5 md:size-6 xl:size-7" />
                <select
                  value={buildYearTerm}
                  onChange={(e) => setBuildYearTerm(e.target.value)}
                  className="border-grey-08 bg-grey-08 w-full appearance-none border px-2 py-1 text-sm text-white outline-0 md:text-base xl:text-lg"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Build Year
                  </option>

                  <option value="2021-2025" className="text-sm lg:text-base">
                    2021 – Present
                  </option>
                  <option value="2016-2020" className="text-sm lg:text-base">
                    2016 – 2020
                  </option>
                  <option value="2011-2015" className="text-sm lg:text-base">
                    2011 – 2015
                  </option>
                  <option value="2006-2010" className="text-sm lg:text-base">
                    2006 – 2010
                  </option>
                  <option value="2001-2005" className="text-sm lg:text-base">
                    2001 – 2005
                  </option>
                  <option value="1991-2000" className="text-sm lg:text-base">
                    1991 – 2000
                  </option>
                  <option value="1981-1990" className="text-sm lg:text-base">
                    1981 – 1990
                  </option>
                  <option value="1970-1980" className="text-sm lg:text-base">
                    1970 – 1980
                  </option>
                  <option value="before-1970" className="text-sm lg:text-base">
                    Before 1970
                  </option>
                </select>
              </div>
              <ChevronDown className="text-grey-60 size-4 md:size-5 xl:size-6" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
