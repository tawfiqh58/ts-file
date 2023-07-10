# First time typescript

You can not write `declare` inside .d.ts fil without `tsc --init`  
and you can not access your declared variable

also you have to add this line `export {}`
otherwise you will get error: global scope in a file that is not recognized as a module

Run this app

As this is a window object means it can only run inside a browser
So, Add main.js file in index.html file by adding this line
`<script src="main.js"></script>`

and compile typescript file using: `tsc`
