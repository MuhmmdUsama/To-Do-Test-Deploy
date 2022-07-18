import { todos, DisplayTodos } from './index.js'; // eslint-disable-line

const newTodoForm = document.querySelector('#new-todo-form');
const submit = () => {
  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = {
      description: e.target.elements.content.value,
      completed: false,
      id: Date.now(),
      index: todos.length + 1,
    };
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset the form
    e.target.reset();

    DisplayTodos();
  });
};

export default submit;
