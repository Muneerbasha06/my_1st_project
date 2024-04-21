import logo from './logo.svg';
import './App.css';
//import "./index";
//import Product from "./product."
//import Calculator from "./calculator"
import Navbar from "./navbar"
//import Fetch from './fetch';
//import Form from './submitFirebase';
import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Axios from './axios';
import Shopping from "./shopping";

import Main from './pages/main';
const App=()=>{
    return(

//    <BrowserRouter>

//    <Axios/>

   
//    <Navbar/>
   
//    <Routes>
   
//     <Route path="/" exact element={<Home></Home>} ></Route>
//     <Route path="/about" exact element={<About/>} ></Route>
//  <Route path="/dashboard" exact element={<Dashboard/>}></Route>
   
//    </Routes>
//    <Food/>
//    </BrowserRouter>

<div className='heading'>
<h1  ></h1>
<Main/>
 </div>
 
   
    )
}
export default App;  