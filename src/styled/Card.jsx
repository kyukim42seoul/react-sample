import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    min-width: 200px;
    max-width: 400px;
    height: 100px;
    color: #d9d9d9;
    background-color: black;
    border: 1px solid white;
    margin: 5px 0px;
    transform: translate(${(props) => `${props.move}px` || '0px'});
    transition-duration: 0.5s;
`;

export default Card;
