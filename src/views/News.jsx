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
        <h3 style={{paddingLeft:"20px"}}>Title
        <span style={{paddingLeft:"220px"}}>data</span>
        </h3>
        <p style={{ width:"90%", paddingLeft:"25px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
        <div >
        <img src={require('./img/news.png')} height={'300'} width={'300'} alt='' className="img-h"/>
        <h3 style={{paddingLeft:"20px"}}>Title<span style={{paddingLeft:"220px"}}>data</span></h3>
         <p style={{width:"90%",paddingLeft:"25px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
        <div >
        <img src={require('./img/news.png')} height={'300'} width={'300'} alt='' className="img-h"/>
        <h3 style={{paddingLeft:"20px"}}>Title<span style={{paddingLeft:"220px"}}>data</span></h3>
        <p style={{width:"90%",paddingLeft:"25px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam placeat
             voluptas nihil deserunt pariatur eligendi,</p>
        </div>
       </section>
    </>
}