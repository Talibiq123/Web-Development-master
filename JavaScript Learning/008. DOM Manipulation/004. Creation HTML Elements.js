// Craeting HTML elements using JavaScript elements

// Add new HTML elements to page

// innerHTML to add html element
// const todoList = document.querySelector('.todo-list');
// console.log(todoList);
// todoList.innerHTML = "<li>New ToDo List</li>"

// When you should use it, when you should not



// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);






// elem.insertAdjacentHTML(where, html)
// beforebegin;
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
console.log(todoList);