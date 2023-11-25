import React from "react";

interface RoundedCheckboxProps {
  text: string;
}

const RoundedCheckbox: React.FC<RoundedCheckboxProps> = ({ text }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="hidden" />
      <div className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full bg-gray-200">
        <div className="w-3 h-3 rounded-full bg-lightDarkBlue"></div>
      </div>
      <span>{text}</span>
    </label>
  );
};

export default RoundedCheckbox;
