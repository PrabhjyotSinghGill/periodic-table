let elementPositionDict = {};

export const initElementPositionDict = (elements) => {
    elements.forEach(element => {
        if(element.symbol == 'B'){
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
