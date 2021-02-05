import React from 'react';

const Navigation = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="home" className="navbar-brand">
          Мой блог
        </a>
        <div className="mr-auto navbar-nav">
          <a href="/" className="nav-link active">
            Главная
          </a>
          <a href="/about" className="nav-link">
            Эбаут ми
          </a>
        </div>
        <form className="form-inline">
          <input
            type="text"
            placeholder="Input article..."
            className="mr-sm-2 form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Navigation;
