import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Page1'


// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponents } from './components/StyledComponents'
// import { Emotion } from './components/Emotion';
// import { Tailwind } from './components/Tailwind';

import './App.scss';

function App() {

  return (
    <>
      <div className="App">
        <main>

          <BrowserRouter>
            <h1>Hello React Router</h1>
            <Routes>
              <Route path="/" element={<Page1 />} ></Route>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );

}

// function App() {




  // return (
  //   <>
        
  //       <CssModules />
  //       <StyledJsx />
  //       <StyledComponents />
  //       <Emotion />
  //       <Tailwind /> */}
  //     </main>
  //   </div>
  //   </>
  // );
// }

export default App;
