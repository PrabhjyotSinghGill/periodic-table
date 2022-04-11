import React from 'react';
import "./PeriodicTableElement.css";


function PeriodicTableElement({atNumber,symbol,name}) {
    return <div className='periodicTableElement'>
        <div>{atNumber}</div>
        <div>{symbol}</div>
        <div>{name}</div>
    </div>
}

export default PeriodicTableElement;