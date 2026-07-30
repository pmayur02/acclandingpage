"use client";
import { Headphones, ArrowRight } from "lucide-react";
import { useForm } from "../context/FormContext";

const SupportSection = () => {
  const { setShowForm } = useForm();
  return (
    <section
      id="supportSection"
      className="w-full mt-16 sm:mt-24 px-4 xl:px-12 flex justify-center"
    >
      <div className="w-full max-w-7xl bg-blue-600 rounded-xl border border-blue-700 px-6 md:px-12 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* Icon */}
          <div className="w-20 h-20 rounded-xl bg-white/20 p-2">
            <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
              <Headphones className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="hidden sm:block mt-2 text-base md:text-lg text-blue-100">
              Get Expert Guidance for Your Team’s Success!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button onClick={() => setShowForm(true)} className="w-full max-w-[220px] bg-white text-blue-600 font-semibold text-lg rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};

export default SupportSection;