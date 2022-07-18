import { todos } from './index.js';// eslint-disable-line
const todoItem = document.querySelector('.todo-item');
export default () => {
  localStorage.setItem('todos', JSON.stringify(todos));
  if (todos.todo.completed) {
    todoItem.classList.add('done');
  } else {
    todoItem.classList.remove('done');
  }
};
