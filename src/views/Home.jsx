import React from "react";


export const Home = ()=>{
    return<>
        
        <main>
            <h1>This is Home page</h1>
            <img className="img-fluid" 
             src={`${process.env.PUBLIC_URL}/src/img/1222.png`} 
             alt="logo"/>
        </main>
    </>
}