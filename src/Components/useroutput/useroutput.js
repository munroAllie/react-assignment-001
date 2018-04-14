import React from 'react';
import './useroutput.css';

const Useroutput = (props) => {
    return (
        <div className="useroutput">
            <p> {props.name} | </p>
            <p> {props.profession} </p>
        </div>
    )
}
export default Useroutput;