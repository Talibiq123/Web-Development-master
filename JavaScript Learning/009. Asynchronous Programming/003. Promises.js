// Promise

// produce
// console.log("Script starts...");
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']; //for resolve
// // const bucket = ['coffee', 'chips', 'vegetables', 'rice']; // for reject
// const friedRicePromise = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")) {
//         resolve("Fried Rice!!!!");
//     } else {
//         reject("could't do it.");
//     }
// })

// consume
// friedRicePromise.then((myFriedRice) => {
//     console.log("let's eat ", myFriedRice);
// }, (error) => {
//     console.log(error);
// })

// friedRicePromise.then((myFriedRice) => null, (error) => {
//     console.log(error);
// })

// friedRicePromise.then((myFriedRice) => {
//     console.log("let's eat ", myFriedRice);
// }, () => { null})


// friedRicePromise.then(
//     (myFriedRice) => {
//     console.log("Let's eat", myFriedRice);
//     }
// ).catch((error) => {console.log(error)});

// setTimeout(() => {
//     console.log("Hello, fromo setTimeout");
// }, 0)


// for (let i = 0; i <=10; i++) {
//     console.log(Math.random(), i);
// }
// console.log("Script ends.");


// function returning Promise
// function ricePromise() {
//     const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
//     return new Promise((resolve, reject) => {
//         if (bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')) {
//             console.log({value: "friedRice"});
//     } else {
//         console.log("couldn't make friedRice")}
//     }) 
// }

// ricePromise().then(
//     (myFriedRice) => {
//     console.log("Let's eat", myFriedRice);
//     }
// ).catch((error) => {console.log(error)});



// promise && setTimeout 


// I want to resolve / reject promise after 2 seconds 


// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})




// Promise resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//     console.log(value);
// })

// then(): always returns Promise.
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         console.log("foo");
//     })
// }

// myPromise()
//     .then((value) => {
//         console.log(value);
//         value += "bar";
//         return value;
//         // return Promise.resolve(value);
// })
// .then((value) => {
//     console.log(value);
// })




const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

//   const retuenedPromise = changeText(heading1, "one", "red", 1000)
//   .then(() => {
//     return changeText(heading2, "two", "purple", 1000)
//   })
//   .then(() => {
//     return changeText(heading3, "three", "orange", 1000)
//   })
//   .then(() => {
//     changeText(heading4, "four", "green", 1000)
//   })

changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "five", "Fuchsia", 1000))
  .then(()=>changeText(heading6, "six", "Maroon", 1000))
  .then(()=>changeText(heading7, "seven", "tomato", 1000))
  .then(()=>changeText(heading8, "eight", "blue", 1000))
  .then(()=>changeText(heading9, "nine", "navy", 1000))
  .then(()=>changeText(heading10, "ten", "purple", 1000))
  .catch((error)=>{
      alert(error);
  })