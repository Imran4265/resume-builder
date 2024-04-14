import React, { useState } from "react";

const Education = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation checks based on the field name
    switch (name) {
      case 'edu1_qualification':
        // Validate qualification (required)
        if (!value.trim()) {
          errorMessage = 'Qualification is required';
        }
        break;
      case 'edu1_school':
        // Validate institution (required)
        if (!value.trim()) {
          errorMessage = 'Institution is required';
        }
        break;
      case 'edu1_year':
        // Validate study year (required)
        if (!value.trim()) {
          errorMessage = 'Study year is required';
        }
        break;
      case 'edu1_score':
        // Validate score (required)
        if (!value.trim()) {
          errorMessage = 'Score is required';
        }
        break;
      case 'edu2_qualification':
        // Validate qualification (required)
        if (!value.trim()) {
          errorMessage = 'Qualification is required';
        }
        break;
      case 'edu2_school':
        // Validate institution (required)
        if (!value.trim()) {
          errorMessage = 'Institution is required';
        }
        break;
      case 'edu2_year':
        // Validate study year (required)
        if (!value.trim()) {
          errorMessage = 'Study year is required';
        }
        break;
      case 'edu2_score':
        // Validate score (required)
        if (!value.trim()) {
          errorMessage = 'Score is required';
        }
        break;
      default:
        break;
    }

    // Update errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    // Update form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="edu1_qualification"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Education<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu1_qualification"
                id="edu1_qualification"
                value={formData.edu1_qualification}
                onChange={handleChange}
                autoComplete="edu1_qualification"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu1_qualification && <p className="text-red-500">{errors.edu1_qualification}</p>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="edu1_school"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Institution<span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="edu1_school"
                id="edu1_school"
                autoComplete="edu1_school"
                value={formData.edu1_school}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu1_school && <p className="text-red-500">{errors.edu1_school}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="edu1_year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Study Year<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu1_year"
                id="edu1_year"
                autoComplete="edu1_year"
                value={formData.edu1_year}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu1_year && <p className="text-red-500">{errors.edu1_year}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="edu1_score"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Percentage / CGPA<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu1_score"
                id="edu1_score"
                autoComplete="edu1_score"
                value={formData.edu1_score}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu1_score && <p className="text-red-500">{errors.edu1_score}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="edu2_qualification"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Education<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu2_qualification"
                id="edu2_qualification"
                value={formData.edu2_qualification}
                onChange={handleChange}
                autoComplete="edu2_qualification"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu2_qualification && <p className="text-red-500">{errors.edu2_qualification}</p>}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="edu2_school"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Institution<span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="edu2_school"
                id="edu2_school"
                autoComplete="edu2_school"
                value={formData.edu2_school}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu2_school && <p className="text-red-500">{errors.edu2_school}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="edu2_year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Study Year<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu2_year"
                id="edu2_year"
                autoComplete="edu2_year"
                value={formData.edu2_year}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu2_year && <p className="text-red-500">{errors.edu2_year}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="edu2_score"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Percentage / CGPA<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="edu2_score"
                id="edu2_score"
                autoComplete="edu2_score"
                value={formData.edu2_score}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.edu2_score && <p className="text-red-500">{errors.edu2_score}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
