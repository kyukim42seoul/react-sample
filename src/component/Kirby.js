/*
    This form contains inputs same number of props.item
    (but it's wrong I want to create inputs by 'props.item.values' not props.item)
*/

import './Kirby.css'

/**
 * json 의 키 종류만큼 <input> 을 가진 <form> 반환
 * @param {props.item} json json with 'item[0]'
 * @returns 'form' contain number(Object.keys(props.item[0])) of 'input' 
 */

const Kirby = (props) => {
    const keys = Object.keys(props.item[0]);
    return (
        <form className="form">
            {   
                keys.map((item, index) => {
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