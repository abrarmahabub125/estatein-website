import { useState, useEffect } from "react";
import Loader from "../reuseable-components/Loader.jsx";
import MagicIcon from "../assets/icons/magic-star.svg";
import InfoCard from "../cards/InfoCard.jsx";
import VectorImg from "../assets/images/vector-line.svg";
import HandHome from "../assets/images/hand-home.svg";

import CapIcon from "../assets/icons/cap-icon.svg";
import StarIcon from "../assets/icons/star-icon.svg";
import GroupIcon from "../assets/icons/group-icon.svg";
import { Send } from "lucide-react";
import { Twitter } from "lucide-react";

import ManImage1 from "../assets/images/man-img-1.svg";
import ManImage2 from "../assets/images/man-img-2.svg";
import WomanImage1 from "../assets/images/women-img-1.svg";
import WomanImage2 from "../assets/images/women-img-2.svg";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#121212] px-4 pt-20 md:pt-24 lg:px-5 lg:pt-32 xl:px-28">
      <div>
        {/* section 1 content */}
        <div className="grid items-center justify-between gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 xl:gap-x-28">
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
                Our Journey
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary. Over the
                  years, we've expanded our reach, forged valuable partnerships,
                  and gained the trust of countless clients. Today, we stand as
                  a testament to what dedication and passion can achieve in the
                  real estate industry.
                </p>
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

          <div>
            <div className="border-grey-15 relative w-full overflow-hidden rounded-md border xl:max-h-[450px]">
              <div className="h-full w-full">
                <img
                  className="h-full w-full"
                  src={VectorImg}
                  alt="vector line"
                />
              </div>
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={HandHome}
                alt="hand home"
              />
            </div>
          </div>
        </div>

        {/* Section 2 content  */}
        <div className="my-28 grid grid-cols-1 gap-x-8 lg:grid-cols-5 lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="w-full lg:col-span-2">
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
                Our Values
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grey-10 mt-12 rounded-lg p-2 lg:col-span-3">
            <div className="bg-grey-08 grid h-full w-full grid-cols-1 grid-rows-4 gap-3 rounded-md p-3 md:grid-cols-2 md:grid-rows-2">
              {/* card section */}
              <div className="border-grey-15 rounded-md border p-4">
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={StarIcon}
                    alt="icon"
                    className="size-12 object-cover lg:size-14"
                  />
                  <h2 className="text-lg font-medium text-white lg:text-xl lg:font-semibold">
                    Trust
                  </h2>
                </div>
                <p className="text-grey-60 text-sm lg:text-base xl:text-lg">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>

              {/* card section */}
              <div className="border-grey-15 rounded-md border p-4">
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={CapIcon}
                    alt="icon"
                    className="size-12 object-cover lg:size-14"
                  />
                  <h2 className="text-lg font-medium text-white lg:text-xl lg:font-semibold">
                    Excellence
                  </h2>
                </div>
                <p className="text-grey-60 text-sm lg:text-base xl:text-lg">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>

              {/* card section */}
              <div className="border-grey-15 rounded-md border p-4">
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={GroupIcon}
                    alt="icon"
                    className="size-12 object-cover lg:size-14"
                  />
                  <h2 className="text-lg font-medium text-white lg:text-xl lg:font-semibold">
                    Client-Centric
                  </h2>
                </div>
                <p className="text-grey-60 text-sm lg:text-base xl:text-lg">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>

              {/* card section */}
              <div className="border-grey-15 rounded-md border p-4">
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={StarIcon}
                    alt="icon"
                    className="size-12 object-cover lg:size-14"
                  />
                  <h2 className="text-lg font-medium text-white lg:text-xl lg:font-semibold">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-grey-60 text-sm lg:text-base xl:text-lg">
                  We are dedicated to providing you with the highest level of
                  service, professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 content  */}
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
                Our Achievements
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 grid-rows-4 gap-4 md:mt-10 md:grid-cols-2 md:grid-rows-2 md:gap-4 lg:mt-12 lg:grid-cols-4 lg:grid-rows-1 lg:gap-5 xl:mt-14 xl:gap-6">
              {/* Cards  */}
              <div className="bg-grey-10 rounded-lg p-2">
                <div className="bg-grey-08 h-full w-full rounded-md p-5">
                  <h2 className="text-lg font-medium text-white lg:text-xl">
                    3+ Years of Excellence
                  </h2>
                  <p className="text-grey-60 mt-5 text-sm lg:text-base">
                    With over 3 years in the industry, we've amassed a wealth of
                    knowledge and experience, becoming a go-to resource for all
                    things real estate.
                  </p>
                </div>
              </div>

              {/* Cards  */}
              <div className="bg-grey-10 rounded-lg p-2">
                <div className="bg-grey-08 h-full w-full rounded-md p-5">
                  <h2 className="text-lg font-medium text-white lg:text-xl">
                    Happy Clients
                  </h2>
                  <p className="text-grey-60 mt-5 text-sm lg:text-base">
                    Our greatest achievement is the satisfaction of our clients.
                    Their success stories fuel our passion for what we do.
                  </p>
                </div>
              </div>

              {/* Cards  */}
              <div className="bg-grey-10 rounded-lg p-2">
                <div className="bg-grey-08 h-full w-full rounded-md p-5">
                  <h2 className="text-lg font-medium text-white lg:text-xl">
                    Industry Recognition
                  </h2>
                  <p className="text-grey-60 mt-5 text-sm lg:text-base">
                    We've earned the respect of our peers and industry leaders,
                    with accolades and awards that reflect our commitment to
                    excellence.
                  </p>
                </div>
              </div>

              {/* Cards  */}
              <div className="bg-grey-10 rounded-lg p-2">
                <div className="bg-grey-08 h-full w-full rounded-md p-5">
                  <h2 className="text-lg font-medium text-white lg:text-xl">
                    Full time Services
                  </h2>
                  <p className="text-grey-60 mt-5 text-sm lg:text-base">
                    With over 3 years in the industry, we've amassed a wealth of
                    knowledge and experience, becoming a go-to resource for all
                    things real estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 content  */}
        <div className="mt-28">
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
                Navigating the Estatein Experience
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  At Estatein, we've designed a straightforward process to help
                  you find and purchase your dream property with ease. Here's a
                  step-by-step guide to how it all works.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 xl:mt-20">
            <div className="grid grid-cols-1 grid-rows-6 items-start gap-8 md:grid-cols-2 md:grid-rows-3 lg:gap-10 xl:grid-cols-3 xl:grid-rows-2 xl:gap-12">
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 01</h4>
                    </div>
                    <div className="border-grey-15 rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        Discover a World of Possibilities
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        Your journey begins with exploring our carefully curated
                        property listings. Use our intuitive search tools to
                        filter properties based on your preferences, including
                        location, type, size, and budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 h-full rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 02</h4>
                    </div>
                    <div className="border-grey-15 h-full rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        Narrowing Down Your Choices
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        Once you've found properties that catch your eye, save
                        them to your account or make a shortlist. This allows
                        you to compare and revisit your favorites as you make
                        your decision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 h-full rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 03</h4>
                    </div>
                    <div className="border-grey-15 h-full rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        Personalized Guidance
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        Have questions about a property or need more
                        information? Our dedicated team of real estate experts
                        is just a call or message away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 h-full rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 04</h4>
                    </div>
                    <div className="border-grey-15 h-full rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        See It for Yourself
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        Arrange viewings of the properties you're interested in.
                        We'll coordinate with the property owners and accompany
                        you to ensure you get a firsthand look at your potential
                        new home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 h-full rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 05</h4>
                    </div>
                    <div className="border-grey-15 h-full rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        Making Informed Decisions
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        Before making an offer, our team will assist you with
                        due diligence, including property inspections, legal
                        checks, and market analysis. We want you to be fully
                        informed and confident in your choice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cards  */}
              <div className="h-full rounded-br-2xl rounded-bl-2xl">
                <div className="to-purple-60 from-grey-15 h-full rounded-br-xl rounded-bl-xl bg-linear-to-tl from-70% p-0.5 pt-0 pr-0">
                  <div className="flex h-full w-full flex-col gap-0.5">
                    <div className="bg-[#121212] px-4 py-3 text-white">
                      <h4 className="font-medium text-white">Step 06</h4>
                    </div>
                    <div className="border-grey-15 h-full rounded-br-xl rounded-bl-xl border-r-2 bg-[#121212] px-4 py-8">
                      <h3 className="text-xl font-medium text-white">
                        Getting the Best Deal
                      </h3>
                      <p className="text-grey-60 mt-4 text-sm font-medium lg:text-base">
                        We'll help you negotiate the best terms and prepare your
                        offer. Our goal is to secure the property at the right
                        price and on favorable terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 content  */}
        <div className="my-28">
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
                Meet the Estatein Team
              </h1>
              <div>
                <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                  At Estatein, our success is driven by the dedication and
                  expertise of our team. Get to know the people behind our
                  mission to make your real estate dreams a reality.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:gap-8">
              {/* cards  */}
              <div className="border-grey-15 inline-block rounded-lg border p-5">
                <div>
                  <div className="relative h-52 w-full rounded-md">
                    <img
                      src={ManImage1}
                      alt="man-image"
                      className="h-full w-full object-cover"
                    />
                    <button className="bg-purple-60 absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full px-6 py-2">
                      <Twitter className="size-6 fill-white text-white" />
                    </button>
                  </div>
                  <div className="mt-9">
                    <h2 className="text-center text-lg font-medium text-white lg:text-xl">
                      Max Mitchell
                    </h2>
                    <p className="text-grey-60 mt-1 text-center text-sm lg:text-base">
                      Founder & CEO
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="border-grey-15 flex items-center justify-between rounded-full border p-2">
                      <p className="ml-2 text-sm text-white lg:text-base">
                        Say Hello👋
                      </p>
                      <button className="bg-purple-60 flex size-9 items-center justify-center rounded-full text-white lg:size-10">
                        <Send className="size-4.5 lg:size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* cards  */}
              <div className="border-grey-15 inline-block rounded-lg border p-5">
                <div>
                  <div className="relative h-52 w-full rounded-md">
                    <img
                      src={WomanImage1}
                      alt="woman-image"
                      className="h-full w-full object-cover"
                    />
                    <button className="bg-purple-60 absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full px-6 py-2">
                      <Twitter className="size-6 fill-white text-white" />
                    </button>
                  </div>
                  <div className="mt-9">
                    <h2 className="text-center text-lg font-medium text-white lg:text-xl">
                      Michael Turner
                    </h2>
                    <p className="text-grey-60 mt-1 text-center text-sm lg:text-base">
                      Legal Counsel
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="border-grey-15 flex items-center justify-between rounded-full border p-2">
                      <p className="ml-2 text-sm text-white lg:text-base">
                        Say Hello👋
                      </p>
                      <button className="bg-purple-60 flex size-9 items-center justify-center rounded-full text-white lg:size-10">
                        <Send className="size-4.5 lg:size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* cards  */}
              <div className="border-grey-15 inline-block rounded-lg border p-5">
                <div>
                  <div className="relative h-52 w-full rounded-md">
                    <img
                      src={ManImage2}
                      alt="man-image"
                      className="h-full w-full object-cover"
                    />
                    <button className="bg-purple-60 absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full px-6 py-2">
                      <Twitter className="size-6 fill-white text-white" />
                    </button>
                  </div>
                  <div className="mt-9">
                    <h2 className="text-center text-lg font-medium text-white lg:text-xl">
                      David Brown
                    </h2>
                    <p className="text-grey-60 mt-1 text-center text-sm lg:text-base">
                      Head of Property Management
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="border-grey-15 flex items-center justify-between rounded-full border p-2">
                      <p className="ml-2 text-sm text-white lg:text-base">
                        Say Hello👋
                      </p>
                      <button className="bg-purple-60 flex size-9 items-center justify-center rounded-full text-white lg:size-10">
                        <Send className="size-4.5 lg:size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* cards  */}
              <div className="border-grey-15 inline-block rounded-lg border p-5">
                <div>
                  <div className="relative h-52 w-full rounded-md">
                    <img
                      src={WomanImage2}
                      alt="man-image"
                      className="h-full w-full object-cover"
                    />
                    <button className="bg-purple-60 absolute -bottom-4 left-1/2 -translate-x-1/2 transform rounded-full px-6 py-2">
                      <Twitter className="size-6 fill-white text-white" />
                    </button>
                  </div>
                  <div className="mt-9">
                    <h2 className="text-center text-lg font-medium text-white lg:text-xl">
                      Sarah Johnson
                    </h2>
                    <p className="text-grey-60 mt-1 text-center text-sm lg:text-base">
                      Chief Real Estate Officer
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="border-grey-15 flex items-center justify-between rounded-full border p-2">
                      <p className="ml-2 text-sm text-white lg:text-base">
                        Say Hello👋
                      </p>
                      <button className="bg-purple-60 flex size-9 items-center justify-center rounded-full text-white lg:size-10">
                        <Send className="size-4.5 lg:size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
