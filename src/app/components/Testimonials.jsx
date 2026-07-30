"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    company: "ADP",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    review:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: "Bayer",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    review:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: "Reliance",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    review:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full mt-16 sm:mt-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Testimonials from{" "}
          <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
      </div>

      {/* Slider */}
      <div className="w-full px-4 max-w-7xl">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.company} className="h-auto pb-12">
              <div className="bg-white border border-gray-300 rounded-xl p-6 h-full min-h-[250px] flex flex-col">
                <div className="h-16 flex items-center mb-6">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-14 w-14 object-contain"
                  />
                </div>

                <p className="text-gray-600 leading-7">
                  "{item.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;