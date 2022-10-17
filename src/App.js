import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login"
import About from "./components/About";
import NewReportForm from "./components/NewReportForm";
//const url ="https://emergencybackend.herokuapp.com"
function App({params}) {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  const [report, setReport] = useState([]);
  const [user, setUser] = useState(null);
  // this will be used for the Dark Mode Toggle feature
  // function handleButton(){
  //   setIsDarkMode((isDarkMode)=> !isDarkMode)

  // }
  // const appClass = isDarkMode ? "App dark" : "App light"

  // fetching
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/reports")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);
console.log(report)
  const onAddReport = (addNewReport) => {
    setReport([addNewReport, ...report]);
  };
  const handleDeleteReport = (id) => {
    const updateReport = report.filter((report) => report.id !== id);
    setReport(updateReport);
  };


  return (
    <div>
     
                {/* <Home user={user} /> */}
        <Routes>
        <Route path="/" element={<Home user={user} report={report} />} />
        
        </Routes>
        
        <Routes>
         
          <Route path="/register" element={<Register setUser={setUser} />} />
          
          {/* <Route path="/doctors" element={<Doctors/>} /> */}
        </Routes>
      








    </div>
  );
}

export default App;
