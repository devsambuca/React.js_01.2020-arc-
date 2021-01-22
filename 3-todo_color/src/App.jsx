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
    if (e.key === 'Enter' && tasks.length) {
      if (e.target.value.trim()) {
        setTasks([
          ...tasks,
          { id: tasks.length + 1, text: inputValue, color: activeColor, complete: completed },
        ]);
      }
      setInputValue('');
    }
  };
  const removeTask = (task) => {
    const confirmRemove = window.confirm('Are you sure?');
    if (confirmRemove) {
      const newTasks = tasks.filter((t) => t.id !== task);
      setTasks(newTasks);
    }
  };

  const editTask = (id) => {
    const promptValue = prompt('You are want to change the task?');
    if (promptValue) {
      const updateTask = tasks.map((task, index) => {
        if (id === index + 1) {
          task.text = promptValue;
        }
        return task;
      });
      setTasks(updateTask);
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
              <li key={color.id} className={`todo-color ${color}`}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
