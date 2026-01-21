import Bed from "../assets/icons/bed-icon.svg";
import Bathroom from "../assets/icons/bathroom-icon.svg";
import Villa from "../assets/icons/villa-icon.svg";
import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="border-grey-15 w-full max-w-[330px] min-w-[320px] snap-start rounded-2xl border p-3.5 transition-transform hover:-translate-y-1">
      <div>
        <div className="border-grey-15 relative h-48 w-full overflow-hidden rounded-md border object-center">
          <img
            className="h-full w-full object-cover"
            src={property.image}
            alt="property-image"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-white">{property.title}</h3>
          <p className="text-grey-60 mt-2 text-sm">
            {`${property.description.slice(0, 60)} ...`}
            <span className="text-sm text-white hover:underline">
              Read More
            </span>
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
            <div className="bg-grey-10 border-grey-15 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <img className="size-4 object-cover" src={Bed} alt="icon" />
              <span className="text-sm text-white">{`${property.bedrooms}-Bedrooms`}</span>
            </div>
            <div className="bg-grey-10 border-grey-15 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <img className="size-4 object-cover" src={Bathroom} alt="icon" />
              <span className="text-sm text-white">{`${property.bathrooms}-Bathrooms`}</span>
            </div>
            <div className="bg-grey-10 border-grey-15 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
              <img className="size-4 object-cover" src={Villa} alt="icon" />
              <span className="text-sm text-white">{property.type}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="text-grey-60 mb-0.5 text-sm font-medium">
              Price
            </span>
            <h1 className="inline-flex items-center font-semibold text-white">
              <DollarSign className="size-5" />
              {new Intl.NumberFormat("en-IN").format(property.price)}
            </h1>
          </div>
          <Link
            to={`/property/details/${property.id}`}
            className="bg-purple-60 hover:bg-purple-60/90 cursor-pointer rounded-md px-3 py-2 text-sm text-white transition-colors outline-none"
          >
            View Property Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
