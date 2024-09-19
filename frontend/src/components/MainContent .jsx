import React from "react";

const MainContent = ({ formData, image }) => {
  return (
    <div
      className="flex-grow bg-white text-black flex items-center justify-between rounded-lg m-3 p-24 max-h-[100%] overflow-auto shadow-2xl shadow-2xl"
      style={{ width: "calc(100% - 300px)" }}
    >
      {/* Left Side: Title, Description, and Button */}
      <div className="flex flex-col items-start max-w-[50%]">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">{formData.title}</h1>

        {/* Description */}
        <p className="text-2xl mb-6">{formData.description}</p>

        {/* Button */}
        <button className="bg-black text-white py-2 px-6 rounded-full text-sm">
          {formData.buttonText}
        </button>
      </div>

      {/* Right Side: Fixed Size Image Preview */}
      {image && (
        <div className="ml-6 max-w-[50%]">
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-[500px] h-[300px] object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
