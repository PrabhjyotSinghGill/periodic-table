import React from 'react';
import {Routes, Route,Link} from "react-router-dom";
import './App.css';
import PeriodicTable from "./components/PeriodicTable";
import ElementProperties from './components/ElementProperties';


function App() {
  return (
    <div className="app">
      <h1>Periodic Table</h1>
      <Routes>
        <Route path="/" element={<PeriodicTable></PeriodicTable>}></Route>
        <Route path="element-properties" element={<ElementProperties></ElementProperties>}></Route>
      </Routes>
    </div>
  );
}

export default App;
