import { useState } from 'react';
import Slide from '../components/Slide';

const dummyData = [
    `@emotion/unitless@0.7.5`,
    `babel-plugin-styled-components@2.0.7`,
    `camelize@1.0.1`,
    `hoist-non-react-statics@3.3.2`,
    `picomatch@2.3.1`,
    `shallowequal@1.1.0`,
];

const MiniPage = () => {
    const dummyTexts = dummyData;
    let [movePixel, setMovePixel] = useState(0);

    const onClickHandlerRight = () => {
        setMovePixel((prev) => prev + 50);
    };

    const onClickHandlerLeft = () => {
        setMovePixel((prev) => prev - 50);
    };

    const onClickHandlerReset = () => {
        setMovePixel(0);
    };

    return (
        <>
            <Slide texts={dummyTexts} move={movePixel} />
            <button
                onClick={onClickHandlerLeft}
                style={{ width: '200px', height: '50px' }}
            >
                Left
            </button>
            <button
                onClick={onClickHandlerReset}
                style={{ width: '200px', height: '50px' }}
            >
                Reset
            </button>
            <button
                onClick={onClickHandlerRight}
                style={{ width: '200px', height: '50px' }}
            >
                Right
            </button>
        </>
    );
};

export default MiniPage;
