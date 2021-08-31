import React from 'react'
import Body from './Body';
import './player.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
function Player({s}) {
    return (
        <div className="player" >
            <div className="player_body">
               <Sidebar />
                 <Body music={s}/>


            </div>
            
            <Footer />
        </div>
    );
}

export default Player;
