import { useState } from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BookNowForm = () => {
  // from stats variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [budget, setBudget] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // handel form submit here
  const handelFormSubmit = (e) => {
    e.preventDefault();
    // form submission logic goes here
    //email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // First Name validation
    if (firstName.trim() === "" || firstName.length < 2) {
      toast.error("First name is required");
      return;
    }

    // Last Name validation
    if (lastName.trim() === "" || lastName.length < 2) {
      toast.error("Last name is required.");
      return;
    }

    // Email validation
    if (email.trim() === "" || !emailRegex.test(email)) {
      toast.error("Please enter a vail email.");
      return;
    }

    // Phone validation
    if (phone.trim() === "" || phone.length < 10) {
      toast.error("Phone number is required.");
      return;
    }

    // Location validation
    if (location.trim() === "") {
      toast.error("Select your preferred location.");
      return;
    }
    // Property Type validation
    if (type.trim() === "") {
      toast.error("Select your property type.");
      return;
    }
    // Bathrooms validation
    if (bathrooms.trim() === "") {
      toast.error("Select number of bathrooms you want.");
      return;
    }
    // Bedrooms validation
    if (bedrooms.trim() === "") {
      toast.error("Select number of bedrooms you want.");
      return;
    }

    // Budget validation
    if (budget.trim() === "") {
      toast.error("Please select your budget.");
      return;
    }

    // Preferred Contact Method validation
    if (contactNum.trim() === "" && contactEmail.trim() === "") {
      toast.error("Please provide at least one preferred contact method.");
      return;
    }

    // Message validation
    if (message.trim() === "" || message.length < 10) {
      toast.error(
        "Message is required and must be at least 10 characters long.",
      );
      return;
    }
    // Terms agreement validation
    if (!checked) {
      toast.error("You must agree to the Terms of Use and Privacy Policy.");
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      phone,
      location,
      type,
      bathrooms,
      budget,
      contactNum,
      contactEmail,
      message,
      checked,
    });
    toast.success("Form submitted successfully!");

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setType("");
    setBathrooms("");
    setBedrooms("");
    setBudget("");
    setContactNum("");
    setContactEmail("");
    setMessage("");
    setChecked(false);
  };

  const labelStyle = {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    fontSize: "16px",
    color: hovered ? "#666" : "#333",
    transition: "color 0.3s",
  };

  const checkmarkStyle = {
    border: `2px solid ${checked ? "#333" : hovered ? "#666" : "#333"}`,
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    backgroundColor: checked ? "#333" : hovered ? "transparent" : "transparent",
    transform: checked
      ? "scale(1.1) rotateZ(360deg) rotateY(360deg)"
      : hovered
        ? "scale(1.05)"
        : "scale(1)",
    transition: "background-color 1.3s, border-color 1.3s, transform 0.3s",
  };

  const tickStyle = {
    color: checked ? "#fff" : "transparent",
    transition: "color 0.3s",
  };

  return (
    <div>
      <div className="border-grey-15 rounded-2xl border p-4 md:p-5 lg:p-18">
        <form onSubmit={handelFormSubmit}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-white md:text-base">
                First Name
              </p>
              <input
                name="firstName"
                className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                Last Name
              </p>
              <input
                name="lastName"
                className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                Email
              </p>
              <input
                autoComplete="off"
                name="email"
                className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                Phone
              </p>
              <input
                name="phone"
                className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                Preferred Location
              </p>
              <div className="relative">
                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Location
                  </option>

                  <option value="new_york_usa" className="text-sm lg:text-base">
                    New York, USA
                  </option>
                  <option
                    value="los_angeles_usa"
                    className="text-sm lg:text-base"
                  >
                    Los Angeles, USA
                  </option>
                  <option
                    value="san_francisco_usa"
                    className="text-sm lg:text-base"
                  >
                    San Francisco, USA
                  </option>
                  <option value="chicago_usa" className="text-sm lg:text-base">
                    Chicago, USA
                  </option>
                  <option value="miami_usa" className="text-sm lg:text-base">
                    Miami, USA
                  </option>

                  <option
                    value="toronto_canada"
                    className="text-sm lg:text-base"
                  >
                    Toronto, Canada
                  </option>
                  <option
                    value="vancouver_canada"
                    className="text-sm lg:text-base"
                  >
                    Vancouver, Canada
                  </option>

                  <option value="london_uk" className="text-sm lg:text-base">
                    London, UK
                  </option>
                  <option
                    value="manchester_uk"
                    className="text-sm lg:text-base"
                  >
                    Manchester, UK
                  </option>

                  <option value="dubai_uae" className="text-sm lg:text-base">
                    Dubai, UAE
                  </option>
                  <option
                    value="abu_dhabi_uae"
                    className="text-sm lg:text-base"
                  >
                    Abu Dhabi, UAE
                  </option>

                  <option
                    value="sydney_australia"
                    className="text-sm lg:text-base"
                  >
                    Sydney, Australia
                  </option>
                  <option
                    value="melbourne_australia"
                    className="text-sm lg:text-base"
                  >
                    Melbourne, Australia
                  </option>

                  <option
                    value="berlin_germany"
                    className="text-sm lg:text-base"
                  >
                    Berlin, Germany
                  </option>
                  <option value="paris_france" className="text-sm lg:text-base">
                    Paris, France
                  </option>

                  <option value="singapore" className="text-sm lg:text-base">
                    Singapore
                  </option>

                  <option value="dhaka_bd" className="text-sm lg:text-base">
                    Dhaka, Bangladesh
                  </option>
                  <option
                    value="chittagong_bd"
                    className="text-sm lg:text-base"
                  >
                    Chittagong, Bangladesh
                  </option>
                  <option
                    value="gulshan_dhaka"
                    className="text-sm lg:text-base"
                  >
                    Gulshan, Dhaka
                  </option>
                  <option value="banani_dhaka" className="text-sm lg:text-base">
                    Banani, Dhaka
                  </option>
                </select>

                <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                Property Type
              </p>
              <div className="relative">
                <select
                  name="propertyType"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Property Type
                  </option>

                  <option value="apartment" className="text-sm lg:text-base">
                    Apartment
                  </option>
                  <option
                    value="luxury_apartment"
                    className="text-sm lg:text-base"
                  >
                    Luxury Apartment
                  </option>
                  <option
                    value="studio_apartment"
                    className="text-sm lg:text-base"
                  >
                    Studio Apartment
                  </option>
                  <option value="duplex_home" className="text-sm lg:text-base">
                    Duplex Home
                  </option>
                  <option value="penthouse" className="text-sm lg:text-base">
                    Penthouse
                  </option>
                  <option value="villa" className="text-sm lg:text-base">
                    Villa
                  </option>
                  <option value="townhouse" className="text-sm lg:text-base">
                    Townhouse
                  </option>
                  <option
                    value="single_family_home"
                    className="text-sm lg:text-base"
                  >
                    Single Family Home
                  </option>

                  <option
                    value="commercial_property"
                    className="text-sm lg:text-base"
                  >
                    Commercial Property
                  </option>
                  <option value="office_space" className="text-sm lg:text-base">
                    Office Space
                  </option>
                  <option value="retail_shop" className="text-sm lg:text-base">
                    Retail Shop
                  </option>
                  <option value="warehouse" className="text-sm lg:text-base">
                    Warehouse
                  </option>

                  <option value="land_plot" className="text-sm lg:text-base">
                    Land / Plot
                  </option>
                  <option value="farmhouse" className="text-sm lg:text-base">
                    Farmhouse
                  </option>
                  <option
                    value="resort_property"
                    className="text-sm lg:text-base"
                  >
                    Resort Property
                  </option>
                </select>
                <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                No. of Bathrooms
              </p>
              <div className="relative">
                <select
                  name="bathrooms"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select number of Bathrooms
                  </option>
                  <option className="text-sm lg:text-base" value="One">
                    One
                  </option>
                  <option className="text-sm lg:text-base" value="Two">
                    Two
                  </option>

                  <option className="text-sm lg:text-base" value="Three">
                    Three
                  </option>
                </select>
                <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-white md:text-base">
                No. of Bedrooms
              </p>
              <div className="relative">
                <select
                  name="bedrooms"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select number of Bedrooms
                  </option>
                  <option className="text-sm lg:text-base" value="One">
                    One
                  </option>
                  <option className="text-sm lg:text-base" value="Two">
                    Two
                  </option>

                  <option className="text-sm lg:text-base" value="Three">
                    Three
                  </option>
                  <option className="text-sm lg:text-base" value="Four">
                    Four
                  </option>
                </select>
                <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
              </div>
            </div>

            {/* input groupe 2  */}
            <div className="col-span-1 xl:col-span-2">
              <p className="text-sm font-medium text-white md:text-base">
                Budget
              </p>
              <div className="relative">
                <select
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                >
                  <option value="" className="text-sm lg:text-base">
                    Select Budget
                  </option>

                  <option value="0-50000" className="text-sm lg:text-base">
                    Under $50,000
                  </option>
                  <option value="50000-100000" className="text-sm lg:text-base">
                    $50,000 – $100,000
                  </option>
                  <option
                    value="100000-200000"
                    className="text-sm lg:text-base"
                  >
                    $100,000 – $200,000
                  </option>
                  <option
                    value="200000-300000"
                    className="text-sm lg:text-base"
                  >
                    $200,000 – $300,000
                  </option>
                  <option
                    value="300000-500000"
                    className="text-sm lg:text-base"
                  >
                    $300,000 – $500,000
                  </option>

                  <option
                    value="500000-750000"
                    className="text-sm lg:text-base"
                  >
                    $500,000 – $750,000
                  </option>
                  <option
                    value="750000-1000000"
                    className="text-sm lg:text-base"
                  >
                    $750,000 – $1,000,000
                  </option>

                  <option
                    value="1000000-2000000"
                    className="text-sm lg:text-base"
                  >
                    $1,000,000 – $2,000,000
                  </option>
                  <option value="2000000+" className="text-sm lg:text-base">
                    $2,000,000+
                  </option>
                </select>

                <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
              </div>
            </div>

            <div className="col-span-1 xl:col-span-2 xl:flex xl:flex-col xl:gap-2">
              <p className="text-sm font-medium text-white md:text-base">
                Preferred Contact Method
              </p>
              <div className="flex w-full flex-col items-center xl:flex-row xl:gap-8">
                <div className="relative mt-2 w-full">
                  <Phone className="text-grey-60 absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <input
                    value={contactNum}
                    onChange={(e) => setContactNum(e.target.value)}
                    className="border-grey-15 bg-grey-10 w-full rounded-md border px-4 py-2.5 pl-12 text-sm text-white outline-0 lg:py-3 lg:text-base"
                    type="number"
                    placeholder="Enter your Number (Optional)"
                  />
                </div>
                <div className="relative mt-2 w-full xl:mt-1.5">
                  <Mail className="text-grey-60 absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <input
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="border-grey-15 bg-grey-10 w-full rounded-md border px-4 py-2.5 pl-12 text-sm text-white outline-0 lg:py-3 lg:text-base"
                    type="email"
                    placeholder="Enter your E-mail"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 flex h-44 flex-col md:col-span-2 xl:col-span-4">
              <p className="text-sm font-medium text-white md:text-base">
                Message
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="border-grey-15 bg-grey-10 mt-2 flex-1 resize-none rounded-md border px-4 py-2 text-sm text-white outline-0 lg:mt-4 lg:text-base"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 mb-4 flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between lg:mt-12">
            <div className="flex items-center gap-2">
              <label
                style={labelStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  style={{ display: "none" }}
                />
                <span className="size-5" style={checkmarkStyle}>
                  <span className="text-sm" style={tickStyle}>
                    ✓
                  </span>
                </span>
              </label>
              <p className="text-grey-60 text-sm">
                I agree with{" "}
                <Link className="hover:underline" to="/terms">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link className="hover:underline" to="/terms">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="bg-purple-60 hover:bg-purple-60/90 mt-3 w-full cursor-pointer rounded-md border-0 px-5 py-2.5 text-sm whitespace-nowrap text-white outline-0 transition md:mt-0 md:w-fit lg:mt-0 lg:text-base"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
