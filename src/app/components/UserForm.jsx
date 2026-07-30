"use client";

import { X } from "lucide-react";

const UserForm = ({ onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col sm:flex-row overflow-hidden">
      {/* Left Image */}
      <div className="hidden sm:block sm:w-1/2">
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
          alt="Business"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="w-full sm:w-1/2 p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Enquire Now</h2>

          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-black" />
          </button>
        </div>

        <form className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            placeholder="+91 Phone Number"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <select className="w-full border-b-2 border-gray-300 px-2 py-3 bg-white outline-none focus:border-blue-600">
            <option value="">Select Domain</option>
            <option>Leadership</option>
            <option>Tech & Data</option>
            <option>Gen AI</option>
            <option>Fintech</option>
            <option>Operations</option>
            <option>Digital Enterprise</option>
          </select>

          <input
            type="number"
            placeholder="Number of Candidates"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <select className="w-full border-b-2 border-gray-300 px-2 py-3 bg-white outline-none focus:border-blue-600">
            <option value="">Mode of Delivery</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>

          <input
            type="text"
            placeholder="Location (e.g. Gurgaon, Delhi)"
            className="w-full border-b-2 border-gray-300 px-2 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;