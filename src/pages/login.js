import React from 'react';
import {LoginHeader} from '../components/loginHeader.js';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CheckUser from '../components/checkUser.js';
import ErrorAutentication from '../components/authError.js';

/* databaseImport */
import Data from '.././databases/userData.json';

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault()
        let userEmail = this.state.email;
        let userPass = this.state.password;
        let verification = (userData) => {
            if (userEmail === userData.email && userPass === userData.password) {
                return true;
            } else {
                return false;
            }
        }
       const userChecked = Data.some(verification);
       console.log(userChecked);

       /* 
       const userChecked = Data.filter(verification);
       console.log(userChecked);
       */
    }

    render(){
    return (
    <div className="col-xs">
        <LoginHeader CoName="Mateify" CoLogoImg="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png"/>
        <div className="col-12 abs-center">
            <form action="" className="form col-lg-4 col-xs-12 login-form-control">
                <div className="col-12 p-5 text-center">
                    <LockOutlinedIcon color="secondary" />
                    <h1 className="logIn-h11">Ingresar</h1>
                </div>
                <div className="form-group col-lg">
                <input 
                    type="text" 
                    className="form-control" 
                    name="email"
                    placeholder="Correo Electrónico" 
                    value={this.state.email}
                    onChange={e=> this.setState({email: e.target.value})}
                />
                </div>
                <div className="form-group col-lg">
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    placeholder="Contraseña" 
                    value={this.state.password} 
                    onChange={e=> this.setState({password: e.target.value})}
                    />
                </div>
                <div className="text-center">
                    <div className="col-lg">
                    <Button 
                    variant="contained" 
                    className="btn-create" 
                    color="secondary" 
                    type="submit"
                    onClick={ e => this.onSubmit(e)}
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
}

export default LoginForm;
