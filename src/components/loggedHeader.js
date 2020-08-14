import React from 'react';
import UserImg from '../databases/userData.json';

export const LoggedHeader = props => {
    return (
        <nav class="navbar justify-content-between login-navbar">
            <img className="user-photo" src="https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png" alt=""/>
            <h1 className="mateify-h1">Mateify</h1>
            <form action="" className="in-line">
                {/* pasarle mediante props el uuid del usuario registrado para que de esta forma solo me retorne el img de ese uuid */}
            {UserImg.map((img, index)=>{
                return <img  className="user-photo" src={img.profilePictureUrl} alt=""/>
                })}
            </form>
        </nav>
    )
}