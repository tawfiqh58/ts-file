"use strict";
window.tawfiq = 'I am here!';
console.log(window.tawfiq);
// window.tamanna = 'Hi I am tamanna'; Error: Property 'tariq' does not exist
// globalThis.tariq = 1; Error: Type 'number'
console.log(globalThis.tariq);
const addToWindow = {
    addTawfiq: (a, b) => a + b,
};
Object.assign(window, addToWindow);
const result = window.addTawfiq(1, 1);
console.log(result);
