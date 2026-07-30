import React from "react";

const stats = [
  {
    number: "10K+",
    title: "Professionals trained",
    description: "for exceptional career success",
  },
  {
    number: "200+",
    title: "Sessions delivered",
    description: "with unmatched learning excellence",
  },
  {
    number: "5K+",
    title: "Active learners",
    description: "engaged in dynamic courses",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Track <span className="text-blue-600">Record</span>
        </p>

        <h2 className="mt-2">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 text-center shadow-[0_0_20px_rgba(0,0,0,0.12)] hover:shadow-[0_0_25px_rgba(0,0,0,0.18)] transition"
          >
            <h3 className="text-5xl font-bold text-blue-600">
              {stat.number}
            </h3>

            <p className="text-xl font-semibold text-gray-900 mt-4">
              {stat.title}
            </p>

            <p className="text-gray-600 mt-2">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;