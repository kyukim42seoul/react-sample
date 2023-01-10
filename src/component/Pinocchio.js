/*
    This Container have undefined number of boxes.
    The number defines by length of props.array.
*/

import { useState } from "react";

const Pinocchio = (props) => {
    const [data, setData] = useState(props.data);
    return (
        <div className="container">
            <h3>Pinocchio</h3>
            {
                data.map((data, index) => {
                    return <div key={index}>{data.id + ' ' + data.pw}</div>
                })
            }
        </div>
    )
}

export default Pinocchio;