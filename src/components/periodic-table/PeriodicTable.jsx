import React, { useState, useEffect } from "react";
import "./PeriodicTable.css";
import { Link } from "react-router-dom";
import { debugLog } from "../../utils/logger";
import {
  addElementsToLocalStorage,
  getElementsFromLocalStorage,
} from "../../utils/local-storage-util";
// import PeriodicTableElement from "../periodic-table-element/PeriodicTableElement";
import {
  getElementForPosition,
  initElementPositionDict,
} from "../../utils/element-position-util";

const ELEMENTS_TO_DISPLAY = 54;
const GRID_ROWS = 5;
const GRID_COLS = 18;

function renderElements() {
  let periodicTableElements = [];
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      let periodicTableElement = getElementForPosition(row, col);
      if (periodicTableElement) {
        periodicTableElements.push(
          <Link
            className="periodicTableElement"
            style={{
              background: periodicTableElement?.cpkHexColor
                ? `#${periodicTableElement.cpkHexColor}`
                : "#2a4165",
            }}
            to={`/element-properties/${periodicTableElement.atomicNumber}`}
            params={periodicTableElement}
            key={periodicTableElement.atomicNumber}
          >
            <div>{periodicTableElement.atomicNumber}</div>
            <div>{periodicTableElement.symbol}</div>
            <div>{periodicTableElement.name}</div>
          </Link>
        );
      } else {
        periodicTableElements.push(<div></div>);
      }
    }
  }
  return periodicTableElements;
}

function PeriodicTable() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let elements;

    const fetchData = async () => {
      let response = await fetch(
        "https://periodic-table-elements-info.herokuapp.com/elements"
      );
      elements = await response.json();
      elements = elements.slice(0, ELEMENTS_TO_DISPLAY);
      debugLog(`Elements from backend api:${elements}`);
      addElementsToLocalStorage(elements);
      initElementPositionDict(elements);
      setData(elements);
    };

    elements = getElementsFromLocalStorage();
    if (elements) {
      initElementPositionDict(elements);
      setData(elements);
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="periodicTableCanvas">
      {/* <div>
                {data.map(element => <Link to={`/element-properties/${element.atomicNumber}`} params={element}  key={element.atomicNumber}>{element.symbol}</Link>)} 
            </div> */}
      {renderElements()}
    </div>
  );
}

export default PeriodicTable;
