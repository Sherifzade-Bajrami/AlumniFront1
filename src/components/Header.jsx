import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export const Header =() =>{
    return<>
        <header>
            <ul className="ul-container">
                <img src={require('./img/logo1.png')} height={'50'} width={'300'} alt='' className="img-h"/>
                <li className="link-item"><Link to ="/home">Home</Link></li>
                <li className="link-item"><Link to ="/students">Students</Link></li>
                <li className="link-item"><Link to ="/events">Events</Link></li>
                <li className="link-item"><Link to ="/news">News</Link></li>
                <li className="link-item"><Link to ="/partners">Partners</Link></li>

                <li className="link-item"><button className="btn"><Link to='/login'>Login</Link></button></li>
            </ul>
        </header>
    
    
    </>
}