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
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './views/Login';
import { Register } from './views/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route  path={'/home'} element={<Home />} />
    <Route  path={'/students'} element={<Students />} />
    <Route  path={'/events'} element={<Events />} />
    <Route  path={'/news'} element={<News />} />
    <Route  path={'/partners'} element={<Partners />} />
    <Route  path={'/login'} element={<Login />} />
    <Route path={'/login/register'} element={<Register/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
