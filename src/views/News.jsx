import React from "react";


export const News = ()=>{
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
              {obj.map((item, index) => (
              <div >
                        <img src={item.Image} height={'300'} width={'300'} alt='' className="img-h"/>
                        <h3 style={{ paddingLeft: "20px" }}>{item.Title}
        <span style={{paddingLeft:"220px"}}>{item.Date}</span>
        </h3>
        <p style={{ width:"90%", paddingLeft:"25px" }}>{item.Description}</p>
        </div>

     ))}
        
      
       </section>
    </>
}