import React from 'react';
import {Button} from '@material-ui/core';
import LoginForm from '../src/pages/login.js';
import {LoginHeader} from './components/loginHeader.js';
import {LoggedHeader} from './components/loggedHeader.js';
import ErrorAutentication from '../src/components/authError.js';


function App() {
  return (
    /* use ReactRouter */
    <div>
      <LoginForm/>
    </div>
  );
}

export default App;
