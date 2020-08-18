import React from 'react';
import {LoggedHeader} from '../components/loggedHeader';
import { useParams } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  /* DB */
import Data from '.././databases/userData.json';

export const HomePage = props => {

        let { uuid } = useParams();
        /* hacer lo mismo que en login */
        const userImage = (e) => {
            if (e.uuid) {
                return true;
            }else{
                return false;
            }
        }

        const userArrayImg = Data.filter(userImage);
        if (userArrayImg.length > 0) {
            return  (
                    <div>
                    <LoggedHeader userPhoto={userArrayImg[0].profilePictureUrl}/>
                    
                    {/* search */}
                    {/* <LoggedHeader value={userImage}/> */}
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

}