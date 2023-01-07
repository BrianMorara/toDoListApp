const task=document.querySelector('#task');
const inputBtn=document.querySelector('.inputBtn');
const container=document.querySelector('.container');

inputBtn.addEventListener('click',()=>{
    const stuff= document.createElement('div');
    stuff.classList.add('addedTask'); 
   
   const taskToDo=document.createElement('li');
   taskToDo.classList.add('li');
   taskToDo.innerHTML=`${task.value}`;
   stuff.appendChild(taskToDo);
   
   if(task.value===''){
    alert('Task cannot be empty!');
   }else{
    container.appendChild(stuff);
   }

  task.value='';

  let checkedBtn=document.createElement('button');
  checkedBtn.innerHTML='Don';
  checkedBtn.classList.add('checkBtn');
  taskToDo.appendChild(checkedBtn);

  checkedBtn.addEventListener('click',()=>{
   taskToDo.parentElement.style.textDecoration='line-through';
  });

  let deleteBtn=document.createElement('button');
  deleteBtn.innerHTML='Del';
  deleteBtn.classList.add('deleteBtn');
  taskToDo.appendChild(deleteBtn);

  deleteBtn.addEventListener('click',(e)=>{
   e.target.parentElement.parentElement.remove();
  })
});