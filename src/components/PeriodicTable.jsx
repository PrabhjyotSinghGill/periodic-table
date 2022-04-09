import React from 'react';
import "../views/PeriodicTable.css";
import {Link} from "react-router-dom";

function PeriodicTable() {
    return <>
        <Link to="/element-properties">
            <h1>Table Component</h1>;
        </Link>
    </>
}

export default PeriodicTable;