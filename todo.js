const todos = JSON.parse(localStorage.getItem('todo')) || [];
const list = document.getElementsByClassName('list')[0];
const todo = document.getElementsByClassName('todo')[0];
const dueDate = document.getElementsByClassName('todo')[1];
const addBtn = document.getElementsByClassName('add')[0];
const delAllBtn = document.getElementsByClassName('danger')[0];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Novr", "Dec"];
var count = -1;

todo.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    addTodo();
  }
});
addBtn.addEventListener('click', addTodo);
list.addEventListener('click', delTodo)
delAllBtn.addEventListener('click', delAllTodo);

function countdown(date, i)
{
  var due = new Date(date).getTime();
  var diff;

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = due - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    diff = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      document.getElementById('dueDateElement' + i.toString()).style.color = "red";
      distance = now - due;
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

      diff = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

     document.getElementById('dueDateElement' + i.toString()).innerHTML = diff;
  }, 100);
}

function breakDownDate()
{
  dueYear = dueDate.value.substring(0,4);
  dueMon = dueDate.value.substring(5,7);
  dueDay = dueDate.value.substring(8,10);
  dueHour = dueDate.value.substring(11,13);
  dueMin = dueDate.value.substring(14,16);
  dueMonth = months[dueMon - 1];
  date = dueMonth + " " + dueDay + ", " + dueYear + " " + dueHour + ":" + dueMin + ":59";
  return date;
}

function addTodo() {
  count++;
  date = breakDownDate();
  countdown(date, count);
  const newTodo = "Task: " + todo.value.trim() + " Due: " + date + " Countdown: ";
  if (newTodo == '') { return };
  todos.push(newTodo);
  todo.value = '';
  saveTodos();
}

function delTodo(e) {
  count--;
  if (e.target.nodeName !== 'A') { return };
  const dataNum = e.target.dataset.num;
  todos.splice(dataNum, 1);
  saveTodos();
}


function delAllTodo() {
  count = -1;
  todos.length = 0;
  saveTodos();
}

function saveTodos() {
  var todosStr = JSON.stringify(todos);
  localStorage.setItem('todo', todosStr);
  updateTodos();
}

function updateTodos() {
  let str = '';
  for (let i = 0; i < todos.length; i++) {
    str += `<li>${todos[i]} <p id="dueDateElement${i}" style="margin: 0 0 0; color:green; font-weight:bold;"></p><a href="#" data-num="${i}">Delete</a></li><hr style="height:1px; border-width:0; color:black; background-color:grey; margin-top:5px; margin-bottom:5px;">`
  }
  list.innerHTML = str;
  if (todos.length !== 0) {
    delAllBtn.classList.remove('hide');
  } else {
    delAllBtn.classList.add('hide');
  }
}

updateTodos();