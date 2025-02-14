import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";

type FormFieldProps = {
  labelName?: string;
  value?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";
  name?: string;
  id?: string;
  placeHolder?: string;
  inline?: boolean;
  containerClassNames?: string;
  labelClassNames?: string;
  inputClassesNames?: string;
  buttonEyeClassNames?: string;
};

const TextField = ({
  labelName = "",
  value,
  type = "text",
  id,
  name,
  placeHolder,
  inline = false,
  containerClassNames,
  labelClassNames,
  inputClassesNames,
  buttonEyeClassNames,
  onChangeHandler = () => {},
}: FormFieldProps) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <label
      htmlFor={id}
      className={`flex ${
        inline ? "flex-row gap-1" : "flex-col"
      } ${containerClassNames}`}
    >
      <p
        className={`text-heading6 text-start font-semibold ${labelClassNames}`}
      >
        {labelName} :
      </p>
      <div
        className={`border-primary flex flex-row gap-3 rounded-md border px-2 py-1 ${inputClassesNames}`}
      >
        <input
          type={type == "password" ? (visibility ? "text" : "password") : type}
          placeholder={placeHolder}
          id={id}
          className="w-full focus-visible:outline-none"
          name={name}
          value={value}
          onChange={onChangeHandler}
        />
        {type == "password" && (
          <button
            className={buttonEyeClassNames}
            onClick={() => setVisibility((prev) => !prev)}
          >
            {visibility ? (
              <Eye className="h-4 w-4 text-blue-500" /> // Visible state
            ) : (
              <EyeOff className="h-4 w-4 text-gray-500" /> // Hidden state
            )}
          </button>
        )}
      </div>
    </label>
  );
};

export default TextField;
