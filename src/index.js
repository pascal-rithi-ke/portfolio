import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './report/reportWebVitals';

import App from './container/App';
import Project from './component/Project';
import NavBar from './component/NavBar';
import CustomCursor from "./component/CustomCursor";

import './style/App.css';
import ScrollBar from './component/ScrollBar';

ReactDOM.render(
  <BrowserRouter basename="/">
    <ScrollBar/>
    <CustomCursor/>
    <NavBar/>
  <Routes>
    <Route path="/portfolio" element={<App/>}></Route>
    <Route path="/portfolio/project" element={<Project/>}></Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
