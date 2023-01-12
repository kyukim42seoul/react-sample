const SnakeTail = (props) => {
    return (
        <div>
            {
                props.data.map((data, index)=> {
                    return <div key={Math.random()}>{data.id}</div>
                })
            }
        </div>
    );
};

export default SnakeTail;