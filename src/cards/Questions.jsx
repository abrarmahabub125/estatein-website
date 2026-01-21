import { useState } from "react";
import ReadMore from "../modals/ReadMore.jsx";

const Questions = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="border-grey-15 h-[14rem] w-full max-w-[320px] min-w-[320px] snap-start rounded-xl border p-6 transition-transform hover:-translate-y-1">
        <div className="flex h-full w-full flex-col justify-between">
          <h3 className="line-clamp-2 text-base font-medium text-white lg:text-lg">
            {question.question}
          </h3>
          <p className="text-grey-60 line-clamp-2 text-sm lg:text-base">
            {question.details}
          </p>

          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="border-grey-15 bg-grey-10 cursor-pointer rounded-md border px-4 py-1.5 text-sm text-white outline-none"
          >
            Read More
          </button>
        </div>
      </div>
      {isOpen && <ReadMore setIsOpen={setIsOpen} data={question} />}
    </div>
  );
};

export default Questions;
