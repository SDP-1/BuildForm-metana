import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent ";
import WelcomeScreen from "../components/WelcomeScreen";

function Abc() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Start",
  });

  // Image upload state
  const [image, setImage] = useState(null);

  const handleWelcomeScreenToggle = () => {
    setShowWelcomeScreen(!showWelcomeScreen);
  };

  // Handle form data change (for title, description, and button text)
  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  // Handle image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // Set image as base64 URL
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id="webcrumbs"
      className="w-screen h-screen bg-neutral-100 flex justify-center items-center"
    >
      <div className="w-screen h-screen bg-neutral-50 flex">
        {/* Conditional Sidebar or WelcomeScreen */}
        {showWelcomeScreen ? (
          <WelcomeScreen
            formData={formData}
            onFormChange={handleFormChange}
            onImageUpload={handleImageUpload}
            image={image}
            onClose={handleWelcomeScreenToggle}
          />
        ) : (
          <LeftSidebar onWelcomeScreenToggle={handleWelcomeScreenToggle} />
        )}

        {/* Main Content */}
        <MainContent formData={formData} image={image} />
      </div>
    </div>
  );
}

export default Abc;
