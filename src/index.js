import './index.css';
import {deleteTask, clearCompleted} from './action.js';// eslint-disable-line
import submit from './addTask.js';// eslint-disable-line
import change from './change.js';// eslint-disable-line

export const todos = JSON.parse(localStorage.getItem('todos')) || []; // localstorage with array
export const todoList = document.querySelector('#todo-list');

export const DisplayTodos = () => {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', todo.id);

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

    // input.classList.add('checkbox');
    input.type = 'checkbox';
    input.checked = todo.completed;
    span.classList.add('bubble');

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');

    content.innerHTML = `<input type="text" value="${todo.description}" readonly>`;
    edit.innerHTML = '<i class="fas fa-edit"></i>';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.completed) {
      todoItem.classList.add('done');
    }
    input.addEventListener('change', (e) => {
      document.location.reload();
      todo.completed = e.target.checked;
      change();
      DisplayTodos();
    });

    edit.addEventListener('click', () => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          input.setAttribute('readonly', true);
          todo.description = e.target.value;
          localStorage.setItem('todos', JSON.stringify(todos));
          DisplayTodos();
        }
      });
    });

    deleteButton.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        deleteTask(
          JSON.parse(e.target.parentElement.parentElement.getAttribute('data-id')),
        );
        DisplayTodos();
        document.location.reload();
      }
      deleteTask();
    });
    clearCompleted();
  });
};

window.addEventListener('load', () => {
  submit();
  DisplayTodos();
});

const reload = () => {
  document.querySelector('#reload').addEventListener('click', () => {
    document.location.reload(); // eslint-disable-line
  });
};
reload();
