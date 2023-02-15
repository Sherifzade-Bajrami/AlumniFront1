import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Students } from './views/Students';
import { Events } from './views/Events';
import { News } from './views/News';
import { Partners } from './views/Partners';
import { About } from './views/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { RegisterAdmin } from './views/RegisterAdmin';
import { Faq } from './views/Faq';
import { Center } from './views/Center';
import { Team } from './views/Team';
import { OurProgram } from './views/OurProgram';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route  path={'/Home'} element={<Home />} />
      <Route  path={'/students'} element={<Students />} />
      <Route  path={'/events'} element={<Events />} />
      <Route  path={'/news'} element={<News />} />
      <Route path={'/partners'} element={<Partners />} />
      <Route  path={'/about'} element={<About />} />
      <Route  path={'/faq'} element={<Faq />} />
      <Route path={'/center'} element={<Center />} />
      <Route path={'/team'} element={<Team />} /> 
      <Route path={'/ourprogram'} element={<OurProgram />} />  

      <Route path={'/login'} element={<Login />} />
      <Route path={'/login/register'} element={<Register />} />
      <Route path={'/login/registeradmin'} element={<RegisterAdmin/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
