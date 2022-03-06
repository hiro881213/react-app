import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion';
import { Tailwind } from './components/Tailwind';

export const Page2 = () => {

    return (
        <>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
            <Tailwind />
            <div>
                <a href = './'>戻る</a>
                <a href = '../Page3'>次へ</a>
            </div>
        </>
    );

};
