import React from "react";
import { Link } from "react-router-dom";
import { AddFieldModal } from "../components/AddFieldModal "; // Ensure no trailing space in import path

const LeftSidebar = ({ onWelcomeScreenToggle }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddFieldClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[300px] h-full flex flex-col p-4 bg-white shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-neutral-800 text-sm">Dashboard {">"} abc</h3>
        <i className="fa-solid fa-gear text-neutral-600"></i>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 text-sm mb-4">
        <Link to="/" className="text-neutral-900">
          Content
        </Link>
        <button className="text-neutral-400">Design</button>
        <button className="text-neutral-400">Share</button>
        <button className="text-neutral-400">Replies</button>
      </div>

      {/* Steps */}
      <div className="text-sm text-neutral-600 font-bold mb-2">Steps</div>
      <p className="text-xs text-neutral-400 mb-6">
        The steps users will take to complete the form
      </p>

      {/* Step 1 */}
      <div
        className="bg-neutral-100 rounded-md flex items-center p-3 mb-5 cursor-pointer"
        onClick={onWelcomeScreenToggle}
      >
        <span className="w-[10px] h-[10px] bg-neutral-400 rounded-full mr-2"></span>
        <span className="text-neutral-800 text-sm">Welcome screen</span>
      </div>

      {/* Add Field Button */}
      <div className="flex items-center mb-5" onClick={handleAddFieldClick}>
        <i className="fa-solid fa-plus text-neutral-900 text-sm mr-2"></i>
        <span className="text-sm text-neutral-900">+ Add field</span>
      </div>

      {/* Step 2 */}
      <button className="bg-neutral-100 rounded-md flex items-center p-3 mb-5">
        <span className="w-[10px] h-[10px] bg-neutral-400 rounded-full mr-2"></span>
        <span className="text-neutral-800 text-sm">End screen</span>
      </button>

      {/* Footer buttons */}
      <div className="flex items-center justify-between mt-auto">
        <button className="bg-black text-white text-sm py-1 px-3 rounded-md">
          <i className="fa-solid fa-cloud-arrow-up mr-2"></i> Save & Publish
        </button>
        <button className="text-red-600 text-sm">
          <i className="fa-solid fa-trash mr-2"></i> Delete
        </button>
      </div>

      {/* AddFieldModal */}
      {isModalOpen && <AddFieldModal onClose={handleCloseModal} />}
    </div>
  );
};

export default LeftSidebar;
