import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <div className="bg-grey-10 border-grey-08 fixed top-0 left-0 z-50 w-full border-b-2">
      <div className="px-4 py-3 md:px-5 xl:px-28 xl:py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                className="h-[30px] w-[93px] cursor-pointer md:h-[34px] md:w-[113px] xl:h-11 xl:w-40"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          {/* This navigation for mobile layout  */}
          <div
            className={`bg-grey-08 border-grey-10 absolute left-0 h-auto w-full border-t-2 border-b-2 px-4 py-5 transition-all duration-200 md:hidden md:px-5 md:py-6 ${isNavOpen ? "-top-96" : "top-13"}`}
          >
            <div>
              <nav>
                <ul className="flex flex-col gap-y-2.5">
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-sm text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-sm text-white"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-sm text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-sm text-white"
                      }
                      to="/about-us"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-sm text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-sm text-white"
                      }
                      to="/properties"
                    >
                      Properties
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-sm text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-sm text-white"
                      }
                      to="/services"
                    >
                      Our services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-sm text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-sm text-white"
                      }
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* This navigation for desktop  */}
          <div className="hidden md:block">
            <div>
              <nav>
                <ul className="flex items-center gap-6">
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-base text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-base text-white"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-base text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-base text-white"
                      }
                      to="/about-us"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-base text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-base text-white"
                      }
                      to="/properties"
                    >
                      Properties
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-base text-white"
                          : "inline-block rounded-md border border-transparent bg-transparent px-4 py-2 text-base text-white"
                      }
                      to="/services"
                    >
                      Our services
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div>
            <div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="hover:bg-grey-15 bg-grey-15/70 flex size-9 cursor-pointer items-center justify-center rounded-full text-white outline-0 transition-colors"
                >
                  {isNavOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                      />
                    </svg>
                  ) : (
                    <X className="size-6" />
                  )}
                </button>
              </div>

              <div className="hidden md:block">
                <ul>
                  <li>
                    <NavLink
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      className="border-grey-15 bg-grey-08 inline-block rounded-md border px-4 py-2 text-base text-white"
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
