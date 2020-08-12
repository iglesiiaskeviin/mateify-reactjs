import React from 'react';


export const LoggedHeader = props => {
    return (
        <nav class="navbar justify-content-between login-navbar">
            <img className="user-photo" src="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png" alt=""/>
            <h1 className="mateify-h1">Mateify</h1>
            <form action="" className="in-line">
                <img className="user-photo" src={props.userPhoto} alt=""/>
            </form>
        </nav>
    )
}