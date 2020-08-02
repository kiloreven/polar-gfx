import React from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import KillFeed from "./csgo/KillFeed";

library.add(fab, fas)

function App() {
  return (
    <div className="content" style={{'background-color': '#CCC', height: '1080px', width: '1920px'}}>
        <div className="ebu-safemargins-graphics-1080p" />
        <div className="ebu-safemargins-content-1080p" />
        <div className="content-super">
            <h1>Super</h1>
        </div>
        <div className="content-ticker">
            <strong>
                {"Ticker! | Polar utsolgt, opprør i Tønsberg sentrum | "}
                <FontAwesomeIcon icon={['fab', "discord"]}/> {"polarparty.no/discord | "}
                <FontAwesomeIcon icon={['fab', "youtube"]}/> {"polarpartyno | "}
                <FontAwesomeIcon icon={['fab', "instagram"]}/> {"polarpartyno | "}
                <FontAwesomeIcon icon={['fab', "facebook"]}/> {"facebook.com/polarpartyno | "}
                <FontAwesomeIcon icon={['fab', "twitter"]}/> {"polarpartyno | "}
            </strong>
        </div>
        <div className="content-frame" >
            <h3>
            Content <br />
            1280x720
             </h3>
        </div>
            <KillFeed 
                matchName="Semifinale 1" teamLeft="Smiths bestevenner" teamRight="Vaflene til Berit" yPos="38px"
                xPos="1385px" timeLeft="12:34" scoreLeft={3} scoreRight={14} playingTo={15} matchpintsLeft={1}
                matchpintsRight={0} teamLeftType="ct" teamRightType="t"
            />
            <KillFeed
                matchName="Semifinale 2" teamLeft="Team2" teamRight="Team0" yPos="550px"
                xPos="1385px" timeLeft="43:21" scoreLeft={8} scoreRight={2} playingTo={15} matchpintsLeft={0}
                matchpointsRight={0} teamLeftType="t" teamRightType="ct"
            />
        </div>
  );
}

export default App;
