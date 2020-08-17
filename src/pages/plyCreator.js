import React from 'react';
import {LoggedHeader} from '../components/loggedHeader';

/* hacer que reconozca uuid mediante el login  */
export const PlaylistCreator = props => {
    return (
        <div >
            <LoggedHeader />
            {/* tu playlist container */}
            <div className="your-ply-container abs-center">
                <div className="col-lg-8 col-xs-8 your-ply-text ">
                    <p>Tu playlist</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-12">Nombre</th>
                                <th scope="col-12">Artista</th>
                                <th scope="col-12">Duración</th>
                                <th scope="col-12">Cant. Votos</th>
                                <th scope="col-12">Votar</th>
                            </tr>
                            </thead>
                                <tbody>
                                <tr>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
