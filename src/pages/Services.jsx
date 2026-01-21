import HeroSectionTemplate from "../reuseable-components/HeroSectionTemplate";
import HomeIcon from "../assets/icons/home-icon.svg";
import UnlockIcon from "../assets/icons/property-icon.svg";
import Flats from "../assets/icons/flats-icon.svg";
import SunIcon from "../assets/icons/sun-icon.svg";
import MagicIcon from "../assets/icons/magic-star.svg";
import GridCards from "../reuseable-components/GridCards";
import VectorLine from "../assets/images/vector-line.svg";
import ValuationImg from "../assets/icons/valuation-icon.svg";
import MarketingImg from "../assets/icons/strategic-icon.svg";
import NegotiationImg from "../assets/icons/negotiation-icon.svg";
import ClosingImg from "../assets/icons/microphone-icon.svg";
import Tenant from "../assets/icons/tenant-harmont-icon.svg";
import Maintenance from "../assets/icons/maintenance-icon.svg";
import Financial from "../assets/icons/financial-peace-icon.svg";
import Legal from "../assets/icons/sun-icon.svg";
import ROIImg from "../assets/icons/fire-icon.svg";
import Bulp from "../assets/icons/light-icon.svg";
import { useState, useEffect } from "react";
import Loader from "../reuseable-components/Loader.jsx";

const Services = () => {
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

  const heroData = {
    heading: "Elevate Your Real Estate Experience",
    description:
      "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.",
    cardsData: [
      {
        icon: HomeIcon,
        label: "Find Your Dream Home",
      },
      {
        icon: UnlockIcon,
        label: "Unlock Property Value",
      },
      {
        icon: Flats,
        label: "Effortless Property Management",
      },
      {
        icon: SunIcon,
        label: "Smart Investments, Informed Decisions",
      },
    ],
  };

  const section1Data = [
    {
      id: 1,
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
      imgSrc: ValuationImg,
    },

    {
      id: 2,
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing.",
      imgSrc: MarketingImg,
    },
    {
      id: 3,
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
      imgSrc: NegotiationImg,
    },
    {
      id: 4,
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
      imgSrc: ClosingImg,
    },
  ];

  const section2Data = [
    {
      id: 1,
      title: "Tenant Harmony",
      description:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
      imgSrc: Tenant,
    },
    {
      id: 2,
      title: "Maintenance Ease",
      description:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
      imgSrc: Maintenance,
    },
    {
      id: 3,
      title: "Financial Peace of Mind",
      description:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
      imgSrc: Financial,
    },
    {
      id: 4,
      title: "Legal Guardianship",
      description:
        "Stay compliant with property laws and regulations effortlessly.",
      imgSrc: Legal,
    },
  ];

  const section3Data = [
    {
      id: 1,
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
      imgSrc: ValuationImg,
    },
    {
      id: 2,
      title: "ROI Assessment",
      description:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
      imgSrc: ROIImg,
    },
    {
      id: 3,
      title: "Customized Strategies",
      description:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
      imgSrc: Bulp,
    },
    {
      id: 4,
      title: "Diversification Mastery",
      description:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
      imgSrc: Legal,
    },
  ];

  return (
    <div className="pt-13.5 lg:pt-18">
      <div>
        <div>
          <HeroSectionTemplate heroData={heroData} />
        </div>

        <div className="px-4 lg:px-5 xl:px-28">
          {/* service section 1 */}
          <div className="my-24 xl:my-28">
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
                  Unlock Property Value
                </h1>
                <div>
                  <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                    Selling your property should be a rewarding experience, and
                    at Estatein, we make sure it is. Our Property Selling
                    Service is designed to maximize the value of your property,
                    ensuring you get the best deal possible. Explore the
                    categories below to see how we can help you at every step of
                    your selling journey
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-rows-[repeat(4,1fr)_1.5fr] gap-y-4 md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:mt-16">
              {section1Data.map((item) => (
                <GridCards
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                />
              ))}

              <div className="border-grey-15 bg-grey-10 relative rounded-md border md:col-span-2">
                <img
                  className="relative max-h-44 w-full object-cover object-center md:h-40"
                  src={VectorLine}
                  alt="vectorLine"
                />
                <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-center p-6">
                  <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                    <h3 className="text-xl font-semibold text-white md:text-lg">
                      Unlock the Value of Your Property Today
                    </h3>
                    <button className="bg-grey-08 border-grey-15 mt-4 w-full cursor-pointer rounded-md border px-6 py-2 text-sm text-white md:mt-0 md:w-fit lg:text-base">
                      Learn More
                    </button>
                  </div>
                  <p className="text-grey-60 mt-5 text-sm font-medium lg:text-base">
                    Ready to unlock the true value of your property? Explore our
                    Property Selling Service categories and let us help you
                    achieve the best deal possible for your valuable asset.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* service section 2 */}
          <div className="my-24 xl:my-28">
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
                  Effortless Property Management
                </h1>
                <div>
                  <p className="text-grey-60 mt-4 line-clamp-2 text-sm lg:text-base xl:text-lg">
                    Owning a property should be a pleasure, not a hassle.
                    Estatein's Property Management Service takes the stress out
                    of property ownership, offering comprehensive solutions
                    tailored to your needs. Explore the categories below to see
                    how we can make property management effortless for you
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-rows-[repeat(4,1fr)_1.5fr] gap-y-4 md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:mt-16">
              {section2Data.map((item) => (
                <GridCards
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                />
              ))}

              <div className="border-grey-15 bg-grey-10 relative rounded-md border md:col-span-2">
                <img
                  className="relative max-h-44 w-full object-cover object-center md:h-40"
                  src={VectorLine}
                  alt="vectorLine"
                />
                <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-center p-6">
                  <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                    <h3 className="text-xl font-semibold text-white md:text-lg">
                      Experience Effortless Property Management
                    </h3>
                    <button className="bg-grey-08 border-grey-15 mt-4 w-full cursor-pointer rounded-md border px-6 py-2 text-sm text-white md:mt-0 md:w-fit lg:text-base">
                      Learn More
                    </button>
                  </div>
                  <p className="text-grey-60 mt-5 line-clamp-2 text-sm font-medium lg:text-base">
                    Ready to experience hassle-free property management? Explore
                    our Property Management Service categories and let us handle
                    the complexities while you enjoy the benefits of property
                    ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service section 3 */}
          <div className="my-24 flex flex-col items-start gap-18 lg:flex-row lg:items-center lg:gap-14 xl:my-28">
            <div className="flex flex-col gap-8 lg:max-w-lg lg:gap-12">
              <div>
                <div className="flex items-center gap-1.5">
                  <img
                    className="size-5 lg:size-6"
                    src={MagicIcon}
                    alt="icon"
                  />
                  <img
                    className="size-3 lg:size-4"
                    src={MagicIcon}
                    alt="icon"
                  />
                  <img
                    className="size-1.5 lg:size-2.5"
                    src={MagicIcon}
                    alt="icon"
                  />
                </div>
                <div>
                  <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
                    Smart Investments, Informed Decisions
                  </h1>
                  <div>
                    <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                      Building a real estate portfolio requires a strategic
                      approach. Estatein's Investment Advisory Service empowers
                      you to make smart investments and informed decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-grey-15 bg-grey-10 relative h-72 rounded-md border md:col-span-2 md:h-56 lg:h-64">
                  <img
                    className="relative h-full w-full object-cover object-center"
                    src={VectorLine}
                    alt="vectorLine"
                  />
                  <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-center p-6">
                    <div className="flex flex-col items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-white">
                        Unlock Your Investment Potential
                      </h3>
                      <p className="text-grey-60 text-sm font-medium lg:text-base">
                        Explore our Property Management Service categories and
                        let us handle the complexities while you enjoy the
                        benefits of property ownership.
                      </p>
                      <button className="bg-grey-08 border-grey-15 mt-4 w-full cursor-pointer rounded-md border px-6 py-2 text-sm text-white md:mt-0 md:w-fit lg:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grey-10 border-grey-15 w-full overflow-hidden rounded-2xl border">
              <div className="grid h-full gap-4 p-4 md:grid-cols-2 md:grid-rows-2">
                {section3Data.map((item) => (
                  <GridCards
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imgSrc={item.imgSrc}
                    bgColor="bg-grey-08"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
