import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import PeriodicTable from "./components/periodic-table/PeriodicTable";
import ElementProperties from './components/element-properties/ElementProperties';


function App() {
  return (
    <div className="app">
      <div className='header'>
        <h1>Periodic Table</h1>
      </div>
      <Routes>
        <Route path="/" element={<PeriodicTable></PeriodicTable>}></Route>
        <Route path="element-properties/:atomicNumber" element={<ElementProperties></ElementProperties>}></Route>
      </Routes>
    </div>
  );
}

export default App;
