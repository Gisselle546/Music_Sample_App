import React from 'react';
import musiclogo from '../../../assets/images/musiclogo.jpg';
import {Link} from 'react-router-dom';
import './Logo.css';

const Logo = (props)=>(
    <div className="Logo">
      <Link to={"/"}>
        <img src={musiclogo} alt="musiclogo"/>
      </Link>
    </div>
);

export default Logo;
