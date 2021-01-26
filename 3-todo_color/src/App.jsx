import React from 'react';
import TodoItem from './components/TodoItem';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
    },
  ]);
  const [activeColor, setActiveColor] = React.useState('grey');
  const [inputValue, setInputValue] = React.useState('');
  const [completed, setCompleted] = React.useState('');
  const addTask = (e) => {
    const lastId = tasks[tasks.length - 1].id + 1;
    if (e.key === 'Enter' && tasks.length) {
      if (e.target.value.trim()) {
        if (activeColor || 'grey')
          setTasks([
            ...tasks,
            { id: lastId, text: inputValue, color: activeColor, complete: false },
          ]);
      }
      setInputValue('');
    }
  };
  const removeTask = (taskId) => {
    const confirmRemove = window.confirm('Are you sure?');
    if (confirmRemove) {
      const newTasks = tasks.filter((t) => t.id !== taskId);
      setTasks(newTasks);
    }
  };

  const addColor = (color) => {
    setActiveColor(color);
  };

  const editTask = (id, value) => {
    const newValue = prompt('You are want to change the task?', value);
    if (newValue) {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.text = newValue;
          }
          return task;
        }),
      );
    }
  };
  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.map((obj) => (
          <TodoItem
            key={obj.id}
            text={obj.text}
            onUpdate={editTask}
            onDelete={removeTask}
            id={obj.id}
            color={obj.color}
          />
        ))}
        <div className="todo-input">
          <input
            type="text"
            placeholder="Текст задачи..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={addTask}
          />
          <ul>
            {colors.map((color) => (
              <li
                key={color}
                style={{ backgroundColor: `var(--${color})` }}
                onClick={() => addColor(color)}
                className={`todo-color ${activeColor === color ? 'active' : ' '}`}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
