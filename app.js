const form = document.getElementById("task-form"),
      collection = document.querySelector("ul.collection"),
      taskInput = document.getElementById('task'),
      clearTasks = document.querySelector('.clear-tasks');

//Listeners

getEventListeners();

function getEventListeners(){

  form.addEventListener("submit", submitForm);
  collection.addEventListener("click", removelis);
  clearTasks.addEventListener("click", clearTask);

}

function submitForm(e){
   var text = document.querySelector("#task").value;
   creatTable(text);
   console.log(text);

   e.preventDefault() ;

}

function creatTable (val) {

   let lis = document.createElement("li");
   lis.className = 'collection-item';
   lis.appendChild(document.createTextNode(val));
   let link = document.createElement("a");
   link.className = "delete-item secondery-content";
   link.innerHTML = `<i class="fa fa-remove"></i>`

   lis.appendChild(link);
  //console.log(lis);

   collection.appendChild(lis);
   taskInput.value = "";
}

function removelis(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearTask(e) {
  var listSize = collection.childElementCount;
  if(listSize != 0){
    collection.remove(collection.childNodes);
  }
}