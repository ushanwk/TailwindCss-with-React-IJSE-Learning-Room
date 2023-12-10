import React from 'react';
import './App.css';
import {Navbar} from "./Navbar/Navbar";
import {MainContent} from "./MainContent/MainContent";
import {Footer} from "./footer/Footer";

function App() {
  return (
      <>
          <div>
              <Navbar/>
              <MainContent/>
              <Footer/>
          </div>
      </>
  );
}

export default App;
