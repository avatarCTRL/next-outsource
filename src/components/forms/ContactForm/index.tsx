"use client";
import React, { useState } from "react";
import axios from "axios";

import TextField from "@/components/ui/TextField";
import { toastError, toastInfo, toastSuccess } from "@/helpers/toast";
import Spinner from "@/components/ui/Spinner";

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/sendMessage", data);
      toastSuccess("Submitted successfully");
    } catch (error) {
      toastError("Failed to Submit. Try Again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-full rounded-md border-2 bg-white px-5 py-8 text-black md:w-2/3"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <TextField
              id="contactName"
              name="username"
              labelName="Name"
              placeHolder="Jhon Smith"
              value={data.username}
              onChangeHandler={handleChange}
            />

            <TextField
              id="contactAddress"
              name="address"
              labelName="Address"
              placeHolder="Kathmandu, Nepal"
              value={data.address}
              onChangeHandler={handleChange}
            />

            <TextField
              id="contactEmail"
              name="email"
              labelName="Email"
              placeHolder="jhon@example.com"
              value={data.email}
              onChangeHandler={handleChange}
            />
          </div>

          <textarea
            id="contactMessage"
            name="message"
            placeholder="write a message..."
            className="mt-5 h-40 rounded-md border border-gray-200 p-3 lg:h-auto lg:flex-1"
            value={data.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 self-end rounded-md border-2 bg-blue-500 px-8 py-2 text-white outline-blue-500 hover:bg-blue-600 hover:outline disabled:cursor-not-allowed disabled:outline-none"
        >
          {isLoading && <Spinner />}
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
