import React from "react";


export const News = ()=>{
  
    return<>
        <h1 style={{textAlign:"center",paddingTop:"20px",color:"GrayText"}}>News</h1>
       <section style={{
        padding:"60px 13vw",
        display:"flex"

       }}>
        <div >
        <img src={require('./img/news.png')} height={'300'} width={'300'} alt='' className="img-h"/>
        <h1 style={{
            paddingLeft:"20px"
        }}
        >Title
        <span style={{paddingLeft:"200px"}}>data</span>
        </h1>
        <p style={{
            width:"80%",
            paddingLeft:"25px"
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
        <div >
        <img src={require('./img/news.png')} height={'300'} width={'300'} alt='' className="img-h"/>
        <h1 style={{
            paddingLeft:"20px"
        }}
        >Title
        <span style={{paddingLeft:"200px"}}>data</span>
        </h1>
        <p style={{
            width:"80%",
            paddingLeft:"25px"
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
        <div >
        <img src={require('./img/news.png')} height={'300'} width={'300'} alt='' className="img-h"/>
        <h1 style={{
            paddingLeft:"20px"
        }}
        >Title
        <span style={{paddingLeft:"200px"}}>data</span>
        </h1>
        <p style={{
            width:"80%",
            paddingLeft:"25px"
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
       </section>
    </>
}