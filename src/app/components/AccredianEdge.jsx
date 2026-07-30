import {
  Lightbulb,
  Brain,
  Users,
  ChartColumnIncreasing,
  Settings,
  Globe,
  Banknote,
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase
} from "lucide-react";

const expertise = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: ChartColumnIncreasing },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: Banknote },
];



const courseSegments = [
  {
    title: "Program Specific",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    description:
      "Certificate, Executive, Post Graduate Certificate",
  },
  {
    title: "Industry Specific",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    description:
      "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    title: "Topic Specific",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    description:
      "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    title: "Level Specific",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    description:
      "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

const joinCards = [
  {
    title: "Tech Professionals",
    description:
      "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    description:
      "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    description:
      "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description:
      "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

const AccredianEdge = () => {
  return (
    <section id="accredian-edge" className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-3xl md:text-4xl font-bold text-gray-900">
          The{" "}
          <span className="text-blue-600">
            Accredian Edge
          </span>
        </p>

        <h2 className="mt-2 text-lg md:text-xl text-gray-700">
          Key Aspects of{" "}
          <span className="text-blue-600">
            Our Strategic Training
          </span>
        </h2>
      </div>

      {/* Image */}
      <div className="p-4 flex justify-center">
        <img
          src="/accredian-edge-usp-v3.svg"
          alt="Accredian Edge"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Domain Expertise */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="text-blue-600">
              Domain Expertise
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            <span className="text-blue-600">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {expertise.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="p-3 w-[45%] sm:w-[30%] flex sm:flex-col justify-center items-center bg-white border border-gray-200 rounded-xl shadow-lg"
            >
              <Icon className="text-blue-600 w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2" />

              <h3 className="text-xs sm:text-lg font-semibold text-center text-gray-900">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Course Segmentation */}
      <div className="mt-16 text-center">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Tailored{" "}
            <span className="text-blue-600">
              Course Segmentation
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Explore{" "}
            <span className="text-blue-600">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-6">
          {courseSegments.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <h4 className="text-2xl font-semibold text-blue-600 px-6 mt-4">
                {course.title}
              </h4>

              <p className="text-gray-600 hidden sm:block mt-2 text-sm px-6 pb-6">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Should Join Section */}
<div className="mt-12 sm:mt-28 mx-0 lg:mx-10 bg-blue-600 sm:rounded-lg flex flex-col md:flex-row overflow-hidden">

  {/* Left Content */}
  <div className="md:w-1/2 pt-12 md:pl-6 px-6 text-white flex flex-col justify-between">
    <div>
      <h4 className="text-lg sm:text-xl font-medium">
        Who Should Join?
      </h4>

      <h1 className="text-2xl md:text-[40px] leading-[39px] capitalize mt-2 font-semibold">
        Strategic Skill Enhancement
      </h1>
    </div>

    <div className="w-[300px] hidden md:block mt-8">
      <img
        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png"
        alt="Human Illustration"
        className="w-full"
      />
    </div>
  </div>


  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 py-12 px-6 text-white gap-10">
    {joinCards.map((item) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="flex gap-4 sm:gap-2 flex-row sm:flex-col"
        >
          <Icon
            className="w-10 h-10 sm:w-14 sm:h-14 mb-2"
            strokeWidth={2}
          />

          <div>
            <h2 className="text-[16px] sm:text-[22px] font-semibold">
              {item.title}
            </h2>

            <p className="text-sm sm:text-md text-gray-200 mt-1">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>

</div>
    </section>
  );
};

export default AccredianEdge;