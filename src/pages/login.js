import React, { useState } from 'react';
/* COMPONENTS */
import {LoginHeader} from '../components/loginHeader.js';
import {LoggedHeader} from '../components/loggedHeader.js';
import ErrorAutentication from '../components/authError.js';
/* ASSETS */
import IconButton from '@material-ui/core/IconButton';
import {Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom"
/* DB */
import Data from '.././databases/userData.json';

const LoginForm = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();
    
    const change = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };


    const onSubmit = (e) => {
        e.preventDefault()
        const userExits = (element) => {
            if (element.email === state.email && element.password === state.password) {
                return true;
            } else {
                return false;
            }
        }
    const userExitsArray = Data.filter(userExits);
    
    if(userExitsArray.length > 0){
        history.push(`/plyCreator/${userExitsArray[0].uuid}`)
    }else{
        history.push(`/authError`)
    }

    
    
    }
    return (
    <div className="col-xs">
        <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
        <div className="col-12 abs-center">
            <form action="" className="form col-lg-4 col-xs-12 login-form-control">
                <div className="col-12 p-5 text-center">
                    <img src="https://cdn.discordapp.com/attachments/406536989811146784/744841536063406230/padlock.png" alt="" srcset=""/>
                    <h1 className="logIn-h11">Ingresar</h1>
                </div>
                <div className="form-group col-lg">
                <input 
                    type="text" 
                    className="form-control" 
                    name="email"
                    placeholder="Correo Electrónico" 
                    value={state.email}
                    onChange={change}
                />
                </div>
                <div className="form-group col-lg">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    placeholder="Contraseña" 
                    value={state.password} 
                    onChange={change}
                    />
                </div>
                <div className="text-center">
                    <div className="col-lg">
                    <Button 
                    variant="contained" 
                    className="btn-create" 
                    color="secondary" 
                    type="submit"
                    onClick={onSubmit}
                    >
                    Comienza a crear playlists
                    </Button>
                    </div>
                </div>
                <div className="my-4 text-center not-remember-pass-container">
                    <p>¿Has olvidado la contraseña?</p>
                </div>
                <hr/>
                <div className="col-12 my-4 text-center">
                    <p className="not-account">¿No tienes cuenta?</p>
                    <Button selected style={{
                        borderRadius: 4,
                        color: "#009688",
                        fontSize: "20",
                        fontFamily: 'Roboto',
                        fontWeight: "500",
                    }} 
                    variant="outlined" 
                    type="submit">
                    REGISTRATE
                    </Button>
                </div>
            </form>
        </div>
    </div>

    )
}

export default LoginForm;
