import React from 'react';
import {LoginHeader} from '../components/loginHeader.js';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login = () => {
    return (
    <div className="col-xs">
        <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
        <div className="col-12 abs-center ">
            <form action="" className="form col-lg-3 col-xs-12 login-form-control">
                <div className="form-group col-lg">
                    <input type="text" class="form-control" id="" placeholder="Correo Electrónico"/>
                </div>
                <div className="form-group col-lg">
                    <input type="password" class="form-control" id="" placeholder="Contraseña"/>
                </div>
                <div className="text-center">
                    <div className="col-lg">
                    <Button variant="contained" className="btn-create" color="secondary" type="submit">
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


/* 
        <div className="text-center main-section">
            <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
            <div className="col-xs-6 col-lg-5 mx-auto my-auto justify-content-center align-items-center row">
                <div className="col-12 container-logo">
                    <LockOutlinedIcon color="secondary" />
                </div>
                <h1 className="logIn-h11">Ingresar</h1>
                <div className="form-group col-12">
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Correo Electrónico"/>
                </div>
                <div className="form-group col-12">
                    <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Contraseña"/>
                </div>
                <div className="col-12">
                <Button variant="contained" color="secondary" type="submit">
                    Comienza a crear playlists
                </Button>
                </div>
                <div className="col-12 my-4 not-remember-pass-container">
                    <p>¿Has olvidado la contraseña?</p>
                </div>
                <hr/>
                <div className="col-12 my-4">
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
            </div>
        </div>

*/