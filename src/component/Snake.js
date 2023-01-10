import { useEffect, useState } from "react";
import SnakeMouth from "./SnakeMouth";

const Snake = (props) => {
    const dataRope = (data) => {
        console.log('dataRope', data);
        props.item.push(data);
        console.log(props.item);
    };

    return (
        <div className="snake-container">
            <SnakeMouth keys={Object.keys(props.item[0])} dataRope={dataRope}></SnakeMouth>
        </div>
    );
}

export default Snake;