import ReactDOM from "react-dom";

const App = () => {
    // return <h1>こんにちは</h1>;

    // return (
    //     <div>
    //         <h1>こんにちは</h1>
    //         <p>お元気ですか？</p>
    //     </div>
    // );

    return (
        <>
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
        </>
    );


};

// ReactDOMを描画する
ReactDOM.render(<App />,document.getElementById("root"));