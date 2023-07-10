declare global {
  interface Window {
    tawfiq: string = 'Hello world!'; // Interface exists only in typescript world
  }

  var tariq: string // Though you defined it here
  // it will not provide any safety benefits
  // by doing this you can access tariq inside your ts file
  // that's it.
}

window.tawfiq = "I am in d.ts file!"

// const addToWindow = {
//   addTawfiq: (a: number, b: number) => a + b,
// };

// Object.assign(window, addToWindow);

// declare global {
//   type StuffToAdd = typeof addToWindow;

//   interface Window extends StuffToAdd {}
// }

// window.addTawfiq(1, 1);

export {};