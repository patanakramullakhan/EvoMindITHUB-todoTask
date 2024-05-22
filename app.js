
let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

function addTask(){

  if(inputBox.value===''){
    alert("insert values")
  }
  else{
      let task = document.createElement('li')
      task.textContent = inputBox.value;

      listContainer.appendChild(task);

      let span = document.createElement('span')
      span.textContent = '\u00d7'
      task.appendChild(span)

  }
 inputBox.value= '';


}
listContainer.addEventListener('click' , (el)=>{
  if(el.target.tagName == 'LI'){
    el.target.classList.toggle('checked')
  }
  

})
