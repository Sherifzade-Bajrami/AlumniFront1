import React from "react";
import { Link } from "react-router-dom";

export const Header =() =>{
    return<>
        <header>
            <ul>
                <li><Link to ="/home">Home</Link></li>
                <li><Link to ="/students">Students</Link></li>
                <li><Link to ="/events">Events</Link></li>
                <li><Link to ="/news">News</Link></li>
            </ul>
        </header>
    
    
    </>
}