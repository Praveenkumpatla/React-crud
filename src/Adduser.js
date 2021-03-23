import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import UserContext from "./UserData";

function Adduser() {
    let users = useContext(UserContext);
    let [Username,setUsername] = useState("")
    let [Mail,setMail] = useState("")
    let [Mobile,setMobile] = useState("")
    let userdata = {Username,Mail,Mobile}
  return (
    <>
      <Navbar data="Add New User"></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4">
            <form className="form-group" onSubmit={(e) => {e.preventDefault()
            users.latest.push(userdata)
            users.update(users.latest)
            setUsername("")
            setMail("")
            setMobile("")
            alert("Success")
            }}>
              <label>Name</label>
              <input className="form-control" required  value={Username} onChange={(e)=>{setUsername(e.target.value)}} />
              <label>Mail</label>
              <input type="email" className="form-control" required value={Mail} onChange={(e)=>{setMail(e.target.value)}} />
              <label>Mobile</label>
              <input className="form-control" required maxLength="10" value={Mobile} onChange={(e)=>{setMobile(e.target.value)}} />
              <input type="submit" className="btn btn-primary mt-2"/>
              <Link to="/" className="btn btn-danger ml-2 mt-2">Cancel</Link>
              <Link to="/" className="btn btn-primary ml-2 mt-2">Dashboard</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adduser;
