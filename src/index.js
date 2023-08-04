import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './approuter';
// import * as serviceWorker from './client/serviceWorker';

import './client/assets/css/bootstrap.min.css'
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
//fontawesome

import 'react-image-lightbox/style.css';
import "react-datepicker/dist/react-datepicker.css";
//carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// import './client/assets/css/aos.css'

if(!window.location.pathname.includes("admin") && !window.location.pathname.includes("pharmacyadmin")) {
    require('./client/assets/css/all.css')
    require('./client/assets/css/all.min.css')
    require('./client/assets/css/fontawesome.min.css')
    require('./client/assets/css/style.css')
    require('./client/assets/js/popper.min.js')
   
}


ReactDOM.render(<AppRouter/>, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}