"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)
import { useForm } from "../context/FormContext";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com/accredianlearn",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/accredianedu/",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/accredianedu",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/accredian_edu",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
  },
];

const Footer = () => {
  const { setShowForm } = useForm();
  return (
    <footer className="mt-12 sm:mt-24 py-10 bg-[#1d1d1d] sm:bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6">

          <div>
            {/* Logo */}
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              className="hidden sm:block w-36"
            />

            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
              alt="Accredian"
              className="block sm:hidden w-36"
            />

            {/* Social */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white sm:text-gray-700 hover:text-blue-600 transition"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-0 text-center">
            <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white rounded-lg px-6 py-2">
              Enquire Now
            </button>

            <p className="text-sm mt-2 text-white sm:text-gray-700">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Middle */}
        <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-gray-700">

          <div>
            <h3 className="text-lg font-semibold text-white sm:text-black">
              Accredian
            </h3>

            <ul className="mt-3 space-y-2 text-white sm:text-gray-700">
              <li>
                <a
                  href="https://accredian.com/About"
                  className="hover:text-blue-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="https://blog.accredian.com/"
                  className="hover:text-blue-600"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="https://accredian.com/whyaccredian"
                  className="hover:text-blue-600"
                >
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white sm:text-black">
              Contact Us
            </h3>

            <p className="mt-3 text-white sm:text-gray-700">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-blue-600"
              >
                enterprise@accredian.com
              </a>
            </p>

            <p className="mt-2 text-white sm:text-gray-700">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 text-center">
          <p className="text-white sm:text-gray-700 text-sm">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;