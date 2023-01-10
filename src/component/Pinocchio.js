/*
    This Container have undefined number of boxes.
    The number defines by length of props.array.
*/

const Pinocchio = (props) => {
    return (
        <div className="container">
            {
                props.data.map((data, index) => {
                    return <div key={index}>{data.id + ' ' + data.pw}</div>
                })
            }
        </div>
    )
}

export default Pinocchio;