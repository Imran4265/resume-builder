import React, { useState } from "react";
import Education from "./components/education";
import Experiences from "./components/Experiences";
import PersonalDetails from "./components/PersonalDetails";
import Project from "./components/Project";
import Extras from "./components/extras";
import axios from "axios";
import { saveAs } from "file-saver";
import Success from "./components/Success";

const Resume = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",

    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_des: "",
    exp2_dur: "",

    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",

    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",

    extra_1: "",
    extra_2: "",
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const [selectedTemplate, setSelectedTemplate] = useState("template1"); // Add state for selected template

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  const validatePersonalDetails = () => {
    const { name, email, phone, skills } = formData;
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      skills.trim() !== ""
    );
  };

  const validateEducation = () => {
    const { edu1_school, edu1_year, edu1_qualification } = formData;
    return (
      edu1_school.trim() !== "" &&
      edu1_year.trim() !== "" &&
      edu1_qualification.trim() !== ""
    );
  };

  const handleNext = () => {
    let isValid = false;
    switch (page) {
      case 0:
        isValid = validatePersonalDetails();
        break;
      case 1:
        isValid = validateEducation();
        break;
      default:
        isValid = true;
    }
    
    if (isValid) {
      if (page === FormTitle.length - 1) {
        axios
          .post("https://resume-backend.adaptable.app/store", formData)
          .then(() => {
            console.log("Stored In DataBase");
          });
        axios
          .post("http://localhost:9000/create-pdf", {
            resumeData: formData,
            template: templ
          })
          .then(() => {
            console.log("testing");
            axios
              .get("http://localhost:9000/fetch-pdf", {
                responseType: "blob",
              })
              .then((res) => {
                console.log(res);
                const pdfBlob = new Blob([res.data], {
                  type: "application/pdf",
                });
                setSuccess(res.status === 200);
                saveAs(pdfBlob, "Resume.pdf");
              })
              .catch((error) => {
                console.error("Error fetching PDF:", error);
              });
          });
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const handlePrev = () => {
    setPage((currPage) => currPage - 1);
  };

  const handleTemplateChange = (e) => {
    // console.log(e.target.value);
      setSelectedTemplate(e.target.value);
    console.log(selectedTemplate);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="block font-bold text-black text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          {FormTitle[page]}
        </h1>
      </div>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <select
          id="template"
          value={selectedTemplate}
          onChange={handleTemplateChange}
        >
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
          {/* Add more options for additional templates */}
        </select>
        <button
          className="btn btn-dark"
          disabled={page === 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
  );
};

export default Resume;
