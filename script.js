let addbutton = document.querySelector(".buttons")
let inpNode = document.querySelector("#inputdiv")
const form = document.getElementById('task-form');

let sortimage = document.querySelector(".sortimage")
let tasksbox = document.querySelector(".tasks")

let inpDel = document.querySelector(".removeinp");
let inpClone = inpNode.cloneNode(true)


function onSubmit() {
	e.preventDefault();
	const inputField = document.getElementById('enter');
	addTask(inputField.value);
	form.reset();
};


inpDel.addEventListener("click",()=>{
    document.getElementById("enter").value = ""
})
addbutton.addEventListener("click",()=>{
    let test = document.querySelector("#inputdiv")
    if(test == null){
        const appendElement = document.querySelector(".tasks");
        appendElement.append(inpClone)
        document.getElementById("enter").value = ""
        let inpDel = document.querySelector(".removeinp");
        inpDel.addEventListener("click",()=>{
        document.getElementById("enter").value = ""
        })
    }
    let count2i=0;
    document.querySelectorAll(".task").forEach(()=>{
        count2i++;
    })
    if(count2i>4){
        let tasksel = document.querySelector(".tasks")
        tasksel.scrollTop = tasksel.scrollHeight;
        
    }
    let  input = document.getElementById("enter")
    input.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        if( document.getElementById("enter").value != ""){
            let task = input.value;
            let node = document.getElementById("simple")
            let clone = node.cloneNode(true)
            clone.removeAttribute('id');
            clone.classList.add("task")

            const appendElement = document.querySelector(".tasks");
            appendElement.append(clone)

            let tasksel = document.querySelector(".tasks")
            tasksel.scrollTop = tasksel.scrollHeight;

            let newtasktext = document.querySelector(".task:last-child .taskin")
            newtasktext.innerHTML = task

            let removeinp = document.querySelector("#inputdiv")
            appendElement.removeChild(removeinp)

            const remove = document.querySelector(".task:last-child .remove")
            remove.addEventListener("click",()=>{
                appendElement.removeChild(clone)

                let countelement = document.querySelectorAll(".task")
                let count=0;
                countelement.forEach((item)=>{
                    count++;
                    
                })
                if(count == 0){
                    const appendElement = document.querySelector(".tasks");
                    appendElement.append(inpClone)
                    document.getElementById("enter").value = ""
                }
            })
            const taskelements = document.querySelectorAll(".task")
            let countsc=0;
            taskelements.forEach(()=>{
                countsc++;
            })
        }
    }
})
})
function sortArray() {
  var i, switching, b, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  
  while (switching) {
    
    switching = false;
    b = tasksbox.querySelectorAll(".task");
  
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          sortimage.src = "/image/arrow.svg";
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          sortimage.src = "/image/deletearrow.svg";
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

function onSubmit() {
	e.preventDefault();
	const inputField = document.getElementById('enter');
	addTask(inputField.value);
	form.reset();
};
let  number = document.getElementById("enter")
    number.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        
        if( document.getElementById("enter").value != ""){
            let task = number.value;
            let node = document.getElementById("simple")
            let clone = node.cloneNode(true)
            clone.removeAttribute('id');
            clone.classList.add("task")
            const appendElement = document.querySelector(".tasks");
            appendElement.append(clone)
            
            let newtasktext = document.querySelector(".task:last-child .taskin")
            newtasktext.innerHTML = task
            let removeinp = document.querySelector("#inputdiv")
            appendElement.removeChild(removeinp)
            
            const remove = document.querySelector(".task:last-child .remove")
            remove.addEventListener("click",()=>{
                appendElement.removeChild(clone)
                let countelement = document.querySelectorAll(".task")
                let count=0;
                countelement.forEach(()=>{
                    count++;
                })
                if(count == 0){
                    const appendElement = document.querySelector(".tasks");
                    appendElement.append(inpClone)
                    document.getElementById("enter").value = ""
                    let inpDel = document.querySelector(".removeinp");
                    inpDel.addEventListener("click",()=>{
                    document.getElementById("enter").value = ""
                    })
                }
            })
            
        }
    }
})
new Sortable(tasksbox, {
animation: 200,
});