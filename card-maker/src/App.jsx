import React from 'react';
import Login from './commponent/login/login';
import styles from './App.module.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Maker from './commponent/maker/maker';

const App = ({authService, FileInput, cardRepository}) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
        <Login authService={authService}/>
        </Route>
        <Route exact path='/maker'>
          <Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;<Login />