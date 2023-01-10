import { useState } from "react";
import SnakeMouth from "./SnakeMouth";

const Snake = (props) => {
    const [snakeData, setSnakeData] = useState(props.item); 

    const dataRope = (data) => {
        console.log('dataRope', data);
        // setSnakeData((prevData)=>{
        //     return {
        //         ...prevData, event
        //     }
        // });
    };

    return (
        <div className="snake-container">
            <SnakeMouth keys={Object.keys(props.item[0])} dataRope={dataRope}></SnakeMouth>
        </div>
    );
}

export default Snake;