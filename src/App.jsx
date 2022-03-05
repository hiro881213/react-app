import { ColoredMessage } from './components/ColoredMessage';
import { useState } from 'react';

import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion';


import './App.scss';

function App() {

    // Stateの定義
    const [num, setNum] = useState(0);

    // // numが変化したときの処理
    // useEffect(() => {
    //     alert();
    // }, [num])


    // ボタンクリック処理
    const onClickButton = () => {

        // カウントアップする
        setNum(num + 1);

    };

  return (
    <>
    <div className="App">
      <main>
        <h1 style = {{ color: "red" }}>こんにちは</h1>

        <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
        <ColoredMessage color = "pink">元気です</ColoredMessage>

        <button onClick={onClickButton}>カウントアップ</button>
        <p>{num}</p>
        
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </main>
    </div>
    </>
  );
}

export default App;
