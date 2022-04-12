import React, { useState, useEffect } from "react";
import "./ElementProperties.css";
import { Link, useParams } from "react-router-dom";
import { debugLog } from "../../utils/logger";
import { getPeriodicTableElements } from "../../utils/data-util";

function ElementProperties() {
  let { atomicNumber } = useParams();

  const [element, setElement] = useState(null);

  debugLog(atomicNumber, element);

  useEffect(() => {
    let fetchElementData = async () => {
      let elements = await getPeriodicTableElements();
      debugLog(elements);
      let el = elements.filter((item) => {
        debugLog(`filter, atomicNumber: ${atomicNumber}`, item);
        return `${item.atomicNumber}` === `${atomicNumber}`;
      });
      debugLog(`element: ${el}`);
      if (el) {
        setElement(el[0]);
      }
    };
    fetchElementData();
  }, [atomicNumber]);

  return (
    <div className="elementProperties">
      <h2>Element Properties</h2>
      <div className="elementInfo">
        <div className="backButton">
          <h3>{element && element.name}</h3>
          <Link to="/">back</Link>
        </div>
        {element &&
          Object.keys(element).map((key) => (
            <div
              className="element"
              key={`${element.symbol}-${key}`}
            >{`${key}: ${element[key]}`}</div>
          ))}
      </div>
    </div>
  );
}

export default ElementProperties;
