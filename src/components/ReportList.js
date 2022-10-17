import React, { useState } from "react";
import {AiFillDelete,AiFillEdit} from "react-icons/ai"

const Url ="https://emergencybackend.herokuapp.com"
const ReportList = ({ id, repo, onReportDelete }) => {
  const [isChecked,setIsChecked] = useState(false)
// console.log(repo)
  const handleEditClick = () => {
    setIsChecked((isChecked)=>!isChecked)
  };
  const handleDeleteClick = () => {
    fetch(`${Url}/deletereports/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });
    onReportDelete(id);
  };
  console.log(repo)
  return (
    <>
      <tr>
        <td>{repo.created_at}</td>
        <td>{repo.title}</td>
        <td>{repo.description}</td>
        <td>{repo.location}</td>
        <td className="tbtn">
          <button onClick={handleDeleteClick}>
            <span className="btn1">
              <AiFillDelete/>
            </span>
          </button>
         
            <button onClick={handleEditClick}>
            <span className="btn2">
              < AiFillEdit/>
            </span>
          </button>
          
          <button onClick={handleEditClick}>{isChecked? "Checked" : "check"}</button>
          
        </td>
      </tr>
    </>
  );
};
export default ReportList;







