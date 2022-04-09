import React from 'react';
import "./ElementProperties.css";
import {Link, useParams} from "react-router-dom";
import { debugLog } from '../../utils/logger';
import { useEffect } from 'react';
import { useState } from 'react';
import { getElementsFromLocalStorage } from '../../utils/local-storage-util';

function ElementProperties() {
    let { atomicNumber } = useParams();

    const [element, setElement] = useState(null);

    debugLog(atomicNumber, element);

    useEffect(()=> {
        let elements = getElementsFromLocalStorage();
        debugLog(elements)
        let el = elements.filter((item) => {
            debugLog(`filter, atomicNumber: ${atomicNumber}`, item)
            return `${item.atomicNumber}` === `${atomicNumber}`
        });
        debugLog(`element: ${el}`)
        if(el) {
            setElement(el[0]);
        }
    }, [atomicNumber]);

    return <div className='elementProperties'>
        <Link to="/">
            <h1>Element Properties</h1>
        </Link>
        {element && Object.keys(element).map((key) => <div key={`${element.symbol}-${key}`}>{`${key}: ${element[key]}`}</div>)}
    </div>
}

export default ElementProperties;