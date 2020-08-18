import React from 'react';
import {Button} from '@material-ui/core';
import LoginForm from '../src/pages/login.js';
import {LoginHeader} from './components/loginHeader.js';
import {LoggedHeader} from './components/loggedHeader.js';
import ErrorAutentication from '../src/components/authError.js';
import {PlaylistCreator} from '../src/components/plyCreator.js';
import {HomePage} from '../src/pages/homePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/plyCreator/:uuid"><HomePage/></Route>
          <Route path="/authError"><ErrorAutentication/></Route>
          <Route path='/'><PlaylistCreator /></Route>
          {/* <Route path="/"><LoginForm/></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
