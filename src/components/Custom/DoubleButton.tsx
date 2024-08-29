import React from "react";

const DoubleButton = ({
  buttonText = "Get",
  buttonColor = "blue",
  backgroundColor = "#00EDBE",
  width = "185px",
  height = "48px",
}) => {
  const textSize =
    height === "48px"
      ? "text-lg"
      : height === "70px"
      ? "text-2xl"
      : "text-base";

  return (
    <div className="relative inline-block group">
      <button
        className={`relative z-30 ${textSize} border-2 border-black rounded transition-transform duration-300 ease-in-out group-hover:-translate-x-[3%] group-hover:-translate-y-[12%]`}
        style={{
          backgroundColor: buttonColor,
          color: "white",
          width,
          height,
        }}
      >
        {buttonText}
      </button>
      <div
        className={`absolute top-0 left-0 z-20 border-2 border-black rounded`}
        style={{ width, height }}
      ></div>
      <div
        className={`absolute top-0 left-0 z-10 rounded`}
        style={{ backgroundColor, width, height }}
      ></div>
    </div>
  );
};

export default DoubleButton;
