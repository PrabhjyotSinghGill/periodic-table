import React, { useState, useEffect } from "react";
import "./PeriodicTable.css";
import { Link } from "react-router-dom";
import { getPeriodicTableElements } from "../../utils/data-util";
import { getElementForPosition } from "../../utils/element-position-util";

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
            className="periodicTableElementBlock"
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
        periodicTableElements.push(<div key={`${row}-${col}`}></div>);
      }
    }
  }
  return periodicTableElements;
}

function PeriodicTable() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let elements = await getPeriodicTableElements();
      setData(elements);
    };
    fetchData();
  }, []);

  return data && <div className="periodicTableCanvas">{renderElements()}</div>;
}

export default PeriodicTable;
