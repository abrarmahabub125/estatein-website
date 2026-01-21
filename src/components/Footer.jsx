import Design1 from "../assets/images/abstract-design1.svg";
import Design2 from "../assets/images/abstract-design2.svg";
import { Send, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook-icon.svg";
import Youtube from "../assets/icons/youtube-icon.svg";
import Twitter from "../assets/icons/x-icon.svg";
import LinkedIn from "../assets/icons/linkedin-icon.svg";
import { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handelSubmit = (e) => {
    e.preventDefault();

    if (emailRegex.test(email)) {
      toast.success("Email sent successfully");
      setEmail("");
    } else {
      toast.error("Email is not valid!");
    }
  };

  return (
    <footer>
      <div className="border-grey-15 relative overflow-hidden border">
        {/* Background Images */}
        <div className="relative h-80 w-full md:h-[280px] lg:h-[270px]">
          {/* Main Image */}
          <img
            src={Design2}
            alt="design"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay Image */}
          <img
            src={Design1}
            alt="design"
            className="absolute bottom-0 left-0 h-28 w-full object-cover opacity-90 md:h-32"
          />

          {/* Dark Gradient Overlay (for text readability) */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 lg:flex-row lg:items-center lg:justify-between lg:px-5 xl:px-28">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-2xl font-medium text-white lg:text-3xl">
              Start Your Real Estate Journey Today
            </h1>

            <p className="text-grey-60 mt-5 text-sm leading-relaxed lg:text-base xl:text-lg">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way.
            </p>
          </div>

          <Link
            to="/properties"
            className="bg-purple-60 hover:bg-purple-60/90 mt-8 w-fit cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition lg:mt-0 lg:text-base"
          >
            Explore Properties
          </Link>
        </div>
      </div>

      <div className="bg-grey-08 px-4 py-16 md:px-5 xl:px-28">
        <div className="flex flex-col items-start justify-between gap-x-24 gap-y-16 lg:flex-row">
          <div>
            <img
              className="h-[30px] w-[93px] cursor-pointer md:h-[34px] md:w-[113px] xl:h-11 xl:w-40"
              src={Logo}
              alt="logo"
            />
            <div className="relative mt-5">
              <form onSubmit={handelSubmit}>
                <div>
                  <label>
                    <div className="relative">
                      <Mail className="stroke-grey-15 absolute top-1/2 left-2 translate-y-[-50%]" />
                      <input
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="E-mail"
                        className="border-grey-15 w-68 rounded-md border px-10 py-2 text-base text-white outline-0 transition"
                        type="email"
                        name="email"
                      />
                    </div>
                  </label>
                  <button
                    disabled={!email}
                    onClick={handelSubmit}
                    className="absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                  >
                    <Send
                      className={
                        email !== ""
                          ? "size-5 stroke-white"
                          : "stroke-grey-40 size-5"
                      }
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid w-full [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-x-8 gap-y-8 xl:max-w-4xl">
            {/* Home */}
            <div>
              <h3 className="text-grey-60 mb-4 text-base lg:text-lg">Home</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="#" className="footer-link">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-grey-60 mb-4 text-base lg:text-lg">
                About Us
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="#" className="footer-link">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Our Works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Our Clients
                  </Link>
                </li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h3 className="text-grey-60 mb-4 text-base lg:text-lg">
                Properties
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="#" className="footer-link">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-grey-60 mb-4 text-base lg:text-lg">
                Services
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="#" className="footer-link">
                    Valuation Mastery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Strategic Marketing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Negotiation Wizardry
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Closing Success
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-grey-60 mb-4 text-base lg:text-lg">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="#" className="footer-link">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Our Offices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-10 flex flex-col items-center justify-between gap-y-6 px-4 py-4 md:flex-row md:gap-y-0 md:px-5 xl:px-28">
        <div className="flex flex-col-reverse items-center gap-y-2.5 md:flex-row md:gap-x-18 lg:gap-x-28">
          <p className="text-sm text-white lg:text-base">
            &copy; 2026 Estatein. All Rights Reserved
          </p>
          <Link to="/terms">
            <p className="text-sm text-white hover:underline lg:text-base">
              Terms & Conditions
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/mr.abrar.mahabub"
            className="bg-grey-08 flex size-12 cursor-pointer items-center justify-center rounded-full"
            target="_blank"
          >
            <img src={Facebook} alt="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrar-mahabub-721ba939b/"
            className="bg-grey-08 flex size-12 cursor-pointer items-center justify-center rounded-full"
            target="_blank"
          >
            <img src={LinkedIn} alt="icon" />
          </a>
          <a
            href="https://x.com/abrar_mahabub"
            className="bg-grey-08 flex size-12 cursor-pointer items-center justify-center rounded-full"
            target="_blank"
          >
            <img src={Twitter} alt="icon" />
          </a>
          <a
            href="https://www.youtube.com/"
            className="bg-grey-08 flex size-12 cursor-pointer items-center justify-center rounded-full"
            target="_blank"
          >
            <img src={Youtube} alt="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
