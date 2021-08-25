import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import VooduploCont from "./components/Vooduplo/Vooduplo";
import Faq from "./components/Faq/Faq";
import Curso from "./components/Curso/Curso";
import WhatsappContainer from './components/Whatsapp/Whatsapp'

import Reservar from "./components/Reservar/Reservar";
import About from "./components/About/About";

import './index.scss';
import App from './App';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import store from './store/store'
import { Provider } from 'react-redux'
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  
  <Provider store = {store}>

    <BrowserRouter> 
    <Navbar></Navbar>
  <WhatsappContainer/>
    <Switch>
      <Route exact path="/"><App /></Route> 
      <Route path="/vooduplo"><VooduploCont /></Route>
      <Route path="/curso"><Curso /></Route>
      <Route path="/regalar"><Reservar /></Route>
      <Route path="/about"><About /></Route>
      </Switch>
      <Footer></Footer>
      
    </BrowserRouter>
    </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
