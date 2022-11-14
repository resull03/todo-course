let newTodo = document.querySelector(".todo_name");
let toDo_wrapper = document.querySelector(".wrapper");
let sort_btn = document.querySelector(".down");
let newTodoDiv = document.querySelector(".wrapper-con");
let toDo = [];
let inputDelete = document.querySelector(".delete-img");
inputDelete.addEventListener("click", () => {
  newTodo.value = "";
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (newTodo.value != "") {
      toDo.push(newTodo.value);
      let todoDiv = document.createElement("div");
      todoDiv.className = "item";
      toDo_wrapper.style.display = "block";
      let items = document.createElement("li");
      items.innerText = newTodo.value;
      items.classList.add("todo-item");
      todoDiv.appendChild(items);
      newTodo.style.display = "none";
      inputDelete.style.display = "none";
      let deletebtn = document.createElement("button");
      deletebtn.innerHTML = "<img src='img/delete.svg'>";
      deletebtn.classList.add("deleted-button");
      todoDiv.appendChild(deletebtn);
      toDo_wrapper.append(todoDiv);
      newTodo.value = "";
      toDo_wrapper.scrollTop = toDo_wrapper.scrollHeight;
      deletebtn.addEventListener("click", () => {
        let newTodo = document.querySelector(".todo_name");
        toDo_wrapper.removeChild(todoDiv);
        if (toDo_wrapper.childElementCount == 0) {
          toDo_wrapper.style.display = "none";
          newTodoDiv.style.display = "block";
          inputDelete.style.display = "block";
          newTodo.style.display = "block";
        }
      });
      let btn = document.querySelector(".button");
      btn.addEventListener("click", () => {
        newTodo.style.display = "block";
        inputDelete.style.display = "block";
        toDo_wrapper.style.display = "block";
        newTodoDiv.style.display = "block";
        newTodo.focus();
        toDo_wrapper.scrollTop = toDo_wrapper.scrollHeight;
      });
    }
  }
});
function sortListDir() {
  var i,
    switching,
    b,
    shouldSwitch,
    dir,
    switchcount = 0;
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    b = toDo_wrapper.querySelectorAll(".item");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          sort_btn.src = "img/down.svg";
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          sort_btn.src = "img/up.svg";
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

new Sortable(toDo_wrapper, {
  animation: 200,
});
