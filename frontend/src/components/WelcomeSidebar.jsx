import React, { useState } from "react";
import { Close, Settings, Upload } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import grid_1 from "../assets/grid_1.png";
import grid_2 from "../assets/grid_2.png";

const WelcomeSidebar = ({
  formData,
  onFormChange,
  onImageUpload,
  image,
  onClose,
  onPlacementChange, // Add this prop to handle placement changes
}) => {
  const [localFormData, setLocalFormData] = useState(formData);
  const [placement, setPlacement] = useState("right"); // Default placement

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...localFormData, [name]: value };
    setLocalFormData(updatedFormData);
    onFormChange(updatedFormData); // Pass changes to the parent component
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageUpload(file); // Pass the image to the parent
    }
  };

  const handleRemoveImage = () => {
    onImageUpload(null); // Remove the image
  };

  const handlePlacementChange = (newPlacement) => {
    setPlacement(newPlacement);
    onPlacementChange(newPlacement); // Notify parent component about placement change
  };

  return (
    <div className="w-[300px] bg-neutral-50 p-4 rounded-lg">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Settings className="mr-2" />
          <h2 className="text-neutral-800 text-sm font-title">Settings</h2>
        </div>
        {/* <button
          className="flex items-center justify-center w-6 h-6 bg-neutral-200 rounded-full"
          onClick={onClose}
        >
          <Close />
        </button> */}

        <IconButton
          onClick={onClose}
          className="rounded-full p-1 bg-neutral-200"
        >
          <CloseIcon />
        </IconButton>
      </header>

      {/* Form */}
      <form className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="text-neutral-800 text-sm font-medium block mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Welcome to our form"
            className="border rounded-md w-full p-2 text-neutral-800 text-sm"
            value={localFormData.title}
            onChange={handleInputChange} // Update title dynamically
          />
        </div>
        {/* Description Input */}
        <div>
          <label className="text-neutral-800 text-sm font-medium block mb-1">
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="This is a description of the form"
            className="border rounded-md w-full p-2 text-neutral-800 text-sm"
            value={localFormData.description}
            onChange={handleInputChange} // Update description dynamically
          />
        </div>
        {/* Button Text Input */}
        <div>
          <label className="text-neutral-800 text-sm font-medium block mb-1">
            Button Text
          </label>
          <input
            type="text"
            name="buttonText"
            placeholder="Start"
            className="border rounded-md w-full p-2 text-neutral-800 text-sm"
            value={localFormData.buttonText}
            onChange={handleInputChange} // Update button text dynamically
          />
        </div>

        {/* Upload Button */}
        <div className="flex flex-col">
          <label className="text-neutral-800 text-sm font-medium mb-1">
            Upload Image
          </label>

          {/* Upload Button with Icon */}
          <div className="relative inline-block">
            <button className="flex items-center justify-center border p-2 rounded-md w-[90px] h-[30px] bg-white text-neutral-800 text-sm">
              <Upload className="mr-1" fontSize="small" />{" "}
              {/* Smaller Upload Icon */}
              Upload
            </button>

            <input
              type="file"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>

          {/* Conditionally Render Image Preview, Remove Button, and Placement Options */}
          {image && (
            <div className="mt-2">
              <img
                src={image}
                alt="Uploaded Preview"
                className="w-[270px] h-[150px] object-cover rounded-md" // Set specific size here
              />
              <div className="flex justify-center mt-2">
                <button
                  type="button"
                  className="border border-neutral-300 text-black rounded-md px-3 py-1 text-sm"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </button>
              </div>

              {/* Placement Options */}
              <div className="flex items-center space-x-4 mt-4">
                {/* Label */}
                <span className="text-neutral-800 text-sm font-medium mb-1">
                  Placement
                </span>

                {/* Buttons */}
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className={`w-10 h-8 border rounded-lg flex items-center justify-center ${
                      placement === "right" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handlePlacementChange("right")}
                  >
                    <img src={grid_1} alt="grid_1" className="w-6 h-6" />
                  </button>

                  <button
                    type="button"
                    className={`w-10 h-8 border rounded-lg flex items-center justify-center ${
                      placement === "left" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handlePlacementChange("left")}
                  >
                    <img src={grid_2} alt="Icon 2" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between items-center pt-4">
          <button className="bg-black text-white px-6 py-2 rounded-md font-medium text-sm">
            Save
          </button>
          <button className="text-red-400 font-medium text-sm">Discard</button>
        </div>
      </form>
    </div>
  );
};

export default WelcomeSidebar;
