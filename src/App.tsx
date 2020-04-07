import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './pages/home';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
      </ BrowserRouter>
    </Provider>
  );
}

export default App;
