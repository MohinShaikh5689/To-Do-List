const a = document.getElementById('a');
const btn = document.getElementById('b');
const todo = document.getElementById('to')

a.style.backgroundColor = "white";
btn.style.backgroundColor = "#352F44";
todo.style.backgroundColor = "#352F44"
todo.style.color = "white"
btn.style.color = "white";

function toggleD(){

  if (a.style.backgroundColor == "white"){

    a.style.backgroundColor = "#352F44";
    btn.style.backgroundColor = "white";
    btn.style.color="black"
    todo.style.backgroundColor = "White"
    todo.style.color = "Black"
    document.getElementById('b').innerHTML="Light Mode";

    
  }

  else{

    a.style.backgroundColor = "white";
    btn.style.backgroundColor = "#352F44";
    btn.style.color="white"
    todo.style.backgroundColor = "#352F44"
    todo.style.color = "white"
    document.getElementById('b').innerHTML="Dark Mode";

  }

}

let Input = document.getElementById("Input");
let Task = document.getElementById("task-list");

        function submit(){
            if (Input.value == ""){
                alert("BSDK kuch to dal 🗿");
            }

            else{
                let li = document.createElement("li");
                li.innerHTML = `<p>${Input.value}</p>
    <div class="task-buttons">
        <button class="complete" onclick="completeTask(event)">
            <img src="check.svg" />
        </button>
        <button class="delete" onclick="deleteTask(event)">
            <img src="del.svg" />
        </button>
    </div>`;
                Task.appendChild(li);
                
            }

            Input.value = "";
        }

        const completeTask = (e) => {
            const task = e.target.closest("li");
            if (task.classList.contains("task-checked")) {
              task.classList.remove("task-checked");
            } else {
              task.classList.add("task-checked");
            }
           
          };

        
        const deleteTask = (e) => {
            const task = e.target.closest("li");
            task.remove();
            
          };

          function Clear(){
             Task.innerHTML="";
          }
