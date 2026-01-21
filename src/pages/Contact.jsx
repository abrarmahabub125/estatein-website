import ContactForm from "../components/ContactForm";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import MagicIcon from "../assets/icons/magic-star.svg";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import VectorLine from "../assets/images/vector-line.svg";
import Team1 from "../assets/images/team-1.svg";
import Team2 from "../assets/images/team-2.svg";
import Team3 from "../assets/images/team-3.svg";
import Team4 from "../assets/images/team-4.svg";
import Team5 from "../assets/images/team-5.svg";
import Team6 from "../assets/images/team-6.svg";
import HeroSectionTemplate from "../reuseable-components/HeroSectionTemplate";
import MailIcon from "../assets/icons/mail-icon.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";
import FireIcon from "../assets/icons/fire-icon.svg";
import Loader from "../reuseable-components/Loader.jsx";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  });

  const [selected, setSelected] = useState("all");

  const heroData = {
    heading: "Get in Touch with Estatein",
    description:
      "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
    cardsData: [
      {
        icon: MailIcon,
        label: "info@estatein.com",
      },
      {
        icon: PhoneIcon,
        label: "+1 (123) 456-7890",
      },
      {
        icon: LocationIcon,
        label: "Main Headquarters",
      },
      {
        icon: FireIcon,
        label: "Instagram, LinkedIn, Facebook",
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-13.5 lg:pt-18">
      <div>
        <HeroSectionTemplate heroData={heroData} />
      </div>

      <div className="px-4 lg:px-5 xl:px-28">
        <div className="my-24">
          <ContactForm />
        </div>

        <div>
          <div>
            <div>
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
                    Discover Our Office Locations
                  </h1>
                  <div>
                    <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                      Estatein is here to serve you across multiple locations.
                      Whether you're looking to meet our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8">
              <div className="flex w-full flex-col items-center gap-2 md:items-start">
                <Tabs
                  aria-label="Office locations"
                  defaultSelectedKey="all"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                  variant="solid"
                  radius="lg"
                  classNames={{
                    tabList:
                      "text-white text-sm md:text-sm lg:text-lg px-2 py-2 bg-grey-10 rounded-lg shadow-lg", // Container background (grey-10 like)
                    tab: [
                      "py-2 px-4 border border-grey-15 outline-0 rounded-md mx-1",
                      "data-[selected=true]:bg-grey-08 ",
                      "transition-all duration-200",
                    ],
                  }}
                >
                  <Tab key="all" title="All">
                    <Card className="flex flex-col gap-4 transition-all duration-200 lg:flex-row">
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Main Headquarters
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              123 Estatein Plaza, City Center, Metropolis
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              Our main headquarters serve as the heart of
                              Estatein. Located in the bustling city center,
                              this is where our core team of experts operates,
                              driving the excellence and innovation that define
                              us.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Regional Offices
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              456 Urban Avenue, Downtown District, Metropolis
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              OEstatein's presence extends to multiple regions,
                              each with its own dynamic real estate landscape.
                              Discover our regional offices, staffed by local
                              experts who understand the nuances of their
                              respective markets.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>

                  <Tab key="regional" title="Regional">
                    <Card className="flex flex-col gap-4 transition-all duration-200 lg:flex-row">
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Main Headquarters
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              Motijhil, Dhaka, Bangladesh
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              Our main headquarters serve as the heart of
                              Estatein. Located in the bustling city center,
                              this is where our core team of experts operates,
                              driving the excellence and innovation that define
                              us.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Regional Offices
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              Meherpur, Khulna, Bangladesh
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              OEstatein's presence extends to multiple regions,
                              each with its own dynamic real estate landscape.
                              Discover our regional offices, staffed by local
                              experts who understand the nuances of their
                              respective markets.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>

                  <Tab key="international" title="International">
                    <Card className="flex flex-col gap-4 transition-all duration-200 lg:flex-row">
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Main Headquarters
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              Paris, France
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              Our main headquarters serve as the heart of
                              Estatein. Located in the bustling city center,
                              this is where our core team of experts operates,
                              driving the excellence and innovation that define
                              us.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                      <CardBody className="flex-1 p-0">
                        <div className="border-grey-15 rounded-lg border p-5">
                          <div>
                            <p className="text-grey-60 mb-1 text-sm font-medium lg:text-base">
                              Regional Offices
                            </p>
                            <h2 className="text-xl font-medium text-white lg:text-2xl">
                              Istanbul, Turkey
                            </h2>
                            <p className="text-grey-60 mt-2 text-sm font-medium lg:text-base">
                              OEstatein's presence extends to multiple regions,
                              each with its own dynamic real estate landscape.
                              Discover our regional offices, staffed by local
                              experts who understand the nuances of their
                              respective markets.
                            </p>
                          </div>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Phone className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                +1 (123) 456-7890
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <Mail className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                info@estatein.com
                              </span>
                            </div>
                            <div className="border-grey-15 bg-grey-10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                              <MapPin className="size-5 text-white" />
                              <span className="text-sm font-medium text-white">
                                Metropolis
                              </span>
                            </div>
                          </div>

                          <button className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:text-base">
                            Get Directions
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grey-10 border-grey-15 relative mb-12 h-150 w-full overflow-hidden rounded-xl border md:h-160 lg:h-190">
          <div className="h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={VectorLine}
              alt="design"
            />
          </div>
          <div className="md:grid-rows-[repeat(2, 1fr)_2fr] absolute top-0 left-0 grid h-full w-full grid-cols-4 gap-4 p-4 md:p-5 lg:grid-rows-3 lg:p-8 xl:p-18">
            <img
              className="border-grey-15 col-span-2 h-full w-full rounded-lg border object-cover"
              src={Team1}
              alt="team-image"
            />
            <img
              className="border-grey-15 col-span-2 h-full w-full rounded-lg border object-cover"
              src={Team3}
              alt="team-image"
            />
            <img
              className="border-grey-15 col-span-2 h-full w-full rounded-lg border object-cover"
              src={Team2}
              alt="team-image"
            />
            <img
              className="border-grey-15 h-full w-full rounded-lg border object-cover"
              src={Team4}
              alt="team-image"
            />
            <img
              className="border-grey-15 h-full w-full rounded-lg border object-cover"
              src={Team5}
              alt="team-image"
            />
            <div className="col-span-4 flex flex-col items-center justify-center md:col-span-2">
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
                <div className="">
                  <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
                    Explore Estatein's World
                  </h1>
                  <div>
                    <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
                      Step inside the world of Estatein, where professionalism
                      meets warmth, and expertise meets passion. Our gallery
                      offers a glimpse into our team and workspaces, inviting
                      you to get to know us better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="border-grey-15 col-span-4 h-full w-full rounded-lg border object-cover md:col-span-2"
              src={Team6}
              alt="team-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
