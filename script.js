const form = document.getElementById("form");
const input = document.getElementById("input");
const todo = document.getElementById("todo");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoText = input.value;
    if(todoText){
    const todos = document.createElement('li');
    todos.innerText = todoText;
    todos.addEventListener('click',(e)=>{
         e.preventDefault();
         todos.classList.toggle("completed");
         updateList();
     });
    todos.addEventListener('contextmenu',(e)=>{
         e.preventDefault();
         todos.remove();
         updateList();
     })
    todo.appendChild(todos);
    input.value=" ";
    }
    updateList();
});

function updateList(){
     let a = document.querySelectorAll('li');
     let b = [];
     a.forEach((e)=>{
            b.push({
                text:e.innerText,
                completed:e.classList.contains("completed")
            });
     });
     localStorage.setItem("b",JSON.stringify(b));
}