import axios from "axios";
import React, { useEffect, useState } from "react";


export const News = () => {
       const [news, setNews] = useState([]);

    var token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => (
        axios.get('https://localhost:7189/api/NewsAPI',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " +token
        },
      }).then(response => (setNews(response.data)))

    ), [])
     var obj = [{
           Author : "Author",
          Image:'/img/news.png',
         Title :"Title",
       Date : "12/02/2023",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeatvoluptas nihil deserunt pariatur eligendi," ,
      Deadline:"20/02/2023" ,
     },
     {
           Author : "Author",
          Image:'/img/news.png',
         Title :"Title",
       Date : "12/02/2023",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeatvoluptas nihil deserunt pariatur eligendi," ,
      Deadline:"20/02/2023" ,
          },
          {
           Author : "Author",
          Image:'./img/news.png',
         Title :"Title",
       Date : "12/02/2023",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeatvoluptas nihil deserunt pariatur eligendi," ,
      Deadline:"20/02/2023" ,
     },
     ]
    return<>
        <h1 style={{textAlign:"center",paddingTop:"20px",color:"GrayText"}}>News</h1>
       <section style={{
        padding:"60px 13vw",
        display:"flex"

         }}>
              {news?.map((item, index) => (
              <div >
                        <img src="./img/news.png" height={'300'} width={'300'} alt='' className="img-h"/>
                        <h3 style={{ paddingLeft: "20px" }}>{item.Title}
        <span style={{paddingLeft:"220px"}}>{item.Date}</span>
        </h3>
        <p style={{ width:"90%", paddingLeft:"25px" }}>{item.Description}</p>
        </div>

     ))}
        
      
       </section>
    </>
}