import React from 'react';
import TodoItem from './components/TodoItem';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
      color: 'grey',
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
      color: 'blue',
    },
  ]);
  const [activeColor, setActiveColor] = React.useState('grey');
  const [inputValue, setInputValue] = React.useState('');

  const getLastTaskId = () => {
    return tasks.length === 0 ? tasks.length : tasks[tasks.length - 1].id;
  };

  const addTask = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.trim()) {
        if (activeColor || 'grey')
          setTasks([
            ...tasks,
            { id: getLastTaskId() + 1, text: inputValue, color: activeColor, complete: false },
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

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          task.complete = !task.complete;
        }
        return task;
      }),
    );
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
            item={obj}
            key={obj.id}
            text={obj.text}
            onComplete={completeTask}
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
