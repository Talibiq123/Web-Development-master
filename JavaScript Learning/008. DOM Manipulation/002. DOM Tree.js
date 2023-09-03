// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.dir(htmlElementNode);

// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textElementNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textElementNode);
// console.log(bodyElementNode);

// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling.textContent);

// console.log(headElementNode.nextElementSibling);
// console.log(headElementNode.childNodes);




// const h1 = document.querySelector("h1");
// console.log(h1);
// const body = h1.parentNode.parentNode;
// body.style.color = "#EFEFEF";
// body.style.backgroundColor = "#333";

// const body = document.body;
// console.log(body);


// const head = document.querySelector('head');
// console.log(head);

// const title = document.querySelector('title');
// console.log(title.childNodes);


const container = document.querySelector('.container');
// console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
console.log(container.children); // HTMLCollection(2) [h1, p]

// const body = document.querySelector('body');
// console.log(body.childNodes);