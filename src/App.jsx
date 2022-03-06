import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Page1'

// import { ColoredMessage } from './components/ColoredMessage';
// import { useState } from 'react';

// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponents } from './components/StyledComponents'
// import { Emotion } from './components/Emotion';
// import { Tailwind } from './components/Tailwind';

import './App.scss';

function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/" element={<Page1 />} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );

}

// function App() {

    // // Stateの定義
    // const [num, setNum] = useState(0);

    // // numが変化したときの処理
    // useEffect(() => {
    //     alert();
    // }, [num])


    // // ボタンクリック処理
    // const onClickButton = () => {

    //     // カウントアップする
    //     setNum(num + 1);

    // };

  // return (
  //   <>
  //   <div className="App">
  //     <main>
  //       {/* <BrowserRouter>
  //         <Switch>
  //           <Route exact path = "/" component = {page1} />
  //         </Switch>
  //       </BrowserRouter> */}
  //       {/* <h1 style = {{ color: "red" }}>こんにちは</h1>

  //       <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
  //       <ColoredMessage color = "pink">元気です</ColoredMessage>

  //       <button onClick={onClickButton}>カウントアップ</button>
  //       <p>{num}</p>
        
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
