import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Navbar/Nav';
import Usenav from './components/userNav/Usenav';
import Adnav from './components/Sellernav/Adnav';
import Uhome from './pages/User/uhome/Uhome';
import Seller from './pages/Seller/Seller';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  <App /></BrowserRouter>
  
    {/* <Nav/> */}
    {/* <Usenav/> */}
   
    {/* <Usenav/> */}
    {/* <Adnav/> */}
    {/* <Uhome/> */}
    {/* <Seller/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
