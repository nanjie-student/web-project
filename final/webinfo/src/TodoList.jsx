import { useState } from 'react';
import todoData from './todos';

function TodoList() {
  const [todos, setTodos] = useState(todoData);
  const [newTask, setNewTask] = useState('');

  function addTask(task) {
    const id = task; // Assumes task name will be unique
    const todo = {
      id,
      task,
      done: false,
    };
    setTodos({
      ...todos,
      [id]: todo,
    });
    setNewTask('');
  }


  const list = Object.values(todos).map( todo => {
    const doneClass = todo.done ? 'todo-list__task--done' : '';
    return (
      <li className="todo-list__item" key={todo.id}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={ () => {
          }}
          className="todo-list__checkbox"
        />
        <span
          className={`todo-list__task ${doneClass}`}
          onClick={ () => {
          }}
        >
          {todo.task}
        </span>
      </li>
    );
  });

  return (
    <div className="todo-list">
      <ul className="todo-list__list">
        {list}
      </ul>
      <form onSubmit={ (e) => {
        e.preventDefault();
      }}>
      <input
        className="todo-list__new-task"
        value={newTask}
        onInput={ (e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        type="submit"
        className="todo-list__add"
        onClick={ () => addTask(newTask) }
      >
        Add
      </button>
      </form>

    </div>
  );
};

export default TodoList;
