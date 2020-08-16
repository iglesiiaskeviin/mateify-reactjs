import React from 'react';
import {Button} from '@material-ui/core';
import LoginForm from '../src/pages/login.js';
import {LoginHeader} from './components/loginHeader.js';
import {LoggedHeader} from './components/loggedHeader.js';
import ErrorAutentication from '../src/components/authError.js';
import {PlaylistCreator} from '../src/pages/plyCreator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/"><LoginForm/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
