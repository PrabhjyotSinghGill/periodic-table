let elementPositionDict = {};

export const initElementPositionDict = (elements) => {
    elements.forEach(element => {
        // this is done to fix the period for Boron
        // because for boron the period is incorrect
        // in the response returned from the api.
        if(element.symbol === 'B'){
            element.period = 2;
          }
        let key = `${element.period-1}-${element.group-1}`
        elementPositionDict[key] = element;
    });

};


export const getElementForPosition = (row, col) => {
    let key = `${row}-${col}`;
    return elementPositionDict[key];
};
