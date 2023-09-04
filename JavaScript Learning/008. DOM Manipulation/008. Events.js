// Introduction to Events
// click
// button press, hover, etc...

// 3 ways to add event

// 1.
// const btn = document.querySelector(".btn");
// console.dir(btn);
// btn.onclick = () => {
//     console.log("You clicked me!");
// };


// const btn = document.querySelector(".btn");
// method --> addEventListener
// btn.addEventListener("click", () => {
//     console.log("you clicked me!");
// });

// this keyword
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function() {
//     console.log("you clicked me!");
//     console.log("Value of this...");
//     console.log(this);
// }); 

// btn.addEventListener("click", () => {
//     console.log("you clicked me!");
//     console.log("Value of this...");
//     console.log(this);
// }); 




// clickEvents.html
// const firstButton = document.querySelector("#one");
// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// for (let button of allButtons) {
//     button.addEventListener("click", function() {
//         console.log(this.textContent);
//     });
// }

// for(let i=0; i<allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function() {
//         console.log(this.textContent);
//     });
// }

// allButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         console.log(this.textContent);
//     });
// })





// Event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(abc){
//     console.log(abc);
// })


// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


// const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget);
//     })
// }



// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons) {
//     button.addEventListener("click",(e)=>{
//         // console.log(e);
//         // console.log(e.target);
//         console.log(e.currentTarget);
//     });
// }
// console.log(allButtons);






// 
// console.log("script start...");
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         let num = 0;
        // for(let i=0; i<=100000000;i++){
        //     num =+ i;
        // }
        // console.log(e.currentTarget.textContent);
//     })
// })

// let outerVar = 0;
// for(let i=0; i<=100000000; i++) {
//     outerVar += i;
// }
// console.log("value of outer variable is " + outerVar);
// console.log("script end!");




// little practice with click events
// const allButtons = document.querySelectorAll(".my-buttons button"); 
// console.log(allButtons.length);

// allButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
        // console.log(e.currentTarget.textContent);
//         e.currentTarget.style.backgroundColor = "yellow";
//         e.currentTarget.style.color = "#333";
//     })
// });


// const allButtons = document.querySelectorAll(".my-buttons button");
