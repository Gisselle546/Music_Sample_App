import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Controls.css';

const controls=(props)=>(
  <div className="controls" onClick={props.clicked}>
  { props.play
      ? <FontAwesomeIcon icon= "pause" size="6x" className="iconn"/>
      : <FontAwesomeIcon icon= "play" size="6x" className="iconn"/> 
    }

  </div>


);

export default controls;
