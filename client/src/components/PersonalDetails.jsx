import React, { useState } from "react";

const Personal = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation checks based on the field name
    switch (name) {
      case 'name':
        // Validate name (required)
        if (!value.trim()) {
          errorMessage = 'Name is required';
        }
        break;
      case 'email':
        // Validate email (required and valid format)
        if (!value.trim()) {
          errorMessage = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          errorMessage = 'Invalid email address';
        }
        break;
      case 'phone':
        // Validate phone number (optional, if provided, must be valid format)
        if (value.trim() && !/^\d{10}$/.test(value)) {
          errorMessage = 'Invalid phone number';
        }
        break;
      case 'skills':
        // Validate skills (required)
        if (!value.trim()) {
          errorMessage = 'Skills are required';
        }
        break;
      default:
        break;
    }

    // Update form data and error message
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      // Store error message for the field
      [`${name}Error`]: errorMessage,
    }));
  };

  return (
    <>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                autoFocus
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
              {formData.nameError && <p className="text-red-500">{formData.nameError}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
              {formData.emailError && <p className="text-red-500">{formData.emailError}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone-number"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
              {formData.phoneError && <p className="text-red-500">{formData.phoneError}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Linkedin
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                autoComplete="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="github"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Github
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="github"
                id="github"
                autoComplete="github"
                value={formData.github}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="skills"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Skills <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                name="skills"
                id="skills"
                value={formData.skills}
                onChange={handleChange}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
              />
              {formData.skillsError && <p className="text-red-500">{formData.skillsError}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
