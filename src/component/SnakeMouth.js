/*
    This module copies Kirby
    Add custom for binding input to Snake
*/

import { useState } from 'react';
import './SnakeMouth.css'

const handleSubmit = (event, props, newData, setNewData) => {
    event.preventDefault();
    console.log('SnakeMouth submitted data: ', event.target[0].value);
    console.log('keys: ', props.keys);
    const newKey = event.target[0].value;
    const newId = event.target[1].value;
    const newPw = event.target[2].value;
    const newTest = event.target[3].value;
    setNewData({
        key: newKey,
        id: newId,
        pw: newPw,
        test: newTest
    })
    props.dataRope(newData);
}

const handleChange = (event, item) => {
    console.log(item);
}

const SnakeMouth = (props) => {
    const [newData, setNewData] = useState({});
    const [inputValue, setInputValue] = useState();
    return (
        <form className="form" onSubmit={(event) => handleSubmit(event, props, newData, setNewData)}>
            {   
                props.keys.map((item, index) => {
                    return <div className='input-div' key={index}>
                            <label>{item}</label>
                            <input className="form-input" onChange={(event) => handleChange(event, item)}></input>
                        </div>;
                })
            }
            <button className="form-button">Submit</button>
        </form>
    );
}

export default SnakeMouth;