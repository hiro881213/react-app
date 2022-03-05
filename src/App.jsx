import { ColoredMessage } from './components/ColoredMessage';
import { useEffect, useState } from 'react';


export const App = () => {

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
            <h1 style = {{ color: "red" }}>こんにちは</h1>

            <ColoredMessage color = "blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color = "pink">元気です</ColoredMessage>

            <button onClick={onClickButton}>カウントアップ</button>
            <p>{num}</p>

            <div>
                <p>CSS Modules</p>
                <button>ボタン</button>
            </div>


        </>
    );

};
