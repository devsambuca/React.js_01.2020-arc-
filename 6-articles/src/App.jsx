import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Container from 'react-bootstrap/Container';
import FullArticlePage from './pages/FullArticlePage';
import { Route } from 'react-router-dom';
import { reducer, initialState } from './reducer';

export const StateContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container>
      <StateContext.Provider value={[state, dispatch]}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/articles/:id" component={FullArticlePage}></Route>
      </StateContext.Provider>
    </Container>
  );
}

export default App;
