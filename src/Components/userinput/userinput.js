import React from 'react';
import './userinput.css';

const Userinput = (props) => {
    return (
        <div className="userinput">
            <p>List Name</p>
            <input type="text" onChange={props.listName} placeholder={props.value}></input>
        </div>
    )
}

export default Userinput;