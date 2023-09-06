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
function myPromise() {
    return new Promise((resolve, reject) => {
        console.log("foo");
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value;
        // return Promise.resolve(value);
})
.then((value) => {
    console.log(value);
})