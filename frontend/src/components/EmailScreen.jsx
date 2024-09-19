import React, { useState, useEffect } from "react";

const EmailScreen = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Regular expression for validating an email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    // Check if the email matches the regex
    if (email === "") {
      setIsValid(true); // No validation message when empty
    } else {
      setIsValid(emailRegex.test(email));
    }
  }, [email]);

  return (
    <div className="flex-grow text-white flex items-center justify-center m-3 p-24 max-h-[100%] overflow-auto shadow-2xl bg-white rounded-lg border-t-4 border-black">
      <div className="flex flex-col items-center text-center" style={{ width: "calc(100% - 300px)" }}>
        <h1 className="font-title text-lg font-semibold text-black">
          1 → Enter your email
        </h1>

        <p className="text-sm mt-2 text-neutral-600">
          This will be used to contact you for the next steps.
        </p>

        <label className="w-full mt-8">
          <input
            className={`border-b w-full outline-none text-neutral-800 placeholder:text-neutral-400 ${isValid ? "border-neutral-300" : "border-red-500"}`}
            type="email"
            placeholder="Type here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        {/* Validation message */}
        {!isValid && (
          <p className="text-red-500 text-sm mt-2">Please enter a valid email address</p>
        )}
      </div>
    </div>
  );
};

export default EmailScreen;
