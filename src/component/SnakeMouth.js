/*
    This module copies Kirby
    Add custom for binding input to Snake
*/

import './SnakeMouth.css'

const SnakeMouth = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SnakeMouth submitted data: ', event.target[0].value);
        const newData = {
            key: event.target[0].value,
            id: event.target[1].value,
            pw: event.target[2].value,
        };
        props.onSaveData(newData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {   
                props.keys.map((item, index) => {
                    return <div className='input-div' key={index}>
                            <label>{item}</label>
                            <input className="form-input"></input>
                        </div>;
                })
            }
            <button className="form-button">Submit</button>
        </form>
    );
}

export default SnakeMouth;