import MagicIcon from "../assets/icons/magic-star.svg";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handling form inputs and submission can be added here
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Real Estate Agent");
  const [referralSource, setReferralSource] = useState("Real Estate Agent");
  const [message, setMessage] = useState("");

  //input references can be added here if needed
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  //email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

  // Handle form submission and validation here if needed
  const handedFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here

    // First Name validation
    if (firstName.trim() === "" || firstName.length < 2) {
      toast.error(
        "First name is required and must be at least 2 characters long.",
      );
      return;
    }
    // Last Name validation
    if (lastName.trim() === "" || lastName.length < 2) {
      toast.error(
        "Last name is required and must be at least 2 characters long.",
      );
      return;
    }
    // Email validation
    if (email.trim() === "" || !emailRegex.test(email)) {
      toast.error("Email is required and must be a valid email address.");
      return;
    }

    // Phone validation
    if (phone.trim() === "" || phone.length < 10) {
      toast.error(
        "Phone number is required and must be at least 10 digits long.",
      );
      return;
    }
    // Inquiry Type validation
    if (inquiryType.trim() === "") {
      toast.error("Inquiry type is required.");
      return;
    }
    // Referral Source validation
    if (referralSource.trim() === "") {
      toast.error("Referral source is required.");
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
      inquiryType,
      referralSource,
      message,
      agreedToTerms: checked,
    });

    toast.success("Form submitted successfully!");

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setInquiryType("Real Estate Agent");
    setReferralSource("Real Estate Agent");
    setMessage("");
    setChecked(false);
  };

  //Moving next input on enter key press can be added here if needed
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();

      nextRef?.current?.focus();
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center gap-1.5">
          <img className="size-5 lg:size-6" src={MagicIcon} alt="icon" />
          <img className="size-3 lg:size-4" src={MagicIcon} alt="icon" />
          <img className="size-1.5 lg:size-2.5" src={MagicIcon} alt="icon" />
        </div>
        <div>
          <h1 className="mt-2 text-2xl font-medium text-white lg:text-3xl">
            Let's Connect
          </h1>
          <div>
            <p className="text-grey-60 mt-4 text-sm lg:text-base xl:text-lg">
              We're excited to connect with you and learn more about your real
              estate goals. Use the form below to get in touch with Estatein.
              Whether you're a prospective client, partner, or simply curious
              about our services, we're here to answer your questions and
              provide the assistance you need.
            </p>
          </div>
        </div>
      </div>

      <div className="border-grey-15 my-12 rounded-md border p-4 md:px-5 md:py-6 lg:px-14 lg:py-12 xl:px-24 xl:py-16">
        <div>
          <form noValidate onSubmit={handedFormSubmit}>
            <div className="grid w-full grid-cols-1 grid-rows-[repeat(6,1fr)_2fr] gap-y-5 p-4 md:grid-cols-2 md:grid-rows-[repeat(3,1fr)_2fr] md:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 lg:md:grid-rows-[repeat(2,1fr)_2fr]">
              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  First Name
                </p>
                <input
                  className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                  type="text"
                  ref={firstNameRef}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                  onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  Last Name
                </p>
                <input
                  className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                  type="text"
                  ref={lastNameRef}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, emailRef)}
                  placeholder="Enter Last Name"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  Email
                </p>
                <input
                  className="border-grey-15 bg-grey-10 mt-2 w-full rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                  type="email"
                  value={email}
                  ref={emailRef}
                  required={false}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                  placeholder="Enter your Email"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  Phone
                </p>
                <input
                  className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 lg:mt-4 lg:py-3 lg:text-base"
                  type="number"
                  value={phone}
                  ref={phoneRef}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, messageRef)}
                  placeholder="Enter Phone Number"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  Inquiry Type
                </p>
                <div className="relative">
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                  >
                    <option
                      className="text-sm lg:text-base"
                      value="Real Estate Agent"
                    >
                      Real Estate Agent
                    </option>
                    <option
                      className="text-sm lg:text-base"
                      value="Friend or Family"
                    >
                      Friend or Family
                    </option>
                    <option
                      className="text-sm lg:text-base"
                      value="Online Property Portal"
                    >
                      Online Property Portal
                    </option>
                  </select>
                  <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white md:text-base">
                  How Did You Hear About Us?
                </p>
                <div className="relative">
                  <select
                    value={referralSource}
                    onChange={(e) => setReferralSource(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border-grey-15 bg-grey-10 mt-2 w-full appearance-none rounded-md border px-4 py-2.5 text-sm text-white outline-0 md:text-base lg:mt-4 lg:py-3"
                  >
                    <option
                      className="text-sm lg:text-base"
                      value="Real Estate Agent"
                    >
                      Real Estate Agent
                    </option>
                    <option
                      className="text-sm lg:text-base"
                      value="Friend or Family"
                    >
                      Friend or Family
                    </option>
                    <option
                      className="text-sm lg:text-base"
                      value="Online Property Portal"
                    >
                      Online Property Portal
                    </option>
                  </select>
                  <ChevronDown className="text-grey-60 absolute top-1/2 right-3 size-5 -translate-y-1/3 md:size-6 md:-translate-y-1/4" />
                </div>
              </div>

              <div className="flex h-full flex-col md:col-span-2 lg:col-span-3">
                <p className="text-sm font-medium text-white md:text-base">
                  Message
                </p>
                <textarea
                  placeholder="Message"
                  value={message}
                  ref={messageRef}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-grey-15 bg-grey-10 mt-2 flex-1 resize-none rounded-md border px-4 py-2 text-sm text-white outline-0 lg:mt-4 lg:text-base"
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="mt-4 mb-8 flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between lg:mt-12">
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
                className="bg-purple-60 hover:bg-purple-60/90 mt-3 w-full cursor-pointer rounded-md px-5 py-2.5 text-sm whitespace-nowrap text-white transition md:mt-0 md:w-fit lg:mt-0 lg:text-base"
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
