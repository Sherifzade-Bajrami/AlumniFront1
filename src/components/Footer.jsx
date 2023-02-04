import React from "react";
import './Header.css';


export const Footer = () =>{
    return <>
        <footer>
            <section 
                style={{
                    background:"rgb(26, 23, 23)",
                    textAlign:"center"
                }}
            >
             <img src={require('./img/logo2.png')} height={'100'} width={'200'} alt='' />

            </section>
        </footer>
    
    </>
}