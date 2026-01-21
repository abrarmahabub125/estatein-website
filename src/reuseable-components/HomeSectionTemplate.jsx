import MagicIcon from "../assets/icons/magic-star.svg";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeSectionTemplate = ({ sectionData, renderCard }) => {
  const { id, heading, subHeading, data, buttonText, pathForView } =
    sectionData;
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollRef = useRef(null);

  const card_scroll_amount = 320;

  const handelScrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -card_scroll_amount,
      behavior: "smooth",
    });
  };

  const handelScrollRight = () => {
    scrollRef.current.scrollBy({
      left: card_scroll_amount,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    setIsAtStart(el.scrollLeft === 0);

    setIsAtEnd(Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPosition(); // initial check

    el.addEventListener("scroll", checkScrollPosition);
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <section key={id} className="px-4 py-12 md:px-5 xl:px-28">
      <div>
        <div>
          <div className="flex items-center gap-1.5">
            <img className="size-5 lg:size-6" src={MagicIcon} alt="icon" />
            <img className="size-3 lg:size-4" src={MagicIcon} alt="icon" />
            <img className="size-1.5 lg:size-2.5" src={MagicIcon} alt="icon" />
          </div>
          <div>
            <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
              {heading}
            </h1>
            <div>
              <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                {subHeading}
              </p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="scrollbar-hide my-8 flex snap-x snap-mandatory items-center gap-4 overflow-x-scroll scroll-smooth py-3 transition-transform duration-300"
          >
            {/* property card list  */}
            {data.map((property, idx) => renderCard(property, idx))}
          </div>

          {/* for small device  */}
          <div className="border-grey-15 flex items-center justify-between border-t pt-4">
            <Link
              to={pathForView}
              className="border-grey-15 bg-grey-10 cursor-pointer rounded-md border px-4 py-1.5 text-sm text-white"
            >
              {buttonText}
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={handelScrollLeft}
                disabled={isAtStart}
                className={
                  isAtStart
                    ? "bg-grey-10 border-grey-15 active:bg-grey-08 text-grey-40 flex size-8 cursor-not-allowed items-center justify-center rounded-full border transition-colors outline-none"
                    : "bg-grey-10 border-grey-15 active:bg-grey-08 flex size-8 cursor-pointer items-center justify-center rounded-full border text-white transition-colors outline-none"
                }
              >
                <ArrowLeft className="size-5" />
              </button>

              <button
                onClick={handelScrollRight}
                disabled={isAtEnd}
                className={
                  isAtEnd
                    ? "bg-grey-10 border-grey-15 active:bg-grey-08 text-grey-40 flex size-8 cursor-not-allowed items-center justify-center rounded-full border transition-colors outline-none"
                    : "bg-grey-10 border-grey-15 active:bg-grey-08 flex size-8 cursor-pointer items-center justify-center rounded-full border text-white transition-colors outline-none"
                }
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTemplate;
