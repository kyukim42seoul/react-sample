const box = () => {
    const onClickHandler = () => {
        console.log(location.origin);
        fetch('http://localhost:3000/api/get/demo')
            .then((response) => {
                response.json().then((data) => console.log(data));
            })
            .catch((error) => {
                console.log(`Error: `, error);
            });
    };
    return (
        <div>
            box
            <button
                onClick={onClickHandler}
                style={{ width: `100px`, height: `50px` }}
            >
                Send Request
            </button>
        </div>
    );
};

export default box;
