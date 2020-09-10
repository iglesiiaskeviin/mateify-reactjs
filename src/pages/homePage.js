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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


export const HomePage = () => {

        let { uuid } = useParams();

        const history = useHistory();

        const [inputValue, setInputValue] = useState("")

        const [filterList, setFilterList] = useState([])

        const [myPlaylist, setMyPlaylist] = useState([]);
        


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
            if (e.key === 'Enter') {
                const results = MusicData.filter(filterListMusic); 
                setFilterList(results);
            }
        } 
 
        const handleAddMusic = (songData) => {
            
            //si no encontró
            if (!myPlaylist.find(newS => newS.name === songData.name)) {
                setMyPlaylist([
                    ...myPlaylist,
                    songData
                ]);   
            }else{
                alert("Esa canción ya se encuentra en Tu Playlist!")
            }

            


        };


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
                                    <div className="cover-url-img">
                                        <img src={songs.artist.coverUrl} alt="" srcset=""/>
                                        <td>
                                            <h5>{songs.name}</h5>
                                        </td>
                                    </div>
                                        <td>{songs.artist.name}</td>
                                        <td>{songs.album}</td>
                                        <td>{songs.duration}</td>
                                        <td><AddCircleIcon onClick={(e) => handleAddMusic(songs)} color="secondary"/></td>
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
                                        <th scope="col-12">Cant. Votos</th>
                                        <th scope="col-12">Votar</th>
                                    </tr>
                                </thead>
                            {myPlaylist.map((c)=> (
                                <tbody className="p-2" key={c.uuid}> 
                                    <div className="cover-url-img">
                                        <img src={c.artist.coverUrl} alt="" srcset=""/>
                                        <td>
                                            <h5>{c.name}</h5>
                                        </td>
                                    </div>
                                    
                                    <td>{c.artist.name}</td>
                                    <td>{c.album}</td>
                                    <td>{c.duration}</td>
                                    <td>0</td>
                                    <div className="like-unlike p-3"><ThumbUpIcon/><br/><ThumbDownIcon/></div>
                                </tbody>
                            ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            )
        }else{
            history.push(`/authError`)
        }

}