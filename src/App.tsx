import React from 'react';
import './App.css';
import {Navbar} from "./Navbar/Navbar";
import {MainContent} from "./MainContent/MainContent";

function App() {
  return (
      <>
          <div>
              <Navbar />
              <MainContent />
          </div>
      </>
  );
}

export default App;
