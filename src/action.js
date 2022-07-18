export const deleteTask = (taskId) => {
  const data = JSON.parse(localStorage.getItem('todos'));
  const arrClear = data.filter((elem) => elem.id === taskId);
  arrClear.forEach((e) => {
    const index = data.indexOf(e);
    data.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(data));
  });
};

export const clearCompleted = () => {
  document.querySelector('.clear-all').addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    const arrClear = data.filter((elem) => elem.completed);
    arrClear.forEach((e) => {
      const index = data.indexOf(e);
      data.splice(index, 1);
    });

    localStorage.setItem('todos', JSON.stringify(data));
    document.location.reload();
  });
};
