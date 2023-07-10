declare global {
  interface Window {
    tawfiq: string = 'Hello world!'; // Interface exists only in typescript world
  }

  var tariq: string; // Though you defined it here
  // it will not provide any safety benefits
  // by doing this you can access tariq inside your ts file
  // that's it.
}
window.tawfiq = 'I am in d.ts file!'; // no effect in this file

declare global {
  var tawfiq: string;
}

declare global {
  type StuffToAdd = { addTawfiq: (a: number, b: number) => number };

  interface Window extends StuffToAdd {}
}

export {};
