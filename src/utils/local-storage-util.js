import { debugLog } from "./logger";

const LOCALSTORAGE_KEY = 'periodic-table-elements';

export const addElementsToLocalStorage = (elements) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
}

export const getElementsFromLocalStorage = () => {
    let elements = localStorage.getItem(LOCALSTORAGE_KEY);
    if(elements) {
        elements = JSON.parse(elements);
    } 
    debugLog(`elements from localStorage:${elements}`);
    return elements;
}