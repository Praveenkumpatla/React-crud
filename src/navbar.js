import React from 'react';

function Navbar(props) {
    return (
        <>
        <div className="current p-2" style={{textAlign:"center"}}>{props.data}</div>
        </>
    )
}

export default Navbar
