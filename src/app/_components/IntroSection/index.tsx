import React from "react";

const IntroSection = () => {
  return (
    <section className="flex min-h-96 items-center bg-blue-600 py-40 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Innovative Outsourcing Solutions
        </h1>
        <p className="mb-8 text-lg sm:text-xl">
          Scale your business with our expertise in technology, design, and
          development.
        </p>
        <a
          href="#contact"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow hover:bg-blue-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
