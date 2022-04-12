import { initElementPositionDict } from "./element-position-util";
import {
  addElementsToLocalStorage,
  getElementsFromLocalStorage,
} from "./local-storage-util";
import { debugLog } from "./logger";

const ELEMENTS_TO_DISPLAY = 54;

const getDataFromNetworkWithRetry = async () => {
  const MAXIMUM_RETRIES = 5;
  let result;
  let retry = 0;
  while (!result && retry < MAXIMUM_RETRIES) {
    retry++;
    try {
      let response = await fetch(
        "https://periodic-table-elements-info.herokuapp.com/elements"
      );
      if (response.status === 200) {
        result = await response.json();
      }
    } catch (error) {
      debugLog(error);
    }
  }
  return result;
};

export const getPeriodicTableElements = async () => {
  let elements = getElementsFromLocalStorage();
  if (!elements) {
    elements = await getDataFromNetworkWithRetry();
    elements = elements.slice(0, ELEMENTS_TO_DISPLAY);
    debugLog(`Elements from backend api:${elements}`);
    addElementsToLocalStorage(elements);
  }
  initElementPositionDict(elements);
  return elements;
};
