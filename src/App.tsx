import React from 'react';
import './App.css';
import {Navbar} from "./view/Navbar/Navbar";
import {MainContent} from "./view/MainContent/MainContent";
import {Footer} from "./view/footer/Footer";

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
