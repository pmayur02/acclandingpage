"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = {
  "About the Course": [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question:
        "What domain specializations are available?",
      answer:
        "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],

  "About the Delivery": [
    {
      question:
        "Can the courses be customized for specific industries or teams?",
      answer:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
    },
    {
      question:
        "Who are the instructors for these programs?",
      answer:
        "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      question:
        "What formats are the programs delivered in?",
      answer:
        "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],

  "Miscellaneous": [
    {
      question:
        "What is the ideal team size for corporate training?",
      answer:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      question:
        "How do we get started with Accredian?",
      answer:
        "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};


const categories = Object.keys(faqData);


const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("About the Course");
  const [activeIndex, setActiveIndex] = useState(null);


  const currentFaqs = faqData[activeCategory];


  return (
    <section
      id="faq"
      className="w-full flex justify-center mt-16 sm:mt-16 md:py-12 px-4 xl:px-12"
    >
      <div className="w-full max-w-[85rem]">

        {/* Heading */}
        <div>
          <h2 className="text-2xl mx-1 md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked{" "}
            <span className="text-blue-600">
              Questions
            </span>
          </h2>
        </div>


        <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-12">


          {/* Categories */}
          <div className="w-full md:flex-[0.3]">
            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-6 overflow-x-auto py-2 md:px-4">

              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`w-full max-w-[200px] rounded-md px-2 py-4 text-center cursor-pointer border transition
                    ${
                      activeCategory === category
                        ? "bg-white shadow-lg text-blue-600 border-blue-600"
                        : "border-gray-300 text-gray-500"
                    }`}
                >
                  <h1 className="text-sm lg:text-lg font-semibold whitespace-nowrap">
                    {category}
                  </h1>
                </div>
              ))}

            </div>
          </div>



          {/* FAQ Accordion */}
          <div className="w-full md:flex-[0.7] md:px-4 flex flex-col gap-4">

            {currentFaqs.map((faq, index) => (

              <div
                key={index}
                className="border rounded-lg shadow-sm bg-white"
              >

                <button
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index ? null : index
                    )
                  }
                  className="flex items-center justify-between w-full px-4 py-4 text-left"
                >

                  <h3 className="text-lg font-semibold text-black">
                    {faq.question}
                  </h3>


                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>


                {activeIndex === index && (
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>

            ))}

          </div>


        </div>


        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Enquire Now
          </button>
        </div>


      </div>
    </section>
  );
};


export default FAQ;