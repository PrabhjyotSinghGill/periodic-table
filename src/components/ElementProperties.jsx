import React from 'react';
import "../views/ElementProperties.css";
import {Link} from "react-router-dom";

function ElementProperties() {
    return <div className='elementProperties'>
        <Link to="/">
            <h1>Element Properties</h1>;
        </Link>
    </div>
}

export default ElementProperties;