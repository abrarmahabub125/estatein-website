import { MapPin } from "lucide-react";
import HorizontalSlider from "./HorizontalSlider";
const Slider = ({ propertyDetails }) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <h3 className="text-xl font-medium text-white lg:text-2xl">
              {propertyDetails.title}
            </h3>
            <div className="border-grey-15 flex items-center gap-x-2 rounded-md border px-4 py-2">
              <MapPin className="size-4 text-white lg:size-5" />
              <p className="text-sm font-medium text-white capitalize lg:text-base">
                {propertyDetails.location.split("_").join(", ")}
              </p>
            </div>
          </div>
          <div>
            <p className="text-grey-60 text-sm lg:text-base">Price</p>
            <h2 className="text-lg font-medium text-white lg:text-xl">{`$${propertyDetails.price.toLocaleString("en-US")}`}</h2>
          </div>
        </div>
      </div>

      <div>
        <HorizontalSlider propertyDetails={propertyDetails} />
      </div>
    </div>
  );
};

export default Slider;
