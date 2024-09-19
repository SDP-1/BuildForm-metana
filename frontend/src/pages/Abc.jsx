import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent ";
import WelcomeSidebar from "../components/WelcomeSidebar";
import EmailSideBar from "../components/EmailSideBar";
import EmailScreen from "../components/EmailScreen";

function Abc() {
  const [activeScreen, setActiveScreen] = useState("default"); // "default" shows MainContent and LeftSidebar
  const [formData, setFormData] = useState({
    title: "Welcome to our form",
    description: "This is a description of the form",
    buttonText: "Start",
  });
  const [image, setImage] = useState(null);
  const [placement, setPlacement] = useState("right"); // Default placement

  const handleScreenChange = (screen) => {
    setActiveScreen(screen);
  };

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleImageUpload = (file) => {
    if (file === null) {
      setImage(null); // Clear the image if file is null
    } else if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handlePlacementChange = (newPlacement) => {
    setPlacement(newPlacement); // Update placement
  };

  return (
    <div
      id="webcrumbs"
      className="w-screen h-screen bg-neutral-100 flex justify-center items-center"
    >
      <div className="w-screen h-screen bg-neutral-50 flex">
        {/* Conditionally render LeftSidebar or EmailSideBar */}
        {activeScreen === "email" ? (
          <EmailSideBar onClose={() => handleScreenChange("default")} />
        ) : activeScreen === "welcome" ? (
          <WelcomeSidebar
            formData={formData}
            onFormChange={handleFormChange}
            onImageUpload={handleImageUpload}
            image={image}
            onClose={() => handleScreenChange("default")}
            onPlacementChange={handlePlacementChange} // Pass handler
          />
        ) : (
          <LeftSidebar
            onWelcomeSidebarToggle={() => handleScreenChange("welcome")}
            onEmailSidebarToggle={() => handleScreenChange("email")}
          />
        )}

        {/* Conditionally render MainContent or EmailScreen */}
        {activeScreen === "welcome" ? (
          <MainContent
            formData={formData}
            image={image}
            placement={placement}
          />
        ) : activeScreen === "email" ? (
          <EmailScreen />
        ) : (
          <MainContent
            formData={formData}
            image={image}
            placement={placement}
          />
        )}
      </div>
    </div>
  );
}

export default Abc;
