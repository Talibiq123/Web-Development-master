// Synchronous Programming vs Asynchronous Programming

// Synchronous Programming:

// console.log("Script starts...");
// for (let i=0; i<10000; i++) {
//     console.log("Inside for loop");
// }
// console.log("Script ends.");


// setTimeout() function:

// console.log("Script starts...");
// function hello() {
//     console.log("Hello, world!");
// }
// setTimeout(hello, 5000); // can use arrow function also...
// console.log("Script ends.");


// console.log("script starts...");
// const id = setTimeout(() => {
//     console.log("Inside setTimeout function");
// }, 10000)
// for (let i=0; i<100; i++) {
//     console.log("...");
// }
// console.log("setTimeout id is", id);
// console.log("clearing timeout...");
// clearTimeout(id);
// console.log("script ends...");


// setInterval() function:
// console.log("Script starts...");
// setInterval(() => {
//     console.log(Math.random());
// }, 1000)
// console.log("Script ends...");

// Asynchronous Programming:
const body = document.body;
const button = document.querySelector("button");
const id = setInterval(() => {
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = rgb;
    // button.style.background = rgb;
    // console.log(rgb);
}, 1000);

button.addEventListener('click', function() {
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
})
