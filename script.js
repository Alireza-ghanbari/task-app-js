const inpEl = document.getElementById("inp");
const btnEl = document.getElementById("btn");
const ulEl = document.getElementById("list-container");

btnEl.addEventListener("click", () => {
  if (inpEl.value === "") {
    alert("Please enter a task");
  } else {
    ulEl.innerHTML += `<li class="flex items-center justify-between gap-3 lists mt-5 cursor-pointer">
    <div class="flex items-center gap-3">
      <div class="ax"></div>
      <p class="text-lg">
        ${inpEl.value}
      </p>
    </div>
    <span class="font-semibold hover:bg-slate-100 px-1 rounded-full cursor-pointer z-50"
      >x</span
    >
  </li>`;

    inpEl.value = "";
    saveData()
  }
});

ulEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI"){
    console.log(e.target)
    e.target.classList.toggle("checked");
    saveData()
    
  }else if(e.target.tagName === "P" || e.target.tagName === "DIV"){
    e.target.parentElement.parentElement.classList.toggle("checked");
    saveData()

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
});


function saveData(){
    localStorage.setItem("data", ulEl.innerHTML)
}

function showTasks(){
    ulEl.innerHTML = localStorage.getItem("data")
}

showTasks()