import React from "react";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-600 py-36 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>
        <p className="mb-8 text-lg">
          Ready to take your business to the next level? Get in touch today!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
