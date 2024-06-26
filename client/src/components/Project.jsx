import React from 'react';

const Projects = ({ formData, setFormData }) => {
  return (
    <div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="proj1_title" className="block text-sm font-semibold leading-6 text-gray-900">
              Project Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="proj1_title"
                id="proj1_title"
                value={formData.proj1_title}
                onChange={(e) => {
                  setFormData({ ...formData, proj1_title: e.target.value });
                }}
                autoComplete="proj1_title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="proj1_link" className="block text-sm font-semibold leading-6 text-gray-900">
              Link
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="proj1_link"
                id="proj1_link"
                value={formData.proj1_link}
                onChange={(e) => {
                  setFormData({ ...formData,  proj1_link: e.target.value });
                }}
                autoComplete="proj1_link"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="proj1_desc" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="proj1_desc"
                id="proj1_desc"
                value={formData.proj1_desc}
                onChange={(e) => {
                  setFormData({ ...formData, proj1_desc: e.target.value  });
                }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="proj2_title" className="block text-sm font-semibold leading-6 text-gray-900">
              Project Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="proj2_title"
                id="proj2_title"
                value={formData.proj2_title}
                onChange={(e) => {
                  setFormData({ ...formData, proj2_title: e.target.value });
                }}
                autoComplete="proj2_title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="proj2_link" className="block text-sm font-semibold leading-6 text-gray-900">
              Link
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="proj2_link"
                id="proj2_link"
                value={formData.proj2_link}
                onChange={(e) => {
                  setFormData({ ...formData, proj2_link: e.target.value  });
                }}
                autoComplete="proj2_link"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="proj2_desc" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="proj2_desc"
                id="proj2_desc"
                value={formData.proj2_desc}
                onChange={(e) => {
                  setFormData({ ...formData, proj2_desc: e.target.value  });
                }}
                rows={3}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Projects;

