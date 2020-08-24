import React, { useState } from 'react';

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
import MusicData from '.././databases/songData.json';
import { useHistory } from "react-router-dom";
import { NotMusic } from '../components/notMusic.js';
/* MATERIAL UI */
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const HomePage = () => {

        let { uuid } = useParams();

        const history = useHistory();

        const [inputValue, setInputValue] = useState("")

        const [filterList, setFilterList] = useState([])


        const onChange = (e) => {
            setInputValue(e.target.value)
        }

        const filterListMusic = (music) => {
            console.log("Buscado en el input: " + inputValue)
            console.log("Canción: "+music)
            if (music.name.includes(inputValue)) {
                return true;
            }else{
                return false;
            }
        }

        const onInputKeyPress = (e) => {
            if (e.key == 'Enter') {
                const results = MusicData.filter(filterListMusic); 
                setFilterList(results);
            }
        } 

        const handleAddMusic = (e, songData) => {
            console.log("Se ejecuta el handleAddMusic");
            console.log(songData);

            
            
            

            //add to user playlist 
          };

        /*  */
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
                    <div className="form-group col-xs p-5 flex-searchPly">
                    <div className="col-xs-12 col-lg-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="searchbar"
                            placeholder="Buscar" 
                            onChange={onChange}
                            onKeyPress={onInputKeyPress} 
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
                                {filterList.map((songs) => (
                                    <tbody key={songs.uuid}>
                                    
                                        <td>{songs.name}</td>
                                        <td>{songs.artist.name}</td>
                                        <td>{songs.album}</td>
                                        <td>{songs.duration}</td>
                                        <td><AddCircleIcon onClick={(e) => handleAddMusic(e, songs)} color="secondary"/></td>
                                    </tbody>
                                ))}
                            </table>
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
                                        <th scope="col-12">Álbum</th>
                                        <th scope="col-12">Duración</th>
                                        <th scope="col-12">Agregar</th>
                                    </tr>
                                </thead>
                            </table>
                           {/*  <NotMusic/> */}
                        </div>
                    </div>
                </div>
            </div>
            )
        }else{
            history.push(`/authError`)
        }

}