
let todoList = [
  {
    item: 'first task', 
    dueDate: '4/10/2024'
  },
  {
    item: 'second task', 
    dueDate: '4/10/2024'
  }
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
 
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;


  todoList.push({item: todoItem, dueDate:todoDate });
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    // destructering the object, previous two lines can be 
    // replaced with one line below
    let {item, dueDate} = todoList[i];
    newHtml +=`
    
      <span>${item}</span>
      <span>${dueDate}</span>

      <button class = "btn-delete" onclick ="
      todoList.splice(${i}, 1 ); 
      displayItems();
      ">Delete</button>
    
    `;
  }
  containerElement.innerHTML = newHtml;
}
