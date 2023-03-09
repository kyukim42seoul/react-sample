import Card from '../styled/Card';

const Item = (props) => {
    const sentence = props.sentence;

    return <Card move={props.move}>{sentence}</Card>;
};

export default Item;
