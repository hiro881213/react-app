import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Page1'
import { Page2 } from './Page2'

import './App.scss';

function App() {

  return (
    <>
      <div className="App">
        <main>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Page1 />} ></Route>
              <Route path="/page2" element={<Page2 />} ></Route>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );

}

export default App;
