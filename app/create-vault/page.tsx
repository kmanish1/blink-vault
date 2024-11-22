"use client";

import React, { useState } from "react";

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rows?: number;
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-navy-800 dark:text-gold-100"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          required
          value={value}
          onChange={onChange}
          rows={rows || 4}
          className="w-full px-4 py-2 rounded-lg border border-navy-200 text-navy-800 dark:border-navy-600 dark:bg-navy-700  focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      ) : (
        <input
          type={type}
          id={id}
          required
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-lg border border-navy-200 text-navy-800 dark:border-navy-600 dark:bg-navy-700  focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      )}
    </div>
  );
};

const CreateVault = () => {
  const [url, setUrl] = useState(null);
  const [formData, setFormData] = useState({
    outerTitle: "",
    outerContent: "",
    outerImageLink: "",
    outerPrice: 0,
    innerTitle: "",
    innerContent: "",
    innerImageLink: "",
    walletAddress: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: id === "outerPrice" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send form data to the backend (API route)
      const response = await fetch("/api/vault", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      // Handle response from the server
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      // Parse the JSON response
      const data = await response.json();
      setUrl(data.x._id); // Log success message

      // Reset the form fields after successful submission
      setFormData({
        outerTitle: "",
        outerContent: "",
        outerImageLink: "",
        outerPrice: 0,
        innerTitle: "",
        innerContent: "",
        innerImageLink: "",
        walletAddress: "",
      });

      // Show success message to the user
      console.log("Vault created successfully!");
    } catch (error) {
      // Log the error and display failure message
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-white dark:bg-[#2D3748] text-navy-800 dark:text-gray-100 min-h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
      >
        {/* Outer Blink Section */}
        <div className="bg-white dark:bg-[#1A202C] p-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-2xl font-bold text-navy-800 dark:text-gold-100">
            Outer Blink
          </h1>
          <FormField
            id="outerTitle"
            label="Title"
            value={formData.outerTitle}
            onChange={handleInputChange}
          />
          <FormField
            id="outerContent"
            label="Content"
            type="textarea"
            value={formData.outerContent}
            onChange={handleInputChange}
          />
          <FormField
            id="outerImageLink"
            label="Image Link"
            value={formData.outerImageLink}
            onChange={handleInputChange}
          />
          <FormField
            id="outerPrice"
            label="Price(in sol)"
            type="number"
            value={formData.outerPrice}
            onChange={handleInputChange}
          />
        </div>

        {/* Inner Blink Section */}
        <div className="bg-white dark:bg-[#1A202C] p-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-2xl font-bold text-navy-800 dark:text-gold-100">
            Inner Blink
          </h1>
          <FormField
            id="innerTitle"
            label="Title"
            value={formData.innerTitle}
            onChange={handleInputChange}
          />
          <FormField
            id="innerContent"
            label="Content"
            type="textarea"
            value={formData.innerContent}
            onChange={handleInputChange}
          />
          <FormField
            id="innerImageLink"
            label="Image Link"
            value={formData.innerImageLink}
            onChange={handleInputChange}
          />
        </div>

        {/* Wallet Address Section */}
        <div className="col-span-1 md:col-span-2 bg-white dark:bg-[#1A202C] p-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-2xl font-bold text-navy-800 dark:text-gold-100">
            Wallet Address
          </h1>
          <FormField
            id="walletAddress"
            label="Enter your wallet address"
            value={formData.walletAddress}
            onChange={handleInputChange}
          />
        </div>
        {url && (
          <div className="col-span-1 md:col-span-2 bg-white dark:bg-[#1A202C] p-5 rounded-lg shadow-lg text-center">
            <span className="font-semibold text-xl">http://localhost:3000/api?id={url}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://localhost:3000/api?id=${url}`
                );
                alert("URL copied to clipboard!");
              }}
              className="ml-2 px-3 py-1 bg-navy-800 text-white rounded-lg hover:bg-navy-600"
            >
              Copy
            </button>
          </div>
        )}
        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center w-full">
          <button
            type="submit"
            className=" bg-[#1A202C] text-white py-2 px-4 rounded-lg hover:bg-gold-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVault;
