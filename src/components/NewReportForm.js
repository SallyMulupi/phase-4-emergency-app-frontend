import React, { useState } from "react";

const NewReportForm = ({ params, onAddReport, hidePopUp, handleupdateClick, id, repo }) => {
        const [inputData, setInputData] = useState({
            title: "",
            description: "",
            location: "",
            user_id: ""

        });
        const URL="/report"
  const handleInputChange = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })
  };
  const handleInputDescription = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })

  };

  const handleInputLocation = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInput ={
        title: inputData.title,
        description: inputData.description,
        location: inputData.location,
        user_id:params.id
    }

    fetch("/report",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(dataInput)
    })
    .then((res) => res.json())
    .then((data) => onAddReport(data));

    setInputData({
      title: "",
      description: "",
      location: "",
    })
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="formR">
        <input
          type="text"
          name="title"
          placeholder="Enter Type of emergency report"
          onChange={handleInputChange}
          value={inputData.title}
        />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Description of emergency report"
          onChange={handleInputDescription}
          value={inputData.description}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter Location of emergency report"
          onChange={handleInputLocation}
          value={inputData.location}
        />
        <br />

        <div className="action_btn">
        <button type="submit" className="report-btn">
          Submit
        </button>

        <a className="close-btn" onClick={hidePopUp}>
          Close
        </a>
        </div>
        
      </form>
    </div>
  );
};

export default NewReportForm;
