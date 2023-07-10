window.tawfiq = 'I am here!';
console.log(window.tawfiq);

// window.notDefinedProperty = 'something'; Error: Property 'notDefinedProperty' does not exist

// globalThis.tariq = 1; Error: Type 'number'
console.log(globalThis.tariq);

const addToWindow = {
  addTawfiq: (a: number, b: number) => a + b,
};

Object.assign(window, addToWindow);

const result = window.addTawfiq(1, 1);
console.log(result);
