import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-semibold text-blue-600">
              Software Development
            </h3>
            <p className="text-gray-600">
              Custom software solutions tailored to your business needs.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-semibold text-blue-600">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Stunning and user-friendly designs to enhance user experience.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-xl font-semibold text-blue-600">
              Digital Marketing
            </h3>
            <p className="text-gray-600">
              Drive traffic and growth with our marketing expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
