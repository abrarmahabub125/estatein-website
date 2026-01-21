import { Star } from "lucide-react";
const RatingCard = ({ review }) => {
  return (
    <div className="border-grey-15 min-w-[320px] snap-start rounded-xl border p-6 transition-transform hover:-translate-y-1">
      <div>
        <div className="flex items-center gap-2">
          <button className="bg-grey-10 border-grey-15 flex size-6 items-center justify-center rounded-full border lg:size-8">
            <Star className="size-4 fill-[#FFE500] stroke-[#FFE500] stroke-1 lg:size-5" />
          </button>
          <button className="bg-grey-10 border-grey-15 flex size-6 items-center justify-center rounded-full border lg:size-8">
            <Star className="size-4 fill-[#FFE500] stroke-[#FFE500] stroke-1 lg:size-5" />
          </button>
          <button className="bg-grey-10 border-grey-15 flex size-6 items-center justify-center rounded-full border lg:size-8">
            <Star className="size-4 fill-[#FFE500] stroke-[#FFE500] stroke-1 lg:size-5" />
          </button>
          <button className="bg-grey-10 border-grey-15 flex size-6 items-center justify-center rounded-full border lg:size-8">
            <Star className="size-4 fill-[#FFE500] stroke-[#FFE500] stroke-1 lg:size-5" />
          </button>
          <button className="bg-grey-10 border-grey-15 flex size-6 items-center justify-center rounded-full border lg:size-8">
            <Star className="size-4 fill-[#FFE500] stroke-[#FFE500] stroke-1 lg:size-5" />
          </button>
        </div>
        <div className="mt-5 lg:mt-6">
          <h3 className="line-clamp-1 text-base font-medium text-white lg:text-lg">
            {review.title}
          </h3>
          <p className="text-grey-60 mt-4 line-clamp-2 text-xs lg:text-sm">
            {review.description}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-3 lg:mt-6">
          <div className="border-grey-15 relative size-9 rounded-full border lg:size-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={review.profile_img}
              alt="profile_img"
            />
          </div>
          <div>
            <h3 className="text-sm text-white lg:text-base">
              {review.fullName}
            </h3>
            <p className="text-grey-50 mt-0.5 text-xs lg:text-sm">
              {review.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
