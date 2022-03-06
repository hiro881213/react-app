import { useState, memo } from "react";
import { Child1 } from "./components/chap6_child/Child1";
import { Child4 } from "./components/chap6_child/Child4";

export const Page3 = memo(() => {

    console.log("Page3レンダリング")

    // State
    const [num, setNum] = useState(0);

    // ボタンクリック処理
    const onClickButton = () => {
        setNum(num + 1);
    }

    // リセット処理
    const onClickReset = () => {
        setNum(0);
    }

    return (
        <>
            <button onClick = { onClickButton }>ボタン</button>
            <p>{num}</p>

            <Child1 onClickReset = {onClickReset} />
            <Child4 />
            <a href = '../Page2'>戻る</a>
        </>
    );

});