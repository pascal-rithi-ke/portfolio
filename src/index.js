import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './report/reportWebVitals';

import App from './container/App';
import Project from './component/Project';
import NavBar from './component/NavBar';
import CustomCursor from "./component/CustomCursor";

import './style/App.css';

ReactDOM.render(
  <BrowserRouter>
    <CustomCursor/>
    <NavBar/>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/project" element={<Project/>}></Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
