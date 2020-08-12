import React from 'react';
import {LoginHeader} from '../components/loginHeader.js';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login = () => {
    return (
        <div className="text-center main-section ">
            <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
            <div className="col-xs-6 col-lg-5 my-auto mx-auto p-5">
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

    )
}


/* 
<IconButton>
                    <SvgIcon>
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </SvgIcon>
                </IconButton>
*/