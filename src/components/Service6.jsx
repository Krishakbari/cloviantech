import React from "react";
import { ArrowRight } from "lucide-react";

const Service6 = () => {
  const jobs = [
    {
      id: 1,
      title: "Product Manager",
      type: "Full Time",
      mode: "On site",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
      link: "#",
    },
    {
      id: 2,
      title: "Human Resources",
      type: "Full Time",
      mode: "On site",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
      link: "#",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Full Time",
      mode: "Remote",
      description:
        "FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 mt-8 pb-16 px-6 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
          Careers
        </span>
        <h2 className="text-3xl md:text-4xl  text-gray-900 mt-4 font-inter">
          New job opportunities
        </h2>
        <p className="text-gray-600 mt-4 ">
          Browse through vacancies, internships and job postings at FutureSphere
        </p>
      </div>

      {/* Job Listings */}
      <div className="sm:mt-12 mt-4 space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between p-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {job.type} -{" "}
                <span
                  className={`${
                    job.mode === "Remote"
                      ? "text-blue-600"
                      : "text-green-600"
                  } font-medium`}
                >
                  {job.mode}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">{job.description}</p>
            </div>
            <a
              href={job.link}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service6;
