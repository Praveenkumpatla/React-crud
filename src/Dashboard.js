import React, { useContext,useState } from "react";
import Navbar from "./navbar";
import UserContext from "./UserData";
import NewLine from "./NewLine";
import { Link } from "react-router-dom";

function Dashboard() {
  let users = useContext(UserContext);
  let [present,modified]=useState(users.latest.map((item, index) => {
    return <NewLine data={item} key={index} posit={review}></NewLine>;
  }))
  function review(){
      modified(users.latest.map((item, index) => {
        return <NewLine data={item} key={index} posit={review}></NewLine>;
      }))
    }
  return (
    <div>
      <Navbar data="Dashboard"></Navbar>
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Mail</th>
              <th>Mobile</th>
              <th style={{minWidth:"200px"}}>
                <Link style={{ textDecoration: "none" }} to="/Adduser" className="btn-sm btn-primary">
                  <i className="fas fa-user-plus"></i> Add New User
                </Link>
              </th>
            </tr>
            {present}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
