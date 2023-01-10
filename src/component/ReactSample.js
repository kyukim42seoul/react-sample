// React useState 배열 생성

import { useState } from "react";

const ReactSample = () => {
    console.log('React_sample.js');
    
    const [values, setValues] = useState([]);
    
    console.log(values);
    return (
        <h2>
            Sample JSX
        </h2>
    );
}

export default ReactSample;
