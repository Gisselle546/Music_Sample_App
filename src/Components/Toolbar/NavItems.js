import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItems.css';

const NavItems = (props)=>(

    <ul className="list">
      <li className="item"><NavLink to="/artist">Artists</NavLink></li>
    </ul>




);

export default NavItems;
