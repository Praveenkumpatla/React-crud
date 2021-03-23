import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from "./UserData";

function NewLine(props) {
    let users = useContext(UserContext);
    return (
        <>
        <tr>
            <td>{props.data.Username}</td>
            <td>{props.data.Mail}</td>
            <td>{props.data.Mobile}</td>
            <td><Link to={`/Edituser/${props.data.Mail}`} className="btn-sm btn-warning point"><i className="fas fa-user-edit"></i> Edit</Link>
            <span className="btn-sm btn-danger ml-3 point" onClick={()=>{
                users.latest.forEach((item,index) =>{
                    if(item.Username===props.data.Username)
                    users.latest.splice(index,1)
                })
            console.log(users.latest)
            users.update(users.latest)
            props.posit()}}>
            <i className="fas fa-trash-alt"></i> Delete</span>
            </td>
        </tr>
        </>
    )
}

export default NewLine
