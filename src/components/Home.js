import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import NavBar from "./Navbar";
import NewReportForm from "./NewReportForm";
import ReportList from "./ReportList";

const Home = ({ report, onAddReport ,onReportDelete}) => {
    const [isHide, setIsHide] = useState(false);
    // const [search, setSearch] = useState();
    const [btnText, setBtnText] = useState("report an emergency");
    const [hideButtom, setHideButton] = useState(false);

  // console.log (report)
  
  
    const reportdisplay = report.map((repo) => (
      <ReportList 
      id={repo.id} 
      repo={repo} 
      onReportDelete={onReportDelete}
     
      />
    ));
  
    const togglePopUp = () => {
      if (isHide) {
        setIsHide("");
        setBtnText("report an emergency");
      } else {
        setIsHide(<NewReportForm  onAddReport={onAddReport} />);
        setBtnText("close");
      }
    };
  
    return (
      <div>
      <NavBar />
      <div className="container-reports">
  
      <div className="form_container">{true ? [isHide] : null}</div>
  
        <div className="displayuserName">
          <h1 className="userdetails">Welcome !!</h1>
        </div>
        <div className="formcont">
      
        
        <div style={{display: hideButtom}}>
        <button className="add-btn" onClick={togglePopUp} >
          {btnText}
        </button>
      </div>
    
        </div>
  
          <div className="searchbar">
            <input type="text" className="search"  placeholder="search by title" />
            <h3 >Reports display</h3>
  
          </div>
  
          {/* Reports */}
          <div className="reportsheader">
          </div>
  
          <div className="displayreports">
            <table>
              <thead>
              <tr>
                <th>Time&Date</th>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {reportdisplay}
              </tbody>
            </table>
            </div>
            </div>
          {/* Reportscontainerends */}
        </div>
    );
  };
  
  export default Home;
  