import React, { useEffect, useState } from "react";
import './App.css';
import Login  from "./Login";
import { getTokenFromUrl } from "./music";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValues } from "./DataLayer";


const s= new SpotifyWebApi(); 

function App() {
  // const [token,setToken]= useState(null);
  const [{user, token}, dispatch] = useDataLayerValues();

  //run code based on a given condition
useEffect(() => {
    const hash = getTokenFromUrl();
   window.location.hash = "";
    const _token =hash.access_token;

if(_token){
  s.setAccessToken(_token);
  dispatch({
    type:"SET_TOKEN",
    token : _token,
  }
  );
  // setToken(_token);
  // giving access token to spotify
  s.getMe().then((user) =>{
    
    dispatch({
      type:'SET_USER',
      user: user,
    });
  });

  s.getUserPlaylists().then((playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  });

  s.getPlaylist('3JKphgfAgODU2rHvhp9vRo').then((response) =>{
    dispatch({
    type:"SET_DISCOVER_WEEKLY",
    discover_weekly:response,
      });
     });


}
   
},  [token,dispatch]);
   

  return (
    <div className="app">
      {
        token ? 
         <Player music={s} />
         : 
          <Login />
      }
     
    </div>
  );
}

export default App;
