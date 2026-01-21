import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./ScrollTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropertyCard from "./cards/PropertyCard.jsx";
import RatingCard from "./cards/RatingCard.jsx";
import Questions from "./cards/Questions.jsx";
import Image1 from "./assets/images/Image-1.jpg";
import Image2 from "./assets/images/Image-2.svg";
import Image3 from "./assets/images/Image-3.svg";
import Image4 from "./assets/images/Image-4.jpg";
import Image5 from "./assets/images/Image-5.jpg";
import Image6 from "./assets/images/Image-6.jpg";
import Image7 from "./assets/images/Image-7.jpg";
import Image8 from "./assets/images/Image-8.jpg";
import Image9 from "./assets/images/Image-9.jpg";
import Image10 from "./assets/images/Image-10.jpg";
import Image11 from "./assets/images/Image-11.jpg";
import Image12 from "./assets/images/Image-12.jpg";
import { useEffect, useState } from "react";
import Loading from "./reuseable-components/Loader.jsx";

const NavbarLazy = lazy(() => import("./components/Navbar.jsx"));
const FooterLazy = lazy(() => import("./components/Footer.jsx"));
const HomeLazy = lazy(() => import("./pages/Home.jsx"));
const AboutLazy = lazy(() => import("./pages/AboutUs.jsx"));
const PropertiesLazy = lazy(() => import("./pages/Properties.jsx"));
const PropertyDetailsLazy = lazy(() => import("./pages/PropertyDetails.jsx"));
const ServicesLazy = lazy(() => import("./pages/Services.jsx"));
const ContactLazy = lazy(() => import("./pages/Contact.jsx"));
const NotFoundLazy = lazy(() => import("./pages/NotFound.jsx"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  });

  // Multiple section datalist for reuseable component
  const multipleSectionData = [
    {
      id: 1,
      heading: "Featured Properties",
      subHeading:
        "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.",
      data: [
        {
          id: 1,
          title: "Metropolitan Haven",
          description:
            "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
          bedrooms: 4,
          bathrooms: 3,
          type: "Apartment",
          price: 550000,
          image: Image1,
          location: "toronto_canada",
          area: 500,
          buildYear: 2018,
          anotherImages: [
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
            Image7,
            Image8,
          ],
        },
        {
          id: 2,
          title: "Urban Luxury Loft",
          description:
            "Modern loft-style apartment located in the heart of downtown.",
          bedrooms: 3,
          bathrooms: 2,
          type: "Luxury Apartment",
          price: 420000,
          image: Image2,
          location: "london_uk",
          area: 580,
          buildYear: 2020,
          anotherImages: [
            Image2,
            Image7,
            Image3,
            Image5,
            Image4,
            Image6,
            Image1,
            Image8,
          ],
        },
        {
          id: 3,
          title: "Sunset Paradise",
          description:
            "Beautiful villa with an open terrace and stunning sunset views.",
          bedrooms: 5,
          bathrooms: 4,
          type: "Studio Apartment",
          price: 780000,
          image: Image3,
          location: "sydney_australia",
          area: 3025,
          Image3,
          buildYear: 2015,
          anotherImages: [
            Image6,
            Image4,
            Image2,
            Image5,
            Image1,
            Image8,
            Image7,
          ],
        },
        {
          id: 4,
          title: "Greenwood Residency",
          description:
            "Peaceful residential home surrounded by greenery and nature.",
          bedrooms: 4,
          bathrooms: 3,
          type: "Duplex Home",
          price: 610000,
          image: Image4,
          location: "san_francisco_usa",
          area: 2070,
          buildYear: 2018,
          anotherImages: [
            Image4,
            Image1,
            Image7,
            Image8,
            Image5,
            Image6,
            Image2,
            Image3,
          ],
        },
        {
          id: 5,
          title: "Skyline Heights",
          description: "High-rise apartment with a breathtaking skyline view.",
          bedrooms: 2,
          bathrooms: 2,
          type: "Penthouse",
          price: 390000,
          image: Image5,
          location: "new_york_usa",
          area: 1500,
          buildYear: 2020,
          anotherImages: [
            Image5,
            Image6,
            Image1,
            Image8,
            Image4,
            Image7,
            Image2,
            Image3,
          ],
        },
        {
          id: 6,
          title: "Ocean Breeze Villa",
          description:
            "Luxury beachfront villa with private balcony and pool access.",
          bedrooms: 6,
          bathrooms: 5,
          type: "Villa",
          price: 1200000,
          image: Image6,
          location: "miami_usa",
          area: 2200,
          buildYear: 2019,
          anotherImages: [
            Image6,
            Image7,
            Image5,
            Image2,
            Image4,
            Image8,
            Image3,
            Image1,
          ],
        },
        {
          id: 7,
          title: "Downtown Comfort",
          description: "Compact yet stylish apartment perfect for city living.",
          bedrooms: 2,
          bathrooms: 1,
          type: "Townhouse",
          price: 310000,
          image: Image7,
          location: "london_uk",
          area: 1700,
          buildYear: 2021,
          anotherImages: [
            Image7,
            Image4,
            Image2,
            Image3,
            Image6,
            Image8,
            Image1,
            Image5,
          ],
        },
        {
          id: 8,
          title: "Royal Estate",
          description: "Spacious estate home with premium interior finishing.",
          bedrooms: 7,
          bathrooms: 6,
          type: "Warehouse",
          price: 1500000,
          image: Image8,
          location: "los_angeles_usa",
          area: 3500,
          buildYear: 2018,
          anotherImages: [
            Image8,
            Image2,
            Image1,
            Image6,
            Image7,
            Image3,
            Image4,
            Image5,
          ],
        },
        {
          id: 9,
          title: "Minimal Studio",
          description:
            "Minimalist studio apartment ideal for young professionals.",
          bedrooms: 1,
          bathrooms: 1,
          type: "Farmhouse",
          price: 210000,
          image: Image9,
          location: "chicago_usa",
          area: 900,
          buildYear: 2022,
          anotherImages: [
            Image8,
            Image2,
            Image7,
            Image1,
            Image8,
            Image5,
            Image3,
            Image4,
          ],
        },
        {
          id: 10,
          title: "Hilltop Retreat",
          description: "Cozy hilltop home with fresh air and scenic views.",
          bedrooms: 3,
          bathrooms: 2,
          type: "Office Space",
          price: 480000,
          image: Image10,
          location: "vancouver_canada",
          area: 1600,
          buildYear: 2017,
          anotherImages: [
            Image1,
            Image5,
            Image6,
            Image8,
            Image4,
            Image2,
            Image7,
            Image3,
          ],
        },
        {
          id: 11,
          title: "Palm Residency",
          description:
            "Modern residence with palm garden and open living space.",
          bedrooms: 4,
          bathrooms: 3,
          type: "Villa",
          price: 670000,
          image: Image11,
          location: "manchester_uk",
          area: 1850,
          buildYear: 2019,
          anotherImages: [
            Image4,
            Image1,
            Image3,
            Image5,
            Image2,
            Image8,
            Image6,
            Image7,
          ],
        },
        {
          id: 12,
          title: "Elite Penthouse",
          description:
            "Exclusive penthouse with premium amenities and privacy.",
          bedrooms: 5,
          bathrooms: 4,
          type: "Single Family Home",
          price: 980000,
          image: Image12,
          location: "dubai_uae",
          area: 4000,
          buildYear: 2021,
          anotherImages: [
            Image6,
            Image2,
            Image7,
            Image3,
            Image4,
            Image8,
            Image5,
            Image1,
          ],
        },
      ],
      buttonText: "View All Properties",
      renderCard: (item, idx) => <PropertyCard key={idx} property={item} />,
      pathForView: "/properties",
    },
    {
      id: 2,
      heading: "What Our Clients Say",
      subHeading:
        "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
      data: [
        {
          id: 1,
          title: "Exceptional Service!",
          description:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
          fullName: "Wade Warren",
          profile_img: "https://i.pravatar.cc/150?img=12",
          address: "USA, California",
          ratings: "4.5",
        },
        {
          id: 2,
          title: "Smooth & Stress-Free Process",
          description:
            "Estatein made the entire buying process incredibly smooth. From property tours to final paperwork, everything was handled with care and clarity.",
          fullName: "Sophia Martinez",
          profile_img: "https://i.pravatar.cc/150?img=32",
          address: "Canada, Toronto",
          ratings: "4.8",
        },
        {
          id: 3,
          title: "Professional & Reliable Team",
          description:
            "The team was always available and answered every question patiently. Their market knowledge helped us make the right decision confidently.",
          fullName: "James Anderson",
          profile_img: "https://i.pravatar.cc/150?img=45",
          address: "UK, London",
          ratings: "4.6",
        },
        {
          id: 4,
          title: "Highly Impressed!",
          description:
            "I was impressed by how organized and transparent Estatein was throughout the process. No hidden surprises, just honest service.",
          fullName: "Emily Johnson",
          profile_img: "https://i.pravatar.cc/150?img=5",
          address: "Australia, Sydney",
          ratings: "4.7",
        },
        {
          id: 5,
          title: "Excellent Customer Support",
          description:
            "Their customer support was top-notch. They guided me step by step and made sure I felt confident at every stage.",
          fullName: "Daniel Lee",
          profile_img: "https://i.pravatar.cc/150?img=18",
          address: "Singapore",
          ratings: "4.9",
        },
        {
          id: 6,
          title: "Great Experience Overall",
          description:
            "From the first call to closing the deal, Estatein delivered an excellent experience. The team truly cares about their clients.",
          fullName: "Olivia Brown",
          profile_img: "https://i.pravatar.cc/150?img=29",
          address: "USA, New York",
          ratings: "4.5",
        },
        {
          id: 7,
          title: "Trustworthy & Efficient",
          description:
            "Estatein proved to be both trustworthy and efficient. They respected my time and provided only relevant property options.",
          fullName: "Michael Carter",
          profile_img: "https://i.pravatar.cc/150?img=51",
          address: "Germany, Berlin",
          ratings: "4.6",
        },
        {
          id: 8,
          title: "Outstanding Attention to Detail",
          description:
            "What stood out the most was their attention to detail. Every document and requirement was perfectly managed.",
          fullName: "Ava Wilson",
          profile_img: "https://i.pravatar.cc/150?img=47",
          address: "Netherlands, Amsterdam",
          ratings: "4.8",
        },
        {
          id: 9,
          title: "Made Home Buying Easy",
          description:
            "Buying a home felt overwhelming at first, but Estatein simplified everything and made the journey enjoyable.",
          fullName: "Ethan Miller",
          profile_img: "https://i.pravatar.cc/150?img=61",
          address: "USA, Texas",
          ratings: "4.4",
        },
        {
          id: 10,
          title: "Exceeded Expectations",
          description:
            "Estatein exceeded my expectations with their professionalism and fast response time. I would gladly work with them again.",
          fullName: "Isabella Taylor",
          profile_img: "https://i.pravatar.cc/150?img=24",
          address: "UAE, Dubai",
          ratings: "4.7",
        },
        {
          id: 11,
          title: "Exceptional Market Knowledge",
          description:
            "Their understanding of the real estate market is impressive. They helped me secure a great deal within my budget.",
          fullName: "Noah Williams",
          profile_img: "https://i.pravatar.cc/150?img=67",
          address: "USA, Florida",
          ratings: "4.6",
        },
      ],
      buttonText: "View All Testimonials",
      renderCard: (item, idx) => <RatingCard key={idx} review={item} />,
      pathForView: "/all-testimonial",
    },
    {
      id: 3,
      heading: "Frequently Asked Questions",
      subHeading:
        "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
      data: [
        {
          id: 1,
          question: "How do I search for properties on Estatein?",
          details:
            "Use our advanced search filters to browse properties by location, price range, property type, and other preferences.",
        },
        {
          id: 2,
          question: "Can I save properties to view later?",
          details:
            "Yes, you can save your favorite properties by clicking the save icon and access them anytime from your account.",
        },
        {
          id: 3,
          question: "How do I schedule a property visit?",
          details:
            "You can request a property visit directly from the listing page by selecting your preferred date and time.",
        },
        {
          id: 4,
          question: "Is Estatein free to use?",
          details:
            "Browsing properties on Estatein is completely free. Some premium services may require additional charges.",
        },
        {
          id: 5,
          question: "How do I contact a property agent?",
          details:
            "Each property listing includes agent contact details, allowing you to connect directly via call or message.",
        },
        {
          id: 6,
          question: "Can I list my own property on Estatein?",
          details:
            "Yes, property owners can list their properties by creating an account and submitting the required details.",
        },
        {
          id: 7,
          question: "How does Estatein verify property listings?",
          details:
            "We review and verify listings to ensure accuracy, authenticity, and up-to-date information for users.",
        },
        {
          id: 8,
          question: "What types of properties are available on Estatein?",
          details:
            "Estatein offers apartments, villas, commercial spaces, and land listings to suit different needs.",
        },
      ],
      buttonText: "View All FAQ's",
      renderCard: (item, idx) => <Questions key={idx} question={item} />,
      pathForView: "/all-faq",
    },
  ];

  return isLoading ? (
    <div className="flex min-h-screen items-center justify-center bg-[#121212]">
      <Loading />
    </div>
  ) : (
    <div className="min-h-screen bg-[#121212]">
      {/* <ScrollToTop /> */}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark" / "colored"
      />

      <ScrollToTop />
      <NavbarLazy />
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={<HomeLazy multipleSectionData={multipleSectionData} />}
            />
            <Route path="/about-us" element={<AboutLazy />} />
            <Route
              path="/properties"
              element={
                <PropertiesLazy properties={multipleSectionData[0].data} />
              }
            />
            <Route
              path="/property/details/:id"
              element={
                <PropertyDetailsLazy
                  propertyDetailsArray={multipleSectionData[0].data}
                  questionData={multipleSectionData[2]}
                />
              }
            />
            <Route path="/services" element={<ServicesLazy />} />
            <Route path="/contact-us" element={<ContactLazy />} />
            <Route path="*" element={<NotFoundLazy />} />
          </Routes>
        </Suspense>
      </div>
      <FooterLazy />
    </div>
  );
}

export default App;
