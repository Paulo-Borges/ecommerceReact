import React from "react";

const Button = (props) => {
  return (
    <div className="flex p-4 gap-70 absolute top-50">
      <button className="bg-amber-50 rounded-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          onClick={props.onClick}
          strokeLinejoin="round"
          className="lucide lucide-chevron-left-icon lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button className="bg-amber-50 rounded-4xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          onClick={props.onClick}
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default Button;
