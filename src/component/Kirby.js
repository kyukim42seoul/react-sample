/*
    This form contains inputs same number of props.item
    (but it's wrong I want to create inputs by 'props.item.values' not props.item)
*/

import './Kirby.css'

const Kirby = (props) => {
    const keys = Object.keys(props.item[0]);
    return (
        <form className="form">
            {   
                keys.map((item, index) => {
                    // return <input key={index} placeholder={item} className="form-input"></input>
                    return <div key={index} className='input-div'>
                        <label>{item}</label>
                        <input className="form-input"></input>
                    </div>
                })
            }
            <button className="form-button">Submit</button>
        </form>
    );
}

export default Kirby;