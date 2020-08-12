import React from 'react';
import {Button} from '@material-ui/core';
import {Login} from '../src/pages/login.js';
import {LoginHeader} from './components/loginHeader.js';
import {LoggedHeader} from './components/loggedHeader.js';

function App() {
  return (
    <LoggedHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
  );
}

export default App;
