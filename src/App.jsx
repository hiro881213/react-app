import { ColoredMessage } from './components/ColoredMessage';
import { useState } from 'react';


export const App = () => {

    // Stateの定義
    const [num, setNum] = useState(0);

    // ボタンクリック処理
    const onClickButton = () => {

        // カウントアップする
        setNum(num + 1);

    };

    return (
        <>

            <h1 style = {{ color: "red" }}>こんにちは</h1>

            <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color = "pink">元気です</ColoredMessage>

            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
    );

};
