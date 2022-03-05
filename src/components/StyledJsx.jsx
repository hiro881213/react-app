export const StyledJsx = () => {

    return (
        <>
            <div className = 'container'>
                <p className = 'title'>Styled JSXです</p>
                <button className = 'botton'>ボタン</button>
            </div>
            <style jsx>
            {`
                .container {
                    border: solid 1px #AFA;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .title {
                    margin: 0;
                    color: #3F3;
                }

                .botton {
                    background-color: #AFA;
                    border: none;
                    padding: 8px;
                    border-radius: 8px;
                    color: #666;
                }
                
                .botton:hover {
                    background-color: #0A0;
                    color: #FFF;
                }

            `}
            </style>
        </>
    );

};