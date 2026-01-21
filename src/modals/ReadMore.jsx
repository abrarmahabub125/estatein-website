import { X } from "lucide-react";

const ReadMore = ({ setIsOpen, data }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/40 p-4 transition-all duration-300">
      <div className="bg-grey-08 w-lg rounded-2xl p-5">
        <div className="border-grey-15 flex items-center justify-between border-b pb-2.5">
          <p className="text-base font-semibold text-white md:text-lg">
            Frequently Asked question
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-black/20 md:size-9"
          >
            <X className="text-grey-60 size-5 transition hover:text-white md:size-6" />
          </button>
        </div>

        <div className="scrollbar-hide mt-4 max-h-44 overflow-y-scroll">
          <h2 className="text-base font-medium text-white md:text-lg">
            {data.question}
          </h2>
          <p className="text-grey-60 mt-4 pb-2 text-sm font-medium md:text-base">
            {data.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
