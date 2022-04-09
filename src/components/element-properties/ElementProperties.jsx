import React from 'react';
import "./ElementProperties.css";
import {Link, useParams} from "react-router-dom";
import { debugLog } from '../../utils/logger';

function ElementProperties() {
    let { atomicNumber } = useParams();
    debugLog(atomicNumber);
    return <div className='elementProperties'>
        <Link to="/">
            <h1>Element Properties</h1>
        </Link>
    </div>
}

export default ElementProperties;