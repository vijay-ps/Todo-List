let input = document.getElementById("inputbox");
let add = document.getElementById("add");
let todolist = document.querySelector(".todolist");

add.classList.add("btn");
add.addEventListener("click", function () {
  let todo = document.createElement("div");
  let para = document.createElement("h2");
  let cancel = document.createElement("button");
  let strike = document.createElement("button");
  strike.innerHTML = "✔";
  todo.classList.add("todocontainer");

  strike.classList.add("tick");
  para.innerHTML = input.value;
  cancel.innerHTML = "X";
  todo.appendChild(para);
  todo.appendChild(strike);
  todolist.appendChild(todo);

  para.classList.add("paratext");
  todo.classList.add("todoclass");
  input.value = "";
  strike.addEventListener("click", function () {
    para.style.textDecoration = "line-through";
    strike.remove();
    todo.appendChild(cancel);
    cancel.classList.add("close");
    cancel.addEventListener("click", function () {
      todo.remove();
    });
  });
});
