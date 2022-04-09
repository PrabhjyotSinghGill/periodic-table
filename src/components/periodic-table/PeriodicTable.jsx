import React, { useState, useEffect } from 'react';
import "./PeriodicTable.css";
import {Link} from "react-router-dom";
import { debugLog } from '../../utils/logger';

const ELEMENTS_TO_DISPLAY = 54;
const LOCALSTORAGE_KEY = 'periodic-table-elements';

function PeriodicTable() {
    let [data, setData] = useState([]);

    useEffect(() => {
        let elements;

        const fetchData = async () => {
            let response = await fetch('https://periodic-table-elements-info.herokuapp.com/elements');
            elements = await response.json();
            elements = elements.slice(0,ELEMENTS_TO_DISPLAY);
            debugLog(`Elements from backend api:${elements}`);
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
            setData(elements);
        }

        elements = localStorage.getItem(LOCALSTORAGE_KEY);
        debugLog(`elements from localStorage:${elements}`);

        if(elements) {
            elements = JSON.parse(elements);
            setData(elements);
        } else{
            fetchData();
        }
    }, []);

    return <div className='periodicTable'>
            {data.map(element => <Link to={`/element-properties/${element.atomicNumber}`} params={element}  key={element.atomicNumber}>{element.symbol}</Link>)} 
    </div>
}

export default PeriodicTable;