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





// keypress Event
// const body = document.body;
// body.addEventListener("keypress",(e) =>{
//         console.log(e.key);
// })


// mouseover event
// const body = document.body;
// body.addEventListener("mouseover",(e) =>{
//         console.log(e.target);
// });

// const mainButton = document.querySelector(".btn-headline");
// mainButton.addEventListener("mouseover",() => {
//         console.log("mouseover event occured!!!");
// })

// mouseleave event
// const mainButton = document.querySelector(".btn-headline");
// mainButton.addEventListener("mouseleave",() => {
//         console.log("mouseleave event occured!!!");
// })




// console.log("Hello, world!");
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// event bubbling/ event propagation
// console.log("Event Bubbling or Event Propagation");
// console.log("\n");
// grandparent.addEventListener("click", () => {
//         console.log("you clicked on Grandparent!!!");
// });
// parent.addEventListener("click", () => {
//         console.log("you clicked on Parent!!!");
// });
// child.addEventListener("click", () => {
//         console.log("you clicked on Child!!!");
// });
// document.body.addEventListener("click", () => {
//         console.log("you clicked on Body!!!");
// });


// event capturing
// grandparent.addEventListener("click", () => {
//         console.log("capture !!! Grandparent!!!");
// }, true);
// parent.addEventListener("click", () => {
//         console.log("capture !!! Parent!!!");
// }, true);
// child.addEventListener("click", () => {
//         console.log("capture !!! Child!!!");
// }, true);
// document.body.addEventListener("click", () => {
//         console.log("capture !!! Body!!!");
// }, true);

// grandparent.addEventListener("click", () => {
//         console.log("you clicked on Grandparent!!!");
// });
// parent.addEventListener("click", () => {
//         console.log("you clicked on Parent!!!");
// });
// child.addEventListener("click", () => {
//         console.log("you clicked on Child!!!");
// });
// document.body.addEventListener("click", () => {
//         console.log("you clicked on Body!!!");
// });


// Event Delegation: Event delegation is a design pattern in JavaScript where you attach a single event listener to a parent element,
// rather than attaching multiple event listeners to individual child elements. This parent element then handles events that bubble up
// from its child elements.Event delegation is particularly useful when dealing with a large number of child elements or dynamically
// generated content.

// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", (e) => {
//         console.log(e.currentTarget);
// })


// todo form in html
// const todoForm = document.querySelector(".form-todo");
// todoForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log("form submitted");
// })


const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});