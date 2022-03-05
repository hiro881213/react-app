/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled"

export const Emotion = () => {
    
    // SCSSの書き方がそのまま可能な書き方
    const containerStyle = css`
        border: solid 1px #AAF;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    // インラインスタイルの書き方
    const titleStyle = css({
        margin:0,
        color: "#66F"
    });

    return (
        <div css={containerStyle}>
            <p css = {titleStyle}>Emotionです</p>
            <SButton>ボタン</SButton>
        </div>
    );

};

// styled-comoinentsの書き方
const SButton = styled.button`
    background-color: #AAF;
    border :none;
    padding: 8px;
    border-radius: 8px;
    color: #666;
    &: hover {
        background-color: #33F;
        color: #FFF;
        cursor: pointer;
    }
`;
