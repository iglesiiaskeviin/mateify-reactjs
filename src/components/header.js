import React from 'react';


export const Header = props => {
    return (
        <nav class="navbar text-center">
            <div className="col-12">
                <div className="cointainer header-cont p-1">
                    <img className="maitefy_logo" src={props.CoLogoImg} alt="MateifyLogo"/><h1>{props.CoName}</h1>
                </div>
            </div>
        </nav>
    )
}
