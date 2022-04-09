import React from 'react';
import "./Element.css";

function Element({name,elcolor}) {
    return< div className='element'>
        <span className='elementColor' style={{backgroundColor:elcolor}}></span>
        <h7>{name}</h7>
    </div>;
}

export default Element;