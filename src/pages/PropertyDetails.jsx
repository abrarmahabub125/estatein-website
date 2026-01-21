import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import FeaturesIcon from "../assets/icons/features-icon.svg";
import HomeSectionTemplate from "../reuseable-components/HomeSectionTemplate";
import { Grid2X2 } from "lucide-react";
import { BedSingle } from "lucide-react";
import { Bath } from "lucide-react";

const PropertyDetails = ({ propertyDetailsArray, questionData }) => {
  const { id } = useParams();

  const [viewProperty] = propertyDetailsArray.filter(
    (property) => property.id === parseInt(id),
  );

  return (
    <div className="px-4 pt-10 md:px-5 md:pt-14 lg:px-5 lg:pt-18 xl:px-28">
      <div className="mt-16">
        {/* section 1 */}
        <Slider propertyDetails={viewProperty} />
      </div>

      <div className="my-12 flex flex-col gap-12 lg:flex-row">
        <div className="border-grey-15 h-fit flex-1 rounded-md border p-6">
          <div>
            <h3 className="text-xl font-medium text-white">Description</h3>
            <p className="text-grey-60 mt-4 text-base font-medium">
              {viewProperty.description}
            </p>
          </div>
          <div className="border-grey-15 mt-8 grid gap-8 border-t pt-4 md:grid-cols-3 md:gap-8">
            <div className="md:border-grey-15 border-r border-transparent">
              <div className="text-grey-60 flex items-center gap-1 text-sm font-medium">
                <BedSingle className="size-5" />
                Bedrooms
              </div>
              <h3 className="mt-2 text-lg font-medium text-white">
                {`0${viewProperty.bedrooms}`}
              </h3>
            </div>
            <div className="md:border-grey-15 border-r border-transparent">
              <div className="text-grey-60 flex items-center gap-1 text-sm font-medium">
                <Bath className="size-5" />
                Bathrooms
              </div>
              <h3 className="mt-2 text-lg font-medium text-white">
                {`0${viewProperty.bathrooms}`}
              </h3>
            </div>
            <div>
              <div className="text-grey-60 flex items-center gap-1 text-sm font-medium">
                <Grid2X2 className="size-5" />
                Area
              </div>
              <h3 className="mt-2 text-lg font-medium text-white">
                {`${viewProperty.area} Square Feet`}
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div className="border-grey-15 to rounded-md border p-6">
            <h2 className="text-xl font-medium text-white">
              Key Features and Amenities
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <div className="border-purple-60 to-grey-10 flex items-center gap-4 border-l-2 bg-linear-to-l px-4 py-3">
                <img src={FeaturesIcon} alt="icon" />
                <p className="text-grey-60 font-medium">
                  Expansive oceanfront terrace for outdoor entertaining
                </p>
              </div>
              <div className="border-purple-60 to-grey-10 flex items-center gap-4 border-l-2 bg-linear-to-l px-4 py-3">
                <img src={FeaturesIcon} alt="icon" />
                <p className="text-grey-60 font-medium">
                  Gourmet kitchen with top-of-the-line appliances
                </p>
              </div>
              <div className="border-purple-60 to-grey-10 flex items-center gap-4 border-l-2 bg-linear-to-l px-4 py-3">
                <img src={FeaturesIcon} alt="icon" />
                <p className="text-grey-60 font-medium">
                  Private beach access for morning strolls and sunset views
                </p>
              </div>
              <div className="border-purple-60 to-grey-10 flex items-center gap-4 border-l-2 bg-linear-to-l px-4 py-3">
                <img src={FeaturesIcon} alt="icon" />
                <p className="text-grey-60 font-medium">
                  Master suite with a spa-inspired bathroom and ocean-facing
                  balcony
                </p>
              </div>
              <div className="border-purple-60 to-grey-10 flex items-center gap-4 border-l-2 bg-linear-to-l px-4 py-2">
                <img src={FeaturesIcon} alt="icon" />
                <p className="text-grey-60 font-medium">
                  Private garage and ample storage space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-18">
        <HomeSectionTemplate
          padding={true}
          sectionData={questionData}
          renderCard={questionData.renderCard}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
