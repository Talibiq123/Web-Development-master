// DOM (Document Object Model)
// overview
// how to use
// deep study

// console.log(window.document);
// console.dir(window.document);


// select element using get element by id
// console.log(document.getElementById("main-heading"));
// console.dir(typeof document.getElementById("main-heading"));
// console.dir(document.getElementById("main-heading"));

// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading);



// select element using Query selector
// query selector works for everything such as classes, ids etc...
// const mainHeading = document.querySelector("#main-heading"); // # : to select id
// console.log(mainHeading);

// const header = document.querySelector(".header");
// console.log(header);

// select same li items
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);


// change text
// textContent and innerText
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);

// mainHeading.textContent = "Changed Manage your task by text content";
// console.log(mainHeading.textContent);



// change the style of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading);
// console.log(mainHeading.style);
// mainHeading.style.color = "yellow";
// mainHeading.style.background-color = "red";  Wrong
// mainHeading.style.backgroundColor = "black";



// get and set attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.w3schools.com/html/");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));

// const inputElement = document.querySelector("input");
// console.log(inputElement.getAttribute("type"));



// get multiple elements using getElements By Class Name
// get multiple elements using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // gives HTML collection
// console.log(navItems);

// console.log(typeof navItems);

// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);



// const navItems = document.querySelectorAll('.nav-item'); //gives NodeList
// console.log(navItem);





// simple for loop
// for of loop
// for Each loop : We can not use forEach method to iterate thrrough HTMLCollection
// let navItems = document.getElementsByTagName("a");
// for(let i=0; i<navItems.length; i++) {
//     // console.log(navItems[i]);
    // const navItem  = navItems[i];
    // navItem.style.backgroundColor = "red";
    // navItem.style.color = "green"; 
//     navItem.style.weight = "bold"; 
// }


// for(let navItem of navItems) {
    // navItem.style.backgroundColor = "red";
    // navItem.style.color = "green"; 
// }



// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "red";
//     navItem.style.color = "green"; 
// })



// let navItems = document.querySelectorAll('a');
// console.log(navItems);

// simple for loop
// for(let i=0; i<navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem  = navItems[i];
//     navItem.style.backgroundColor = "red";
//     navItem.style.color = "green"; 
//     navItem.style.weight = "bold"; 
// }
// for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "red";
//     navItem.style.color = "green"; 
// }

// for Each loop
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "red";
//     navItem.style.color = "green"; 
// })



// inner HTML
// const headLine = document.querySelector(".headline");
// // console.log(headLine.innerHTML);
// headLine.innerHTML = "<h1>Inner HTML changed.</h1>";
// headLine.innerHTML += "<button class=\"btn\">Learn More </button>"
// console.log(headLine.innerHTML);