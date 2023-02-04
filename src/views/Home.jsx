import React from "react";



export const Home = ()=>{
    return<>
      <section
        style={{  
             backgroundImage: "url(" + "https://thealumnisociety.com/wp-content/uploads/2020/04/The-Alumni-Society-banner_5-2000x800.jpg" + ")",
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             height:"600px"
        }}
        >
      </section>  
      <section
      style={{
        backgroundColor:"rgb(230, 228, 227)",
        height:"600px"
      }}
      >
          <h1
            style={{
                textAlign:"center",
                color:"white",
                paddingTop:"50px",
                paddingLeft:"100px",
                paddingRight:"100px",
                fontFamily:"monospace",
                color:"black",
                letterSpacing:"2px"
            }}>Our exclusive events serve as a networking platform for members and partners to connect, learn from one another,
             and grow together whether in-person or online. From our annual Leadership Summit to our Influencers Dinners and virtual 
             SocietyCast series, we unite and amplify the voices of the most brilliant Latino minds in America.</h1>
             <br></br>
             <hr></hr>
             <section
             style={{
                paddingTop:"50px",
                padding:" 60px 7vw"
             }}

             >
             <img src={require('./img/news.png')} height={'300'} width={'400'} alt='' className="img-h"/>
             <img src={require('./img/events.jpg')} height={'300'} width={'400'} alt='' className="img-h"/>
             <img src={require('./img/students.jpg')} height={'300'} width={'400'} alt='' className="img-h"/>


                
             </section>

      </section>
       
    </>
}