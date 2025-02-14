import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Projects</h2>
        <p className="mb-8 text-gray-600">
          Explore some of the amazing projects we&apos;ve delivered for our
          clients.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-100 p-6 shadow">
            <h3 className="mb-2 text-lg font-semibold text-blue-600">
              E-Commerce Platform
            </h3>
            <p className="text-gray-600">
              A scalable e-commerce solution for a global retailer.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow">
            <h3 className="mb-2 text-lg font-semibold text-blue-600">
              Mobile Banking App
            </h3>
            <p className="text-gray-600">
              Secure and user-friendly banking on the go.
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow">
            <h3 className="mb-2 text-lg font-semibold text-blue-600">
              Healthcare Portal
            </h3>
            <p className="text-gray-600">
              Improving patient care with innovative technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
