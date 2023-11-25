import React, { useState } from "react";

interface SquareCheckboxProps {
  text: string;
  onChange: () => void;
}

const SquareCheckbox: React.FC<SquareCheckboxProps> = ({ onChange, text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`w-6 h-6 flex items-center justify-center border border-gray-600 rounded bg-gray-200 ${
          isChecked ? "bg-lightDarkBlue" : ""
        }`}
      >
        {isChecked && (
          <svg
            className="w-8 h-8 text-lightDarkBlue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
      <span>{text}</span>
    </label>
  );
};

export default SquareCheckbox;
