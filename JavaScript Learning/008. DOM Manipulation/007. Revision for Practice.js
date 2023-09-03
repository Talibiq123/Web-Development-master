// const container = document.querySelector("div");
// console.log(container.childNodes);


// const sectionToDo = document.querySelector(".section-todo");
// console.log(sectionToDo.classList);

// sectionToDo.classList.add('bg-dark');
// sectionToDo.classList.remove("container");
// const ans = sectionToDo.classList.contains("container");
// console.log(ans);

// sectionToDo.classList.toggle("bg-dark");


// const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");







// add HTML element using JavaScript
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New ToDO</li>";
// todoList.innerHTML = todoList.innerHTML + "<li>new todo</li>"
// todoList.innerHTML += "<li>new todo</li>"
// todoList.innerHTML += "<li>Teach Students</li>"



// document.createElement
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Studentd");
// newTodoItem.append(newTodoItemText);

// const todoList = document.querySelector(".todo-list");
// todoList.appendChild(newTodoItem);
// console.log(newTodoItem);

// append
// prepand



// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "teach student";

// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);



// remove
// const todol = document.querySelector('.todo-list li');
// todol.remove();
// console.log(todol);




// remove
// after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "teach student";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);




// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");




// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);




// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";


// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);





// 118
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);


// 119
// how to get the dimension of element
// height width 
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const height = sectionTodo.getBoundingClientRect().height;
console.log(info);
console.log(height);