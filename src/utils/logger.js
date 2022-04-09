const DEBUG = false;

export const debugLog = (...message) => {
  if (DEBUG) {
    console.log(...message);
  }
};
