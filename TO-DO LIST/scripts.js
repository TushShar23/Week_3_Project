const adBtn = document.querySelector("#add");
let ctr = 1;

function createTodoComponent(){
    const parentdiv = document.querySelector("#tasks");
    const val = document.querySelector("#task-input").value;
    const NewElDiv = document.createElement("div");
    const NewElspan = document.createElement("span");
    const NewElbtn = document.createElement("button");
    const NewEleditbtn = document.createElement("button");
    const btndiv = document.createElement("button");
    NewEleditbtn.textContent="Edit";
    NewElbtn.textContent = "Delete";
    NewElbtn.setAttribute("id","Delete-btn");
    NewEleditbtn.setAttribute("id","Edit-btn");
    NewEleditbtn.classList.add("tasks-btn");
    NewElbtn.classList.add("tasks-btn");
    NewElspan.innerHTML = val;
    btndiv.classList.add("btn-div");
    NewElDiv.classList.add("my-tasks");
    NewElDiv.setAttribute("id",ctr);
    NewElspan.classList.add("tasks-span");
    btndiv.appendChild(NewEleditbtn);
    btndiv.appendChild(NewElbtn);
    NewElDiv.appendChild(NewElspan);
    NewElDiv.appendChild(btndiv);

    document.querySelector("#task-input").value = "";

    NewElbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        parentdiv.removeChild(NewElDiv);
    })

    NewEleditbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        const exisTingVal= NewElspan.textContent;
        const newinput = document.createElement("INPUT");
        newinput.value = exisTingVal;
        newinput.setAttribute("type","text");
        newinput.classList.add("converted-input");
        NewElspan.replaceWith(newinput);

        newinput.addEventListener('keypress',(e)=>{
            if(e.key === "Enter"){
                const newval = newinput.value;
                NewElspan.textContent = newval;
                newinput.replaceWith(NewElspan);
            }
        })
        
       // main thing here in edit() is that we have used replacWith() which is a very helpful function in this functionality. 

    })

    ctr++;
    
    if(NewElspan.textContent !== ""){
        return NewElDiv;
    }
    else{
        alert("Write a valid message");
    }

}


// function deletecmp(){
//     const parentdiv = document.querySelector("#tasks");
//     parentdiv.removeChild();
// }

function render(){
    const parentDiv = document.querySelector("#tasks");
    const newelement = createTodoComponent();
    parentDiv.appendChild(newelement);
    console.log(newelement);
}

adBtn.addEventListener('click',(e)=>{
    render();
})



