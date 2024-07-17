import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './routes/index'
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.React_App_Access_Token}`
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);


reportWebVitals();
