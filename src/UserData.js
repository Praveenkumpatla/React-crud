import React,{useState} from 'react';

let UserContext = React.createContext();

export default UserContext;

let data = [{Username:"Praveen kumar",Mail:"praveen@gmail.com",Mobile:"94940*****"},
{Username:"Raja Vasanth",Mail:"rajavasanthan@guvi.in",Mobile:"98764*****"},
{Username:"Divya",Mail:"Divya@guvi.in",Mobile:"87654*****"},
{Username:"Maheswaran Sundarararjan",Mail:"maheswaran@guvi.in",Mobile:"76543*****"},
{Username:"Pushpalatha Elumalai",Mail:"pushpalatha@guvi.in",Mobile:"65432*****"}]

export const UserData = ({children}) => {
    let [latest,update] = useState(data)
    return (<UserContext.Provider value={{latest,update}}>
        {children}
    </UserContext.Provider>)
}


