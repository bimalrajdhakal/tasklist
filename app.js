// Define UI variables

const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-task');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');


// Load all event Listener

loadEventListeners();

// Load all event Listener funcation

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit',addTask);
  // Remove task event
  taskList.addEventListener('click',removeTask);
  // Clear all task event 
  clearBtn.addEventListener('click',clearAllTask);
  // Filter tasks
  filter.addEventListener('keyup',filterTasks);
}

// Add Task
function addTask(e){
    // checking input is empty
    if(taskInput.value===''){
      alert('add a task');
    }

    // Create li element

    const li = document.createElement('li');
    // Add a class to li
    li.className='collection-item';

    // Create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a Hyperlink element 

    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';

    // Add icon html 

    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li

    li.appendChild(link);

    // Append li to ul

    taskList.appendChild(li);
    // clear input field
    taskInput.value='';

    // prevent default behavior
    e.preventDefault();
}

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all task 

function clearAllTask(){
  // one way 
  /* taskList.innerHTML=''; */

  // another way which is faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks 

function filterTasks(e){
  const textFilter = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLocaleLowerCase().indexOf(textFilter) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}
