import React from 'react';
import {LoggedHeader} from '../components/loggedHeader';
import { useParams } from "react-router-dom"
/* hacer que reconozca uuid mediante el login  */
export const PlaylistCreator = props => {

    return (
        <div>
            <LoggedHeader />
                {/* search */}
                <div className="form-group col-xs p-5 flex-searchPly">
                <div className="col-xs-12 col-lg-5">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="email"
                        placeholder="Buscar" 
                    />
                    </div>
                </div>
                {/* tu playlist search */}
                <div className="container">
                    <p className="search-yourPly text-left mx-3">Resultados</p>
                    <div className="col-lg">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col-12">Nombre</th>
                                    <th scope="col-12">Artista</th>
                                    <th scope="col-12">Álbum</th>
                                    <th scope="col-12">Duración</th>
                                    <th scope="col-12">Agregar</th>
                                </tr>
                            </thead>
                        </table>
                            <p className="not-result-text">No hay resultados: utiliza la barra de búsqueda para encontrar canciones</p>
                        </div>
                    </div>
                </div>
            {/* tu playlist container */}
            <div className="container my-5">
                <div className="col-lg your-ply-text ">
                    <p className="search-yourPly text-left">Tu playlist</p>
                    <div className="table-responsive">
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
                    </table>
                        <div className='not-music-info col-xs-12 col-lg-5'>
                            <p>UPS!, TU PLAYLIST AÚN ESTÁ VACÍA</p>
                            <span>Comienza a agregar canciones</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}