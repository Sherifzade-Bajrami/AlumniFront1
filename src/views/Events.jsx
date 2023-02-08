import axios from "axios";
import React, { useEffect, useState } from "react";


export const Events = () => {

      const [events, setEvents] = useState([]);

    var token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => (
        axios.get('https://localhost:7189/api/EventsAPI',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " +token
        },
      }).then(response => (setEvents(response.data)))

    ), [])
    console.log(events);
    
    return<>
        <h1 style={{textAlign:"center",paddingTop:"20px",color:"GrayText"}}>Events</h1>
       <section style={{paddingLeft:"80px",paddingTop:"50px"}}>
        <div style={{display:"flex"}} >
        <img src={require('./img/events.jpg')} height={'300'} width={'300'} alt='' className="img-h"/>
        <div>
        <h1 style={{paddingLeft:"40px"}} >Title</h1>
        <h3 style={{paddingLeft:"40px",paddingTop:"10px"}}>Author</h3>   
        <p style={{paddingLeft:"40px",paddingTop:"10px",width:"70%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti omnis officia nulla 
        magni alias dolorum adipisci nihil accusamus quia dignissimos hic quam odit enim, corrupti amet quibusdam temporibus obcaecati?</p>
        <h3 style={{paddingLeft:"40px",paddingTop:"110px"}}>date</h3>
        <p style={{paddingLeft:"40px"}}>deadline</p>
        </div>
        </div>
        
        <div style={{display:"flex",paddingTop:"40px"}} >
        <img src={require('./img/events.jpg')} height={'300'} width={'300'} alt='' className="img-h"/>
        <div>
        <h1 style={{paddingLeft:"40px"}} >Title</h1>
        <h3 style={{paddingLeft:"40px",paddingTop:"10px"}}>Author</h3>   
        <p style={{paddingLeft:"40px",paddingTop:"10px",width:"70%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti omnis officia nulla 
        magni alias dolorum adipisci nihil accusamus quia dignissimos hic quam odit enim, corrupti amet quibusdam temporibus obcaecati?</p>
        <h3 style={{paddingLeft:"40px",paddingTop:"110px"}}>date</h3>
        <p style={{paddingLeft:"40px"}}>deadline</p>
        </div>
        </div>
       
        <div style={{display:"flex",paddingTop:"40px"}} >
        <img src={require('./img/events.jpg')} height={'300'} width={'300'} alt='' className="img-h"/>
        <div>
        <h1 style={{paddingLeft:"40px"}} >Title</h1>
        <h3 style={{paddingLeft:"40px",paddingTop:"10px"}}>Author</h3>   
        <p style={{paddingLeft:"40px",paddingTop:"10px",width:"70%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti omnis officia nulla 
        magni alias dolorum adipisci nihil accusamus quia dignissimos hic quam odit enim, corrupti amet quibusdam temporibus obcaecati?</p>
        <h3 style={{paddingLeft:"40px",paddingTop:"110px"}}>date</h3>
        <p style={{paddingLeft:"40px"}}>deadline</p>
        </div>
        </div>
       <br></br>
       </section>
    </>
}