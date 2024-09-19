import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddFieldModal } from "../components/AddFieldModal ";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Settings } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";

const iconMap = {
  multiple_choice: <CheckIcon fontSize="small" />,
  short_text: <EditIcon fontSize="small" />,
  email: <MailIcon fontSize="small" />,
  phone_number: <PhoneIcon fontSize="small" />,
  section: <BorderAllIcon fontSize="small" />,
  contact_information: <InfoIcon fontSize="small" />,
  country: <LanguageIcon fontSize="small" />,
  legal: <CheckBoxOutlineBlankIcon fontSize="small" />,
  dropdown: <ArrowDropDownIcon fontSize="small" />,
};

const LeftSidebar = ({ onWelcomeSidebarToggle, onEmailSidebarToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fields, setFields] = useState([]);

  const handleAddFieldClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFieldSelect = (field) => {
    setFields([...fields, field]);
  };

  const handleRemoveField = (fieldToRemove) => {
    setFields(fields.filter((field) => field !== fieldToRemove));
  };

  const handleFieldClick = (field) => {
    if (field === "email") {
      onEmailSidebarToggle(); // Trigger the function to change the screen to EmailSideBar
    }
  };

  return (
    <div className="w-[300px] bg-neutral-50 p-4 rounded-lg flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          {/* Breadcrumb */}
          <h3 className="text-neutral-800 text-sm">
            Dashboard {">"} Demo Form
          </h3>

          {/* Settings Icon */}
          <Settings className="text-neutral-600" fontSize="small" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 text-xs mb-10 bg-gray-100 p-1 rounded-lg">
          <Link
            to="/"
            className="text-neutral-900 bg-white py-1 px-2 rounded-lg shadow-sm"
          >
            Content
          </Link>
          <button className="text-neutral-400 py-1 px-2 rounded-lg hover:bg-gray-200">
            Design
          </button>
          <button className="text-neutral-400 py-1 px-2 rounded-lg hover:bg-gray-200">
            Share
          </button>
          <button className="text-neutral-400 py-1 px-2 rounded-lg hover:bg-gray-200">
            Replies
          </button>
        </div>

        {/* Steps */}
        <div className="flex items-center mb-2">
        {/* Hamburger Icon */}
        <Menu className="text-neutral-600 mr-2" fontSize="small" />
        
        {/* Steps Text */}
        <div className="text-sm text-neutral-600 font-bold">
          Steps
        </div>
      </div>
        <p className="text-xs text-neutral-400 mb-6">
          The steps users will take to complete the form
        </p>

        {/* Step 1 */}
        <div
          className="bg-neutral-100 rounded-md flex items-center p-3 mb-2 cursor-pointer"
          onClick={onWelcomeSidebarToggle}
        >
          <span className="w-[10px] h-[10px] bg-neutral-400 rounded-full mr-2"></span>
          <span className="text-neutral-800 text-sm">Welcome screen</span>
        </div>

        {fields.map((field, index) => (
          <div
            className="bg-neutral-100 rounded-md flex items-center justify-between py-1 px-4 mb-2 cursor-pointer"
            key={index}
            onClick={() => handleFieldClick(field)}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                {iconMap[field]}
              </div>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  marginLeft: 1,
                  textAlign: "left",
                }}
                className="flex-grow"
              >
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/_/g, " ")}
              </Typography>
            </div>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveField(field);
              }}
            >
              <CloseIcon sx={{ fontSize: 10 }} />
            </IconButton>
          </div>
        ))}

        {/* Add Field Button */}
        <div
          className="flex items-center justify-center w-[90px] h-[25px] border border-neutral-300 rounded-md cursor-pointer hover:bg-neutral-100 mb-5"
          onClick={handleAddFieldClick}
        >
          <i className="fa-solid fa-plus text-neutral-900 text-base mr-2"></i>
          <span className="text-sm text-neutral-900 ">+ Add field</span>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-neutral-300 mb-5" />

        {/* Step 2 */}
        <button className="bg-neutral-100 rounded-md flex items-center p-3 mb-5">
          <span className="w-[10px] h-[10px] bg-neutral-400 rounded-full mr-2"></span>
          <span className="text-neutral-800 text-sm">End screen</span>
        </button>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        <button className="bg-black text-white text-sm py-1 px-3 rounded-md">
          <i className="fa-solid fa-cloud-arrow-up mr-2"></i> Save & Publish
        </button>
        <button className="text-red-600 text-sm">
          <i className="fa-solid fa-trash mr-2"></i> Delete
        </button>
      </div>

      {/* AddFieldModal */}
      {isModalOpen && (
        <AddFieldModal
          onClose={handleCloseModal}
          onSelectField={handleFieldSelect}
        />
      )}
    </div>
  );
};

export default LeftSidebar;
