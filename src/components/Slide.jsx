import { useState } from 'react';
import Item from './Item';

const Slide = (props) => {
    const texts = props.texts;

    return (
        <div className='container'>
            {texts.map((text, index) => {
                return <Item key={index} sentence={text} move={props.move} />;
            })}
        </div>
    );
};

export default Slide;
