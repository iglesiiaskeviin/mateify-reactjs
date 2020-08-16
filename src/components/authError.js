import React from 'react';
import {LoginHeader} from '../components/loginHeader.js';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


class ErrorAutentication extends React.Component{
    render(){
        return(
            <div>
                <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
                <div className="col abs-center">
                    <div className="col-xs">
                         <LockOutlinedIcon color="secondary" /> 
                    </div>
                    <div className="col-xs text-center error-container">
                        <h1>MMM... algo no salió bien</h1>
                        <p>Debes estar autenticado para acceder a esta página</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorAutentication;