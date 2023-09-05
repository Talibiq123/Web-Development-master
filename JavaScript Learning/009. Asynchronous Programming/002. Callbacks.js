// Callbacks :
// A callback is a function that is passed as an argument to another function and is executed after some asynchronous
// operation or a task is completed. In simpler terms, it's like telling JavaScript, "Hey, when you're done with this task, here's
// what I want you to do next."
// Example usage 1:
// function myFunc1(callback) {
//     console.log("Function is doing task 1");
//     callback();
// }

// function myFunc2() {
//     console.log("Function is doing task 2");
// }

// myFunc1(() => {
//     console.log("Function is doing task 2");
// });


// Example usage 2:
// function getTwoNumbers(number1, number2, onSuccess, onFailure) {
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         onSuccess(number1, number2);
//     } else {
//         onFailure();
//     }
// }

// function addTwo(num1, num2) {
//     console.log(num1 + num2);
// }

// getTwoNumbers("4", 5, (num1, num2) => console.log(num1 + num2), () => {
//     console.log("Wronge DatType");
//     console.log("Please pass numbers onlt!!!");
// });




// callbacks, callback hell, pyramind of doom
// Asynchronous Programming
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
// callback hell
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)


// function textChange(element, text, color, time) {
//     setTimeout(() => {
//         element.textcontent = text;
//         element.style.color = color;
//     }, time);
// }
// textChange(heading1, "One", "Violet", 1000);
// textChange(heading2, "Two", "purple", 2000);
// textChange(heading3, "Three", "red", 2000);
// textChange(heading4, "Four", "pink", 1000);
// textChange(heading5, "Five", "green", 2000);
// textChange(heading6, "Six", "blue", 3000);
// textChange(heading7, "Seven", "brown", 1000);


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(()=>{
      if(element){
        element.textContent = text;
        element.style.color = color;
        if(onSuccessCallback){
          onSuccessCallback();
        }
      }else{
        if(onFailureCallback){
          onFailureCallback();
        }
      }
    },time)
  }
  // pyramid of doom
  changeText(heading1, "One","Black",1000,()=>{
    changeText(heading2, "Two","gray",2000,()=>{
      changeText(heading3, "Three","teal",1000,()=>{
        changeText(heading4, "Four","yellow",1000,()=>{
          changeText(heading5, "Five","green",2000,()=>{
            changeText(heading6, "Six","blue",1000,()=>{
              changeText(heading7, "Seven","brown",1000,()=>{
                changeText(heading8, "Eight","cyan",1000,()=>{
                  changeText(heading9, "Nine","maroon",1000,()=>{
                    changeText(heading10, "Ten","olive",1000,()=>{
                      
                    },()=>{console.log("Heading10 does not exist")})
                  },()=>{console.log("Heading9 does not exist")})
                },()=>{console.log("Heading8 does not exist")})
              },()=>{console.log("Heading7 does not exist")})
            },()=>{console.log("Heading6 does not exist")})
          },()=>{console.log("Heading5 does not exist")})
        },()=>{console.log("Heading4 does not exist")})
      },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
  },()=>{console.log("Heading1 does not exist")})