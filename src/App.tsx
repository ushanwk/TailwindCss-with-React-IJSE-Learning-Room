import React from 'react';
import './App.css';
import {Navbar} from "./view/common/Navbar/Navbar";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {DefaultLayout} from "./view/pages/DefaultLayout/DefaultLayout";

function App() {
  return (
      <BrowserRouter>
             <DefaultLayout/>
      </BrowserRouter>
  );
}

export default App;
