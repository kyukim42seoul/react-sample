/*
    This Container have undefined number of boxes.
    The number defines by length of props.array.
*/

import { useState } from "react";

/**
 * json 배열의 길이만큼 <div> 생성
 * @param {json} props json with 'id', 'pw'
 * @returns 'div' contains many 'div'
 */
const Pinocchio = (props) => {
    const [data, setData] = useState(props.data); // props.data 가 변경돼도 여기서 세팅 한 번 밖에 안함...
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